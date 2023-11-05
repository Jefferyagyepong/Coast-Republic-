import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="checkout">
      <div className="row">
        <div className="col-75">
          <div className="contain">
            <form onSubmit={handleSubmit} className="centered">
              <div className="row">
                <div className="col-50">
                  <label htmlFor="email">Email Address</label>

                  <input id="email" type="email" name="email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-50">
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
