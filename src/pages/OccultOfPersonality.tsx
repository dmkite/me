import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

const galleryItems: ScrollingGalleryItem[] = Array.from({ length: 22 }, (_, index) => {
  const number = index + 1;

  return {
    image: `https://picsum.photos/seed/tarot-${number}/900/700`,
    title: `Card ${number}`,
    desc: `Placeholder description for card ${number}.`,
  };
});

function OccultOfPersonality() {
  return (
    <ScrollingGallery
      namespace="occult"
      heroImage="https://picsum.photos/seed/occult-hero/2000/1200"
      heroTitle="Tarot is personal. Celebrity is universal."
      heroDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      items={galleryItems}
    />
  );
}

export default OccultOfPersonality;
