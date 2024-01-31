
export default function Newsletter() {
    return (
      <div className="ibrid-box">
        <div className="arrival-card arrival-card-brown">
          <h3 className="newsletter-heading">Join our newsletter now!</h3>
          <p className="footer-text">
            Register now and get our latest updates and promos
          </p>
          <form>
            <input type="email" name="email" placeholder="email" />
            <button>Join</button>
          </form>
        </div>
      </div>
    );
}
