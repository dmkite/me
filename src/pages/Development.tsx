import '../styles/main.css';

function Development() {
  return (
    <main className="development-page">
      <section className="development-hero">
        <img
          className="development-hero__image"
          src="https://picsum.photos/seed/android-dev/2000/1200"
          alt="Development"
        />
        <div className="development-hero__overlay" />
        <div className="development-hero__content">
          <h1 className="development-hero__title">Development</h1>
          <p className="development-hero__desc">
            I’m a full stack Android engineer bringing thoughtful, delightful experiences to millions of users.
          </p>
        </div>
      </section>

      <section className="development-content">
        <div className="development-content__inner">
          <article className="development-highlight">
            <h3 className="development-highlight__title">Duo Wear</h3>
            <p className="development-highlight__desc">
              Conducted market analysis to determine viability of a Wear OS companion app for Duo
              Mobile, garnered cross functional support, and orchestrated product development and
              release.
            </p>
            <ul className="development-highlight__stats">
              <li>+250,000 installs</li>
              <li>4.455 average rating in Google Play</li>
              <li>+6 million authentications</li>
            </ul>
            <a
              className="development-highlight__link"
              href="https://duo.com/blog/duo-wear-seamless-mfa-from-your-wrist"
              target="_blank"
              rel="noreferrer"
            >
              Read the official blog post
            </a>
          </article>

          <article className="development-highlight">
            <h3 className="development-highlight__title">Trusted Mobile Endpoints Using Webview</h3>
            <p className="development-highlight__desc">
              US Patent 12,470,543 — A method for preventing phishing attacks by generating a
              transaction identifier for authentication requests, transmitting an HTTP link with an
              associated cookie to an external device, and verifying cookie equivalence before
              granting access. Granted November 2025, assigned to Cisco Technology Inc.
            </p>
            <a
              className="development-highlight__link"
              href="https://patents.google.com/patent/US12470543B2"
              target="_blank"
              rel="noreferrer"
            >
              View patent
            </a>
          </article>

          <div className="development-links">
            <a
              className="development-links__link"
              href="https://www.linkedin.com/in/dylan-kite-19175593"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Development;
