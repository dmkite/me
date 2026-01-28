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
            I’m an Android developer focused on building fast, thoughtful product experiences—where
            performance, accessibility, and clean architecture are part of the design.
          </p>
        </div>
      </section>

      <section className="development-content">
        <div className="development-content__inner">
          <article className="development-highlight">
            <h3 className="development-highlight__title">Duo Wear</h3>
            <p className="development-highlight__desc">
              I helped bring Duo authentication to Wear OS with Duo Wear—making secure approvals and
              passcodes possible right from your wrist.
            </p>
            <a
              className="development-highlight__link"
              href="https://duo.com/blog/duo-wear-seamless-mfa-from-your-wrist"
              target="_blank"
              rel="noreferrer"
            >
              Read the official blog post
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
