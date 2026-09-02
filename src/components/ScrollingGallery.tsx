import { useState } from 'react';
import { Link } from 'react-router-dom';

export type ScrollingGalleryItem = {
  thumbnail?: string;
  image: string;
  firstEditionThumbnail?: string;
  firstEditionImage?: string;
  title: string;
  desc: string;
};

type EditionLink = {
  label: string;
  to: string;
};

type Props = {
  namespace: string;
  heroImage: string;
  heroTitle: string;
  heroDesc: string;
  items: ScrollingGalleryItem[];
  useFirstEdition?: boolean;
  editionLink?: EditionLink;
};

function ScrollingGallery({
  namespace,
  heroImage,
  heroTitle,
  heroDesc,
  items,
  useFirstEdition = false,
  editionLink,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const showNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % items.length));

  const getThumbnail = (item: ScrollingGalleryItem) =>
    (useFirstEdition && item.firstEditionThumbnail) || item.thumbnail || item.image;
  const getImage = (item: ScrollingGalleryItem) =>
    (useFirstEdition && item.firstEditionImage) || item.image;

  return (
    <main className={`${namespace}-page`}>
      <section className={`${namespace}-hero`}>
        <img src={heroImage} alt="Hero" className={`${namespace}-hero__image`} />
        <div className={`${namespace}-hero__overlay`} />
        <h1 className={`${namespace}-hero__title`}>{heroTitle}</h1>
        <p className={`${namespace}-hero__desc`}>{heroDesc}</p>
      </section>

      {editionLink ? (
        <div className={`${namespace}-edition-link`}>
          <Link to={editionLink.to} className={`${namespace}-edition-link__link`}>
            {editionLink.label}
          </Link>
        </div>
      ) : null}

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
                src={getThumbnail(item)}
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
                  src={getImage(selectedItem)}
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
