import { useState } from 'react';

export type ScrollingGalleryItem = {
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
  const [selectedItem, setSelectedItem] = useState<ScrollingGalleryItem | null>(null);

  const closeModal = () => setSelectedItem(null);

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
          {items.map((item) => (
            <article
              key={item.title}
              className={`${namespace}-card`}
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
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className={`${namespace}-modal__image`}
              />
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
