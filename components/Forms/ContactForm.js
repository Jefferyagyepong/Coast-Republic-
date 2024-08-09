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
<<<<<<< HEAD
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
=======
       
            <label for="email">Email:</label>
            <input type="text" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /><br/>
        
          
            <label for="comments">Message:</label>
            <textarea name="comments"rows={6} required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /><br/>
        
          
            <input
              type="submit"
              value="Send"
              onclick="return true"
              disabled={state.submitting}
            />
          
      
>>>>>>> 20cc8ea130ef6db92257bb93363448d75f0f8535
      </form>
    </div>
  );
}
export default ContactForm;
