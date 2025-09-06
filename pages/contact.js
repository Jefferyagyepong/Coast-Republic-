import Footer from "@/components/Footer/Footer";
import Header from "@/components/Head/Header";
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
    <>
      <Header />

      <div className="formContainer">
        <div>
          <h1>Contact Us</h1>
          <p>
            Have questions? We are here to help! Fill out the form below, and we
            will get back to you.
          </p>

          {submitted ? (
            <div>
              ✅ Your message has been sent. We will get back to you soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="inputGroup">
                <label>Message</label>
                <textarea
                  required
                  rows="4"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>

              <button type="submit">Send Message</button>
            </form>
          )}

        <div>
          <h2>IN STORE WAREHOUSE </h2>
          <p>📍 7 Asafo Dadiesoaba</p>
          <p>📞 +233 200-0000</p>
          <p>✉️ support@coastrepublic.com</p>
        </div>
      </div>
    </div>
    <Footer />
   
    </>
    

  );
};

export default Contact;
