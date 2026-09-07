/* eslint-disable react/react-in-jsx-scope */
function Contact() {
  return (
    <div className="flex-inline">
      <article>
          <em>
            {" "}
            <h6>Contact Us </h6>
          </em>
        <section>
        
          <p>
            If you have any questions, please feel free to reach out via email.
            We will get back to you as soon as we can we would also love to hear
            from your feedback, please let us know how we can improve. email us
            at info@coastrepublic.com or follow us on
            instagram.com/coast_republic. Thank you for shopping with us!
          </p>
        </section>
      </article>
      <h6>
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6>{" "}
    
    </div>
  );
}
export default Contact;