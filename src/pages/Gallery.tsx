import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

import aloof from '../assets/gallery/Aloof.jpg';
import amyStudy from '../assets/gallery/AmyStudy.jpg';
import areYouAWitch from '../assets/gallery/AreYouAWitch?.jpg';
import cyanotype1 from '../assets/gallery/Cyanotype1.jpg';
import cyanotype2 from '../assets/gallery/Cyanotype2.jpg';
import diana from '../assets/gallery/Diana.jpg';
import eyes from '../assets/gallery/Eyes.jpg';
import ginkgo from '../assets/gallery/Ginkgo.jpg';
import ninaStudy from '../assets/gallery/NinaStudy.jpg';
import pow from '../assets/gallery/Pow!.jpg';
import relic from '../assets/gallery/Relic.jpg';
import tangled from '../assets/gallery/Tangled.jpg';
import temperance from '../assets/gallery/Temperance.jpg';
import theStudy from '../assets/gallery/TheStudy.jpg';
import theTower from '../assets/gallery/TheTower.jpg';
import thingsWereSimplerBackThen from '../assets/gallery/ThingsWereSimplerBackThen.jpg';
import voyager1 from '../assets/gallery/Voyager1.jpg';

const galleryItems: ScrollingGalleryItem[] = [
  { image: aloof, title: 'Aloof', desc: '8.5 x 11, Pen & Ink, Water Color' },
  { image: amyStudy, title: 'Amy Study', desc: '8.5 x 11, Multi Media Screen Print' },
  { image: areYouAWitch, title: 'Are You A Witch?', desc: '6 x 9, Relief Print' },
  { image: cyanotype1, title: 'Cyanotype Study 1', desc: '8.5 x 11, Cyanotype' },
  { image: cyanotype2, title: 'Cyanotype Study 2', desc: '8.5 x 11, Cyanotype' },
  { image: diana, title: 'Diana', desc: '24 x 24, Pen & Ink, Water Color' },
  { image: eyes, title: 'Eyes', desc: '5 x 3, Pen & Ink, Water Color' },
  { image: ginkgo, title: 'Ginkgo', desc: '8.5 x 11, Screen Print' },
  { image: ninaStudy, title: 'Nina Study', desc: '8.5 x 11, Screen Print' },
  { image: pow, title: 'Pow!', desc: '30 x 40, Collage' },
  { image: relic, title: 'Relic', desc: '18 x 24, Wood Burning' },
  { image: tangled, title: 'Tangled', desc: '11 x 17, Acryllic' },
  { image: temperance, title: 'Temperance', desc: '8.5 x 11, Relief Print' },
  { image: theStudy, title: 'The Study', desc: '5 x 8 x 10, Wood' },
  { image: theTower, title: 'The Tower', desc: '8.5 x 11, Relieft print' },
  { image: thingsWereSimplerBackThen, title: 'Things Were Simpler Back Then', desc: '12 x 16, Acryllic' },
  { image: voyager1, title: 'Voyager 1', desc: '8.5 x 11, Screen Print' },
];

const heroImage = galleryItems[Math.floor(Math.random() * galleryItems.length)].image;

function Gallery() {
  return (
    <ScrollingGallery
      namespace="gallery"
      heroImage={heroImage}
      heroTitle="Gallery"
      heroDesc="A rotating selection of images, fragments, and studies. Click any card to see it full-size."
      items={galleryItems}
    />
  );
}

export default Gallery;
