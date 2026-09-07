/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";
import styles from "./Newsletter.module.css";

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
    <section className={styles.container} aria-labelledby="newsletter-heading">
      <div className={styles.intro}>
        <h5 id="newsletter-heading" className={styles.title}>
          Join the Coast Republic list
        </h5>
        <p className={styles.description}>
          New arrivals, seasonal edits, and 10% off your first order when you
          sign up. Exclusions apply — see our{" "}
          <Link href={"/privacy"} className={styles.link}>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href={"/terms"} className={styles.link}>
            Terms and Conditions
          </Link>
          .
        </p>
      </div>

      <div className={styles.formPanel}>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="newsletter-email">
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
              className={styles.formInput}
              aria-describedby={message ? "newsletter-message" : undefined}
            />
          </div>

          <button
            type="submit"
            className={styles.formButton}
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
                ? `${styles.formMessage} ${styles.formMessageError}`
                : `${styles.formMessage} ${styles.formMessageSuccess}`
            }
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
