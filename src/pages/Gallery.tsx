import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

// Thumbnails (600w webp) for gallery grid
import aloofThumb from '../assets/gallery/Aloof.jpg?w=600&format=webp&imagetools';
import amyStudyThumb from '../assets/gallery/AmyStudy.jpg?w=600&format=webp&imagetools';
import areYouAWitchThumb from '../assets/gallery/AreYouAWitch?.jpg?w=600&format=webp&imagetools';
import cyanotype1Thumb from '../assets/gallery/Cyanotype1.jpg?w=600&format=webp&imagetools';
import cyanotype2Thumb from '../assets/gallery/Cyanotype2.jpg?w=600&format=webp&imagetools';
import dianaThumb from '../assets/gallery/Diana.jpg?w=600&format=webp&imagetools';
import eyesThumb from '../assets/gallery/Eyes.jpg?w=600&format=webp&imagetools';
import ginkgoThumb from '../assets/gallery/Ginkgo.jpg?w=600&format=webp&imagetools';
import ninaStudyThumb from '../assets/gallery/NinaStudy.jpg?w=600&format=webp&imagetools';
import powThumb from '../assets/gallery/Pow!.jpg?w=600&format=webp&imagetools';
import relicThumb from '../assets/gallery/Relic.jpg?w=600&format=webp&imagetools';
import tangledThumb from '../assets/gallery/Tangled.jpg?w=600&format=webp&imagetools';
import temperanceThumb from '../assets/gallery/Temperance.jpg?w=600&format=webp&imagetools';
import theStudyThumb from '../assets/gallery/TheStudy.jpg?w=600&format=webp&imagetools';
import theTowerThumb from '../assets/gallery/TheTower.jpg?w=600&format=webp&imagetools';
import thingsWereSimplerBackThenThumb from '../assets/gallery/ThingsWereSimplerBackThen.jpg?w=600&format=webp&imagetools';
import voyager1Thumb from '../assets/gallery/Voyager1.jpg?w=600&format=webp&imagetools';

// Full size (1200w webp) for modal view
import aloofFull from '../assets/gallery/Aloof.jpg?w=1200&format=webp&imagetools';
import amyStudyFull from '../assets/gallery/AmyStudy.jpg?w=1200&format=webp&imagetools';
import areYouAWitchFull from '../assets/gallery/AreYouAWitch?.jpg?w=1200&format=webp&imagetools';
import cyanotype1Full from '../assets/gallery/Cyanotype1.jpg?w=1200&format=webp&imagetools';
import cyanotype2Full from '../assets/gallery/Cyanotype2.jpg?w=1200&format=webp&imagetools';
import dianaFull from '../assets/gallery/Diana.jpg?w=1200&format=webp&imagetools';
import eyesFull from '../assets/gallery/Eyes.jpg?w=1200&format=webp&imagetools';
import ginkgoFull from '../assets/gallery/Ginkgo.jpg?w=1200&format=webp&imagetools';
import ninaStudyFull from '../assets/gallery/NinaStudy.jpg?w=1200&format=webp&imagetools';
import powFull from '../assets/gallery/Pow!.jpg?w=1200&format=webp&imagetools';
import relicFull from '../assets/gallery/Relic.jpg?w=1200&format=webp&imagetools';
import tangledFull from '../assets/gallery/Tangled.jpg?w=1200&format=webp&imagetools';
import temperanceFull from '../assets/gallery/Temperance.jpg?w=1200&format=webp&imagetools';
import theStudyFull from '../assets/gallery/TheStudy.jpg?w=1200&format=webp&imagetools';
import theTowerFull from '../assets/gallery/TheTower.jpg?w=1200&format=webp&imagetools';
import thingsWereSimplerBackThenFull from '../assets/gallery/ThingsWereSimplerBackThen.jpg?w=1200&format=webp&imagetools';
import voyager1Full from '../assets/gallery/Voyager1.jpg?w=1200&format=webp&imagetools';

const galleryItems: ScrollingGalleryItem[] = [
  { thumbnail: aloofThumb, image: aloofFull, title: 'Aloof', desc: '8.5 x 11, Pen & Ink, Water Color' },
  { thumbnail: amyStudyThumb, image: amyStudyFull, title: 'Amy Study', desc: '8.5 x 11, Multi Media Screen Print' },
  { thumbnail: areYouAWitchThumb, image: areYouAWitchFull, title: 'Are You A Witch?', desc: '6 x 9, Relief Print' },
  { thumbnail: cyanotype1Thumb, image: cyanotype1Full, title: 'Cyanotype Study 1', desc: '8.5 x 11, Cyanotype' },
  { thumbnail: cyanotype2Thumb, image: cyanotype2Full, title: 'Cyanotype Study 2', desc: '8.5 x 11, Cyanotype' },
  { thumbnail: dianaThumb, image: dianaFull, title: 'Diana', desc: '24 x 24, Pen & Ink, Water Color' },
  { thumbnail: eyesThumb, image: eyesFull, title: 'Eyes', desc: '5 x 3, Pen & Ink, Water Color' },
  { thumbnail: ginkgoThumb, image: ginkgoFull, title: 'Ginkgo', desc: '8.5 x 11, Screen Print' },
  { thumbnail: ninaStudyThumb, image: ninaStudyFull, title: 'Nina Study', desc: '8.5 x 11, Screen Print' },
  { thumbnail: powThumb, image: powFull, title: 'Pow!', desc: '30 x 40, Collage' },
  { thumbnail: relicThumb, image: relicFull, title: 'Relic', desc: '18 x 24, Wood Burning' },
  { thumbnail: tangledThumb, image: tangledFull, title: 'Tangled', desc: '11 x 17, Acryllic' },
  { thumbnail: temperanceThumb, image: temperanceFull, title: 'Temperance', desc: '8.5 x 11, Relief Print' },
  { thumbnail: theStudyThumb, image: theStudyFull, title: 'The Study', desc: '5 x 8 x 10, Wood' },
  { thumbnail: theTowerThumb, image: theTowerFull, title: 'The Tower', desc: '8.5 x 11, Relieft print' },
  { thumbnail: thingsWereSimplerBackThenThumb, image: thingsWereSimplerBackThenFull, title: 'Things Were Simpler Back Then', desc: '12 x 16, Acryllic' },
  { thumbnail: voyager1Thumb, image: voyager1Full, title: 'Voyager 1', desc: '8.5 x 11, Screen Print' },
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
