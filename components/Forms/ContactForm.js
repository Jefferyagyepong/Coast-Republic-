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
       
            <label for="email">Email</label>
            <input type="text" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /><br/>
        
          
            <label for="comments">Message</label>
            <textarea name="comments"rows={6} required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
        
          
            <input
              type="submit"
              value="Send"
              onclick="return true"
              disabled={state.submitting}
            />
          
      
      </form>
    </div>
  );
}
export default ContactForm;
