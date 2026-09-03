/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Header from "@/components/Head/Header";
import Head from "next/head";
import FootBottom from "@/components/Footer/FootBottom";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Wire this up to your existing form/API route (e.g. pages/api/contact.js)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Coast Republic</title>
        <meta
          name="description"
          content="Get in touch with Coast Republic — questions about orders, sizing, or delivery."
        />
      </Head>

      <main>
        <Header />
        <div className="main-content">
        <h3>Contact Us</h3>
        <p className="intro">
          Have a question about an order, sizing, or delivery? Send us a
          message and our team will get back to you within 24 hours.
        </p>

        <div className="grid">
          <form onSubmit={handleSubmit} className="form">
            <label>
              Name
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "success" && (
              <p className="success">Thanks! We'll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

          <div className="info">
            <h2>Store Location</h2>
            <p>📍 AK-7175846, Asafo Dadiesoaba, Ghana</p>
            <h2>Phone</h2>
            <p>
              <a href="tel:+233244736420">+233 244 736 420</a>
            </p>
            <h2>Email</h2>
            <p>
              <a href="mailto:support@coastrepublic.com">
                support@coastrepublic.com
              </a>
            </p>
            <h2>Hours</h2>
            <p>Monday – Saturday, 9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <FootBottom/>
        </div>
      </main>

      <style jsx>{`
        .page {
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
          color: #1b2430;
        }
        h1 {
          font-size: 2rem;
          color: #0a2540;
          margin-bottom: 10px;
        }
        .intro {
          color: #5b6b7a;
          margin-bottom: 32px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
        }
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        label {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0a2540;
          gap: 6px;
        }
        input,
        textarea {
          font-family: inherit;
          font-size: 0.95rem;
          padding: 10px 12px;
          border: 1px solid #d7dce1;
          border-radius: 8px;
        }
        button {
          background: #0a2540;
          color: #fff;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .success {
          color: #1b7a43;
        }
        .error {
          color: #b3261e;
        }
        .info h2 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #5b6b7a;
          margin: 18px 0 4px;
        }
        .info h2:first-child {
          margin-top: 0;
        }
        .info p {
          margin: 0;
          color: #1b2430;
        }
        .info a {
          color: #0a2540;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

       
           

          
         