import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Newsletter() {
  const [state, handleSubmit] = useForm("xzzpgjrb");
  if (state.succeeded) {
    return <p>Thanks for joining our Newsletter</p>;
  }
  return (
<<<<<<< HEAD
    <div className="ibrid-box">
      <em>
        {" "}
        <h3>Join our newsletter now!</h3>
      </em>

      <p>Register now and get our latest updates and promos</p>
      <form onSubmit={handleSubmit}>
=======
       <div className="ibrid-box bgg222  margin">
  
          <h3>Join our newsletter now!</h3>
          <p>
            Register now and get our latest updates and promos
          </p>
    <form onSubmit={handleSubmit}>
    
>>>>>>> 81b8a603b8970c9e37ed39eae242159691509bed
        <input
          id="email"
          type="email"
          name="email"
          placeholder="enter your email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          placeholder="enter your email"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="button-link"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
