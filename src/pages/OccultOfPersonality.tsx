import '../styles/main.css';

type GalleryItem = {
  image: string;
  title: string;
  desc: string;
};

const galleryItems: GalleryItem[] = Array.from({ length: 22 }, (_, index) => {
  const number = index + 1;

  return {
    image: `https://picsum.photos/seed/tarot-${number}/900/700`,
    title: `Card ${number}`,
    desc: `Placeholder description for card ${number}.`,
  };
});

function OccultOfPersonality() {
  return (
    <main className="occult-page">
      <section className="occult-hero">
        <img
          src="https://picsum.photos/seed/occult-hero/2000/1200"
          alt="Hero"
          className="occult-hero__image"
        />
        <div className="occult-hero__overlay" />
        <h1 className="occult-hero__title">
          Tarot is personal. Celebrity is universal.
        </h1>
      </section>

      <section className="occult-gallery">
        <div className="occult-gallery__grid">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="occult-card"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="occult-card__image"
              />
              <div className="occult-card__body">
                <h3 className="occult-card__title">{item.title}</h3>
                <p className="occult-card__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OccultOfPersonality;
