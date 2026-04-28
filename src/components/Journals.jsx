function Journals() {
  const journals = [
    "Annals of Cardiology",
    "Journal of Neurology",
    "Clinical Nutrition Review",
    "Medical Imaging Today",
    "Journal of Oncology",
    "Public Health Research",
    "Pediatrics Open Access",
    "Dental Science Review",
    "Journal of Nanomedicine",
    "Gastroenterology Digest",
    "Psychiatry & Behavior",
    "Dermatology Practice",
    "Orthopedic Medicine",
    "Women Health Journal",
    "Urology Research",
    "Biotechnology Reports",
    "Critical Care Medicine",
    "Nursing Practice",
    "Immunology Science",
    "Global Medical Cases"
  ];

  return (
    <section className="journals" id="journals">
      <div className="section-header">
        <span className="section-tag">OUR SERVICES</span>
        <h2>Explore Journals & Resources</h2>
        <p>Trusted journals across multiple healthcare specialties.</p>
      </div>

      <div className="journal-scroll-box">
        {journals.map((item, index) => (
          <div className="journal-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journals;