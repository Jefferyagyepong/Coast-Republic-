
export default function Newsletter() {
    return (
      <div className="newsletter-box">
  
          <h3>Join our newsletter now!</h3>
          <p>
            Register now and get our latest updates and promos
          </p>
          <form>
            <div className="input-field">
                 <input type="email" name="email" placeholder="enter your email"/>   </div>
            <div className="input-field">
               <button className="button-link">Subscribe</button>
                </div>
           
            
          </form>
        </div>
 
    );
}
