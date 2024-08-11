
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Newsletter() {
  const [state, handleSubmit] = useForm("xzzpgjrb");
  if (state.succeeded) {
      return <p>Thanks for joining our Newsletter</p>;
  }
  return (
       <div className="ibrid-box">
  
          <h3>Join our newsletter now!</h3>
          <p>
            Register now and get our latest updates and promos
          </p>
    <form onSubmit={handleSubmit}>
    <div className="input-field">
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
      </div>
    <div className="input-field">
        
      <button type="submit" disabled={state.submitting} className="button-link">
        Submit
      </button>
      </div>
  
    </form>
    </div>
  );
}

export default Newsletter;


