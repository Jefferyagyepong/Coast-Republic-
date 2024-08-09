import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your Email"
           
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <p className="errorMessage">Error Message</p>
        </div>
        <div className="form-control">
          <label for="comments">Message</label>
          <textarea name="comments" rows={8} placeholder="Describe your issues here. We offer 24 hours customer service suppport " ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <p className="errorMessage">Error Message</p>
        </div>
        <div className="form-control">
          <button
            type="submit"
            value="Send"
            onclick="return true"
            disabled={state.submitting}
          >
            submit
          </button>
        <div className="complete-modal">
          <h2>successfully</h2>
        </div>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
