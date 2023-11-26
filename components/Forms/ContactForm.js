import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (

      <form onSubmit={handleSubmit}>
        <section className="left">
          <div className="input-container">
            <label for="email">Email</label>
            <input type="text"  required/>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div class="input-container">
            <label for="comments">Message</label>
            <textarea name="comments" id="" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </section>

        <div className="send-container">
          <input
            type="submit"
            value="Send"
            onclick="return true"
            disabled={state.submitting}
          />
        </div>
      </form>
   
  );
}
export default ContactForm;
