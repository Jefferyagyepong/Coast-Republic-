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
    <div className="footer-align-left">
      <h3>Subscribe to our Newsletter</h3><br/>
  
<p>Stay in the loop with the latest style news and get an exclusive 10% off when you subscribe to our emails.
Exclusions apply. Learn more about our Privacy Policy <Link href={"/privacy"}> here</Link>. <Link href={"/terms"}>Terms and conditions </Link> apply.</p>
<br/>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
