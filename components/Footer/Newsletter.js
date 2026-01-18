/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    setMessage(data.message);
    if (response.ok) setEmail(""); // Clear input if successful
  };

  return (
    <div className="newsletter-container">
      <h3 className="newsletter-title">Subscribe to our Newsletter</h3>
      <p className="newsletter-description">
        Stay updated with the latest style trends and get an exclusive 10% off
        when you subscribe to our emails. Exclusions apply. For details, see our{" "}
        <Link href={"/privacy"}>
          <a className="newsletter-link">Privacy Policy</a>
        </Link>{" "}
        and{" "}
        <Link href={"/terms"}>
          <a className="newsletter-link">Terms and Conditions</a>
        </Link>
        .
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}