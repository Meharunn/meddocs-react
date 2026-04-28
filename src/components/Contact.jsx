function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-left">
        <span className="section-tag">CONTACT US</span>
        <h2>Get In Touch With MedDocs</h2>
        <p>
          Reach out for journal publishing, e-book support,
          partnerships, or research inquiries.
        </p>

        <div className="contact-info">
          <p>📧 support@meddocs.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;