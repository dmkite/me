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
            My work asks the question: How do we <em>really</em> know someone?{' '}
            <em>The Occult of Personality</em> is a series of linocut portraits—a
            pairing of figures from pop culture and the 22 cards of the Major Arcana.
            Tarot is deeply personal, as is our relationship with the musicians we
            love, but is that relationship real? Do the fragments add up to a whole?
          </p>
          <p className="artist-statement__text">
            I carve each portrait through reduction, removing material and pulling
            lightness from the dark. The image emerges slowly, as if from the shadows,
            much like a parasocial relationship does. It never springs forth fully
            formed, but it accumulates until it mimics something real. Printmaking is
            the original viral media; its capacity for mass production and
            proliferation was a vanguard of the internet age, which amplifies our 
            fixation on celebrities. The desire to own the complete set echoes the 
            impulse that drives us to claim ownership over the people we admire.
          </p>
          <p className="artist-statement__text">
            The portraiture should stand on its own, but if you know the artist, and
            you know the card, you should be getting something more—a tension between
            what the archetype promises and what we can actually know about the person
            donning it.
          </p>
        </section>
      </div>
    </main>
  );

}

export default ArtistStatement;
