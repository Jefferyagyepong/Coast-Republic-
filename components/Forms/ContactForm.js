  import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xzzpgjrb");
  if (state.succeeded) {
    return <p>Thanks for your response! our team will reply you soon. Kindly check your email </p>;
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
             <input type="text" 
            id="email"
            placeholder=" email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          
           <textarea name="comments"rows={10}  
            id="message"
            placeholder="Describe your challenges here. we offer 24hr chat support"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors} />
              
              <button   type="submit"
              value="Send"
              onclick="return true"
              disabled={state.submitting} className="button-link">
         Submit </button>
          
        
      </form>
    </div>
  );
}
export default ContactForm;
