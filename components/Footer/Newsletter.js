import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
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
      <div>
        <h3>Subscribe to our newsletter for exclusive offers and updates</h3>
      </div>
      <br />
      <p>
        Stay in the loop with the latest style news and get an exclusive 10% off
        when you subscribe to our emails. Exclusions apply. Learn more about our
        Privacy Policy{" "}
        <Link href={"/privacy"} className="color-black">
          {" "}
          here
        </Link>
        .{" "}
        <Link href={"/terms"} className="color-black">
          Terms and conditions{" "}
        </Link>{" "}
        apply.
      </p>
      <br />
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">SignUp</button>
        </form>
        {message && <p>{message}</p>}
      </div>
             <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <Link
                href={"https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href={"https://twitter.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href={"https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
