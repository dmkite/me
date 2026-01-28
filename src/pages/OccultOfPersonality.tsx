import { useState } from 'react';
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
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const closeModal = () => setSelectedItem(null);

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
        <p className="occult-hero__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="occult-gallery">
        <div className="occult-gallery__grid">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="occult-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedItem(item);
                }
              }}
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

      {selectedItem ? (
        <div className="occult-modal__backdrop" onClick={closeModal}>
          <div
            className="occult-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="occult-modal__close" onClick={closeModal}>
              Close
            </button>
            <div className="occult-modal__content">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="occult-modal__image"
              />
              <div className="occult-modal__text">
                <h3 className="occult-modal__title">{selectedItem.title}</h3>
                <p className="occult-modal__desc">{selectedItem.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default OccultOfPersonality;
