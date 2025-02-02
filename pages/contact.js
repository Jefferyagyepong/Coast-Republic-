import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>
          Have questions? We're here to help! Fill out the form below, and we'll get back to you.
        </p>

        {submitted ? (
          <div>
            ✅ Your message has been sent. We'll get back to you soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                required
               
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                required
             
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                required
            
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
        
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-6 border-t pt-4 text-center">
          <h2 className="text-lg font-semibold">Our Contact Details</h2>
          <p className="text-gray-700">📍 123 Fashion Street, New York, NY</p>
          <p className="text-gray-700">📞 +1 (123) 456-7890</p>
          <p className="text-gray-700">✉️ support@fashionstore.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
