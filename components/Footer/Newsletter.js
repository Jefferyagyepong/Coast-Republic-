import { useState } from "react";
<<<<<<< HEAD
import Link from "next/link";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
=======

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b

  const handleSubmit = async e => {
    e.preventDefault();

<<<<<<< HEAD
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="footer-align-left">
      <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
      <p>
        Stay in the loop wit the latest styles news and get exclusively 10% off
        when you subscribe to our emails. Learn more about our Privacy Policy{" "}
        <Link href={"/policy"}> here. </Link>
        Learn more about our Privacy Policy{" "}
        <Link href={"/policy"}> Terms and conditions. </Link>
        apply
      </p>
      {success && <p>Thanks for subscribing!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

=======
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
    <div>
      <h3>Subscribe to our Newsletter</h3>
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
<<<<<<< HEAD
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={isLoading} >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
=======
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
