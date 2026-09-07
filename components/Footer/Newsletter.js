/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";


export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "You're subscribed. Welcome aboard.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Couldn't reach the server. Try again in a moment.");
    }
  };

  return (
    <section className="newsletter-container" aria-labelledby="newsletter-heading">
      <div className="newsletter-intro">
        <h id="newsletter-heading" className="newsletter-title">
          Join the Coast Republic list
        </h6>
        <p className="newsletter-description">
          New arrivals, seasonal edits, and 10% off your first order when you
          sign up. Exclusions apply — see our{" "}
          <Link href={"/privacy"} className="newsletter-link">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={"/terms"} className="newsletter-link">
            Terms and Conditions
          </Link>
          .
        </p>
      </div>

      <div className="newsletter-form-panel">
        <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
          <div className="newsletter-form-group">
            <label className="newsletter-form-label" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="newsletter-form-input"
              aria-describedby={message ? "newsletter-message" : undefined}
            />
          </div>

          <button
            type="submit"
            className="newsletter-form-button"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Signing up…" : "Sign up"}
          </button>
        </form>

        {message && (
          <p
            id="newsletter-message"
            role="status"
            className={
              status === "error"
                ? "newsletter-form-message newsletter-form-message-error"
                : "newsletter-form-message newsletter-form-message-success"
            }
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
