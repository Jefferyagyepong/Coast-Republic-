import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Newsletter() {
  const [state, handleSubmit] = useForm("xzzpgjrb");
  if (state.succeeded) {
    return <p>Thanks for joining our Newsletter</p>;
  }
  return (
       <div className="ibrid-box bgg222  margin"><br/>  <br/>
  <em><h3>Join our newsletter now!</h3></em>
         <br/>  <br/>
          <p>
            Register now and get our latest updates and promos
          </p><br/>  <br/>
    <form onSubmit={handleSubmit}>
    
        <input
          id="email"
          type="email"
          name="email"
          placeholder=" email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          placeholder="enter your email"
        /><br/>  <br/>

        <button
          type="submit"
          disabled={state.submitting}
          className="button-link"
        >
          Subscribe
        </button><br/>  <br/>
      </form>
    </div>
  );
}

export default Newsletter;
