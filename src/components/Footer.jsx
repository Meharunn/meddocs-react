function Footer() {

const items = [
                "Cardiology",
                "Neurology",
                "Oncology",
                "Pediatrics",
                "Dermatology",
                "Radiology",
                "Surgery",
                "Nutrition",
                "Public Health",
                "Microbiology"
                ];

return (
        <footer className="footer">

        <div className="footer-top">
            <h2>MedDocs</h2>
            <p>Trusted journals and e-books for healthcare professionals.</p>
        </div>

        <div className="partner-title">
            <h3>Partnered Content Networks</h3>
        </div>

        <div className="marquee">
            <div className="marquee-track">
                {[...items,...items].map((item,index)=>(
            <div className="marquee-item" key={index}>
             {item}
            </div>
             ))}
            </div>
            </div>

            <div className="footer-bottom">
            © 2026 MedDocs. All Rights Reserved.
        </div>

        </footer>
        );
        }

export default Footer;