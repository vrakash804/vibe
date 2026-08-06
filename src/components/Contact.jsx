function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="glass reveal contact-card" data-reveal>
          <div className="section-header">
            <h2>
              Let’s <span className="gradient-text">Connect</span>
            </h2>
            <div className="underline"></div>
          </div>
          <p>Open to internships, collaborations, and conversations around AI, multimedia, and intelligent interfaces.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <div className="social-row contact-social">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:akash@example.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
