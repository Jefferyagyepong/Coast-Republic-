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
        <div className="input-field">
             <input type="text" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div className="input-field"
           <textarea name="comments"rows={10} required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors} />
            
          </div>
          
             <div className="input-field">
               <button   type="submit"
              value="Send"
              onclick="return true"
              disabled={state.submitting}>
          
         Submit </button>
          </div>
        
      </form>
    </div>
  );
}
export default ContactForm;
