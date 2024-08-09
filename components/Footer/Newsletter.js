
export default function Newsletter() {
    return (
      <div className="newsletter-box">
  
          <h3>Join our newsletter now!</h3><br/>
          <p>
            Register now and get our latest updates and promos
          </p><br/>
          <form>
            <label for="email">Email:</label>
            <input type="email" name="email"  />
           <br/> <button className="button-link">Join</button>
          </form>
        </div>
 
    );
}
