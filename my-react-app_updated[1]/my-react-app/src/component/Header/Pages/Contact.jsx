import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "", agree: false
  });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message || !form.agree) {
      setStatus({ type: "error", msg: "Please fill required fields and accept the terms." });
      return;
    }
    // TODO: Replace with real backend/Email API call
    console.log("Contact form submitted:", form);
    setStatus({ type: "success", msg: "Thanks! We’ve received your message." });
    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "", agree: false });
  };

  return (
    <main className="contact">
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <h1>Contact us</h1>
          <p>Questions about products, partnerships, or support? We’re here to help.</p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="cards">
        <article className="card">
          <div className="card__icon" aria-hidden>📞</div>
          <h3>Sales</h3>
          <p>Looking to get started or need a demo? Talk to our sales team.</p>
          <a className="card__cta" href="tel:+911234567890">+91 12345 67890</a>
        </article>

        <article className="card">
          <div className="card__icon" aria-hidden>🛠️</div>
          <h3>Support</h3>
          <p>Having trouble with your account or app?</p>
          <a className="card__cta" href="mailto:support@example.com">support@example.com</a>
        </article>

        <article className="card">
          <div className="card__icon" aria-hidden>📨</div>
          <h3>General</h3>
          <p>For partnerships, press, or anything else.</p>
          <a className="card__cta" href="mailto:hello@example.com">hello@example.com</a>
        </article>
      </section>

      {/* Two-column: form + addresses */}
      <section className="grid">
        <div className="formWrap">
          <h2>Tell us a bit about you</h2>
          <form onSubmit={onSubmit} noValidate>
            <div className="row">
              <label>Full name *</label>
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
            </div>

            <div className="row two">
              <div>
                <label>Email *</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="name@company.com" required />
              </div>
              <div>
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} placeholder="+91 9xxxx xxxxx" />
              </div>
            </div>

            <div className="row two">
              <div>
                <label>Company</label>
                <input name="company" value={form.company} onChange={onChange} placeholder="Company name" />
              </div>
              <div>
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} placeholder="How can we help?" />
              </div>
            </div>

            <div className="row">
              <label>Message *</label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder="Write your question…" required />
            </div>

            <div className="row chk">
              <input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={onChange} />
              <label htmlFor="agree">I agree to be contacted and accept the privacy policy *</label>
            </div>

            <button type="submit" className="btnPrimary">Submit</button>

            {status.msg && (
              <p className={`formStatus ${status.type === "error" ? "isError" : "isOk"}`}>{status.msg}</p>
            )}
          </form>
        </div>

        <aside className="side">
          <h2>Our offices</h2>
          <ul className="addresses">
            <li>
              <strong>Head Office</strong><br />
              123, Business Park, Bengaluru, KA 560001<br />
              Mon–Fri, 9:00–18:00 IST
            </li>
            <li>
              <strong>Mumbai</strong><br />
              22, Tech Street, Andheri (E), Mumbai 400059
            </li>
          </ul>

          <h3>Follow us</h3>
          <div className="social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter / X">X</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </aside>
      </section>

      {/* Map */}
      <section className="mapWrap" aria-label="Map">
        <iframe
          title="Office location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v0000000000"
        ></iframe>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently asked questions</h2>
        <details>
          <summary>How soon will you respond?</summary>
          <p>Typically within one business day.</p>
        </details>
        <details>
          <summary>Do you offer demos?</summary>
          <p>Yes—tell us your use case in the form above and we’ll schedule one.</p>
        </details>
        <details>
          <summary>Where are you located?</summary>
          <p>We’re headquartered in Bengaluru with teams in Mumbai.</p>
        </details>
      </section>
    </main>
  );
}
