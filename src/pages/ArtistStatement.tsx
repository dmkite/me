import '../styles/main.css';
import profPic from '../assets/prof-pic.png';


function ArtistStatement() {
  return (
    <main className="artist-statement">
      <div className="artist-statement__frame">
        <section className="artist-statement__media">
          <img
            className="artist-statement__image"
            src={profPic}
            alt="Portrait"
          />
        </section>

        <section className="artist-statement__content">
          <h1 className="artist-statement__title">Artist Statement</h1>
          <p className="artist-statement__text">
            I make work for the moment right before language arrives—when you can still feel
            meaning as temperature, pressure, and rhythm. My practice moves between image,
            object, and small systems: photographs that behave like evidence from a parallel
            life, installations that read like rooms with a secret agenda, and digital pieces
            that glitch on purpose—because truth rarely holds a clean edge.
          </p>
          <p className="artist-statement__text">
            I’m drawn to the way symbols travel: how a tarot card, a celebrity face, a logo,
            or a family snapshot can become a shared myth with private consequences. I treat
            nostalgia as a material, obsession as a compass, and the internet as a haunted
            archive. The goal isn’t to explain anything—it’s to build an atmosphere you can
            stand inside, where beauty feels slightly dangerous and the familiar becomes
            strangely new. I’m based in the Ann Arbor / Ypsilanti (Ypsi) area, and a lot of
            the work starts as a local obsession that mutates into a universal one.
          </p>
        </section>
      </div>
    </main>
  );

}

export default ArtistStatement;
