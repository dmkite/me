import '../styles/main.css';

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contact</h1>
          <p className="contact-hero__desc">
            Drop a note—commissions, collaborations, or just saying hi.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <div className="contact-card__frame">
            <iframe
              className="contact-card__iframe"
              src="https://docs.google.com/forms/d/e/1FAIpQLSft0lqeBXme-gocmxmBhy2QxrKaXH4z7vIAU3r2G2PyFknLRA/viewform?embedded=true"
              title="Contact form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
