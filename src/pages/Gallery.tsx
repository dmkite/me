import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

const galleryItems: ScrollingGalleryItem[] = Array.from({ length: 24 }, (_, index) => {
  const number = index + 1;

  return {
    image: `https://picsum.photos/seed/gallery-${number}/900/700`,
    title: `Study ${number}`,
    desc: `Placeholder description for piece ${number}.`,
  };
});

function Gallery() {
  return (
    <ScrollingGallery
      namespace="gallery"
      heroImage="https://picsum.photos/seed/gallery-hero/2000/1200"
      heroTitle="Gallery"
      heroDesc="A rotating selection of images, fragments, and studies. Click any card to see it full-size."
      items={galleryItems}
    />
  );
}

export default Gallery;
