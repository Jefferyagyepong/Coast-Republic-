import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="payment-container">
        <Image
          src={"/logo-whatsapp.svg"}
          height={10}
          width={15}
          alt="momo logo"
          className="footer-tag"
        />
        <Image
          src={"/mail.svg"}
          height={10}
          width={15}
          alt="mail-icon"
          className="footer-tag"
        />

        <Image
          src={"/logo-facebook.svg"}
          height={10}
          width={15}
          alt="facebook icon"
          className="footer-tag"
        />
        <Image
          src={"/logo-twitter.svg"}
          height={10}
          width={15}
          alt="twitter icon"
          className="footer-tag"
        />
      </div>
    </div>
  );
}
