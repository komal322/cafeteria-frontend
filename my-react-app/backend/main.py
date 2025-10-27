from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from jose import JWTError, jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext
import json
import os
import random
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# -------------------------------------------------
# 🚀 Initialize FastAPI app
# -------------------------------------------------
app = FastAPI(title="FastAPI JWT Auth with OTP")

# ✅ Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------
# 📂 User data storage
# -------------------------------------------------
FILE_PATH = "users.json"

if os.path.exists(FILE_PATH):
    with open(FILE_PATH, "r") as f:
        try:
            users = json.load(f)
        except json.JSONDecodeError:
            users = {}
else:
    users = {}

# -------------------------------------------------
# 🔐 JWT Configuration
# -------------------------------------------------
SECRET_KEY = "my_secret_key_123"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 720
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# -------------------------------------------------
# 🔒 Password Hashing
# -------------------------------------------------
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    password = password[:72]
    return pwd_context.hash(password)

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

# -------------------------------------------------
# ✉️ Mailtrap SMTP Configuration
# -------------------------------------------------
SMTP_SERVER = "sandbox.smtp.mailtrap.io"
SMTP_PORT = 587
SMTP_USERNAME = "bf7f3225e429aa"  # ✅ Your Mailtrap username
SMTP_PASSWORD = "05d93a64b26949"  # ✅ Replace with your Mailtrap password

otp_storage = {}        # {email: {"otp": ..., "time": ...}}
pending_users = {}      # {email: user_data waiting for OTP}

def send_otp_email(to_email, otp):
    subject = "Your OTP Verification Code"
    body = f"""
    <html>
    <body>
        <h2>FastAPI Email Verification</h2>
        <p>Your OTP code is: <b>{otp}</b></p>
        <p>This code will expire in 2 minutes.</p>
    </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["From"] = "FastAPI <no-reply@example.com>"
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "html"))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
        print(f"✅ OTP email sent successfully to {to_email}")
    except Exception as e:
        print("❌ Failed to send OTP:", e)
        raise HTTPException(status_code=500, detail="Failed to send OTP email")

# -------------------------------------------------
# 🧩 Pydantic Models
# -------------------------------------------------
class User(BaseModel):
    firstName: str
    lastName: str
    email: str
    username: str
    password: str
    location: str
    contactNumber: str

class LoginUser(BaseModel):
    email: str
    password: str

class VerifyOTP(BaseModel):
    email: str
    otp: str

# -------------------------------------------------
# 🧠 Helper Functions
# -------------------------------------------------
def save_users():
    with open(FILE_PATH, "w") as f:
        json.dump(users, f, indent=4)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None or email not in users:
            raise HTTPException(status_code=401, detail="Invalid token")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

# -------------------------------------------------
# 🚀 Routes
# -------------------------------------------------
@app.get("/")
def root():
    return {"message": "✅ FastAPI backend is running!"}

# ✅ Signup Route (sends OTP)
@app.post("/signup")
def signup(user: User):
    if user.email in users:
        raise HTTPException(status_code=400, detail="User with this email already exists")

    otp = str(random.randint(100000, 999999))
    otp_storage[user.email] = {"otp": otp, "time": datetime.utcnow()}
    pending_users[user.email] = {
        "firstName": user.firstName,
        "lastName": user.lastName,
        "username": user.username,
        "password": hash_password(user.password),
        "location": user.location,
        "contactNumber": user.contactNumber,
    }

    send_otp_email(user.email, otp)
    return {"message": "OTP sent to your email for verification."}

# ✅ Verify OTP Route
@app.post("/verify-otp")
def verify_otp(data: VerifyOTP):
    if data.email not in otp_storage:
        raise HTTPException(status_code=400, detail="No OTP found for this email")

    stored_otp = otp_storage[data.email]["otp"]
    otp_time = otp_storage[data.email]["time"]

    if datetime.utcnow() - otp_time > timedelta(minutes=2):
        del otp_storage[data.email]
        raise HTTPException(status_code=400, detail="OTP expired, please sign up again")

    if data.otp != stored_otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")

    users[data.email] = pending_users[data.email]
    save_users()

    del otp_storage[data.email]
    del pending_users[data.email]

    return {"message": "✅ Email verified and account created successfully!"}

# ✅ Login Route
@app.post("/login")
def login(user: LoginUser):
    if user.email not in users or not verify_password(user.password, users[user.email]["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    access_token = create_access_token({"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

# ✅ Protected Profile Route
@app.get("/profile")
def profile(email: str = Depends(verify_token)):
    user_data = users.get(email, {})
    return {
        "message": f"👋 Welcome {user_data.get('firstName', '')}!",
        "email": email,
        "details": user_data,
    }
