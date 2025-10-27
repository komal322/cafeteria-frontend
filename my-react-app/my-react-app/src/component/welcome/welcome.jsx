import React, { useEffect, useState } from "react";

function Welcome() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("⚠️ You are not logged in.");
      return;
    }

    fetch("http://127.0.0.1:8000/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail || data.message?.includes("Invalid")) {
          setError("❌ Invalid or expired token.");
        } else {
          setMessage(data.message || "✅ Welcome back!");
        }
      })
      .catch(() => setError("⚠️ Server error. Please try again later."));
  }, []);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "red" }}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message || "Loading..."}</h2>
    </div>
  );
}

export default Welcome;



// import React, { useEffect, useState } from "react";

// function Welcome() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setMessage("⚠️ You are not logged in.");
//       return;
//     }

//     fetch("http://localhost:8000/profile", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message))
//       .catch(() => setMessage("❌ Invalid or expired token."));
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>{message}</h2>
//     </div>
//   );
// }

// export default Welcome;
