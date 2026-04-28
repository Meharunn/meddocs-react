function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <span className="section-tag">ABOUT US</span>
        <h2>Trusted Platform for Global Medical Publishing</h2>

        <p>
          MedDocs provides open access peer reviewed journals, research
          publications, e-books, and international conferences.
        </p>

        <p>
          We support doctors, researchers, students, and institutions with
          trusted scientific knowledge worldwide.
        </p>

        <button className="primary-btn">Learn More</button>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
          alt="Medical Team"
        />
      </div>
    </section>
  );
}

export default About;