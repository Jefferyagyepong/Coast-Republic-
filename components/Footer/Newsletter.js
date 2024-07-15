
export default function Newsletter() {
    return (
      <div className="newsletter-box">
        <div className="newsletter-card">
          <h3>Join our newsletter now!</h3><br/>
          <p>
            Register now and get our latest updates and promos
          </p><br/>
          <form>
            <input type="email" name="email" placeholder="email" />
            <button className="button-link">Join</button>
          </form><br/>
        </div>
      </div>
    );
}
