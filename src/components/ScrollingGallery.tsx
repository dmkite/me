import { useState } from 'react';

export type ScrollingGalleryItem = {
  thumbnail?: string;
  image: string;
  title: string;
  desc: string;
};

type Props = {
  namespace: string;
  heroImage: string;
  heroTitle: string;
  heroDesc: string;
  items: ScrollingGalleryItem[];
};

function ScrollingGallery({ namespace, heroImage, heroTitle, heroDesc, items }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const showNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % items.length));

  return (
    <main className={`${namespace}-page`}>
      <section className={`${namespace}-hero`}>
        <img src={heroImage} alt="Hero" className={`${namespace}-hero__image`} />
        <div className={`${namespace}-hero__overlay`} />
        <h1 className={`${namespace}-hero__title`}>{heroTitle}</h1>
        <p className={`${namespace}-hero__desc`}>{heroDesc}</p>
      </section>

      <section className={`${namespace}-gallery`}>
        <div className={`${namespace}-gallery__grid`}>
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`${namespace}-card`}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <img
                src={item.thumbnail ?? item.image}
                alt={item.title}
                loading="lazy"
                className={`${namespace}-card__image`}
              />
              <div className={`${namespace}-card__body`}>
                <h3 className={`${namespace}-card__title`}>{item.title}</h3>
                <p className={`${namespace}-card__desc`}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedItem ? (
        <div className={`${namespace}-modal__backdrop`} onClick={closeModal}>
          <div
            className={`${namespace}-modal`}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={`${namespace}-modal__close`} onClick={closeModal}>
              Close
            </button>
            <div className={`${namespace}-modal__content`}>
              <div className={`${namespace}-modal__image-wrap`}>
                <button
                  type="button"
                  className={`${namespace}-modal__nav ${namespace}-modal__nav--prev`}
                  onClick={showPrev}
                  aria-label="Previous"
                >
                  ‹
                </button>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className={`${namespace}-modal__image`}
                />
                <button
                  type="button"
                  className={`${namespace}-modal__nav ${namespace}-modal__nav--next`}
                  onClick={showNext}
                  aria-label="Next"
                >
                  ›
                </button>
              </div>
              <div className={`${namespace}-modal__text`}>
                <h3 className={`${namespace}-modal__title`}>{selectedItem.title}</h3>
                <p className={`${namespace}-modal__desc`}>{selectedItem.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default ScrollingGallery;
