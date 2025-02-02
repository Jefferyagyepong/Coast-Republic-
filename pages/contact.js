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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white p-8 shadow-lg rounded-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions? We're here to help! Fill out the form below, and we'll get back to you.
        </p>

        {submitted ? (
          <div className="text-green-600 text-center font-semibold">
            ✅ Your message has been sent. We'll get back to you soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold">Message</label>
              <textarea
                required
                className="w-full p-2 border rounded-md"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
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
