import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

// Thumbnails (600w webp) for gallery grid
import blankThumb from '../assets/occult_of_personality/0_Blank_0Ed.jpg?w=600&format=webp&imagetools';
import theMagicianThumb from '../assets/occult_of_personality/1_TheMagician_2Ed.jpg?w=600&format=webp&imagetools';
import theEmperorThumb from '../assets/occult_of_personality/4_TheEmperor_2Ed.jpg?w=600&format=webp&imagetools';
import theHierophantThumb from '../assets/occult_of_personality/5_TheHierophant_2Ed.jpg?w=600&format=webp&imagetools';
import theChariotThumb from '../assets/occult_of_personality/7_TheChariot_2Ed.jpg?w=600&format=webp&imagetools';
import strengthThumb from '../assets/occult_of_personality/8_Strength_2Ed.jpg?w=600&format=webp&imagetools';
import theHermitThumb from '../assets/occult_of_personality/9_TheHermit_2Ed.jpg?w=600&format=webp&imagetools';
import justiceThumb from '../assets/occult_of_personality/11_Justice_2Ed.jpg?w=600&format=webp&imagetools';
import theHangedManThumb from '../assets/occult_of_personality/12_TheHangedMan_2Ed.jpg?w=600&format=webp&imagetools';
import deathThumb from '../assets/occult_of_personality/13_Death_2Ed.jpg?w=600&format=webp&imagetools';
import theDevilThumb from '../assets/occult_of_personality/15_TheDevil_2Ed.jpg?w=600&format=webp&imagetools';
import theMoonThumb from '../assets/occult_of_personality/18_TheMoon_2Ed.jpg?w=600&format=webp&imagetools';
import theSunThumb from '../assets/occult_of_personality/19_TheSun_2Ed.jpg?w=600&format=webp&imagetools';
import theWorldThumb from '../assets/occult_of_personality/21_TheWorld_2Ed.jpg?w=600&format=webp&imagetools';

// Full size (1200w webp) for modal view
import blankFull from '../assets/occult_of_personality/0_Blank_0Ed.jpg?w=1200&format=webp&imagetools';
import theMagicianFull from '../assets/occult_of_personality/1_TheMagician_2Ed.jpg?w=1200&format=webp&imagetools';
import theEmperorFull from '../assets/occult_of_personality/4_TheEmperor_2Ed.jpg?w=1200&format=webp&imagetools';
import theHierophantFull from '../assets/occult_of_personality/5_TheHierophant_2Ed.jpg?w=1200&format=webp&imagetools';
import theChariotFull from '../assets/occult_of_personality/7_TheChariot_2Ed.jpg?w=1200&format=webp&imagetools';
import strengthFull from '../assets/occult_of_personality/8_Strength_2Ed.jpg?w=1200&format=webp&imagetools';
import theHermitFull from '../assets/occult_of_personality/9_TheHermit_2Ed.jpg?w=1200&format=webp&imagetools';
import justiceFull from '../assets/occult_of_personality/11_Justice_2Ed.jpg?w=1200&format=webp&imagetools';
import theHangedManFull from '../assets/occult_of_personality/12_TheHangedMan_2Ed.jpg?w=1200&format=webp&imagetools';
import deathFull from '../assets/occult_of_personality/13_Death_2Ed.jpg?w=1200&format=webp&imagetools';
import theDevilFull from '../assets/occult_of_personality/15_TheDevil_2Ed.jpg?w=1200&format=webp&imagetools';
import theMoonFull from '../assets/occult_of_personality/18_TheMoon_2Ed.jpg?w=1200&format=webp&imagetools';
import theSunFull from '../assets/occult_of_personality/19_TheSun_2Ed.jpg?w=1200&format=webp&imagetools';
import theWorldFull from '../assets/occult_of_personality/21_TheWorld_2Ed.jpg?w=1200&format=webp&imagetools';

const galleryItems: ScrollingGalleryItem[] = [
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The Fool',
    desc: 'New beginnings, innocence, and a leap of faith. Pure potential before the journey begins. Trust the path even when you cannot see ahead.',
  },
  {
    thumbnail: theMagicianThumb,
    image: theMagicianFull,
    title: 'The Magician',
    desc: 'Willpower, resourcefulness, and turning intention into reality. You have everything you need — focus your energy and act.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The High Priestess',
    desc: 'Intuition, mystery, and inner knowledge. Look inward and trust what you find beneath the surface.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The Empress',
    desc: 'Fertility, creativity, and nurturing abundance. Tend to what you are growing with patience and care.',
  },
  {
    thumbnail: theEmperorThumb,
    image: theEmperorFull,
    title: 'The Emperor',
    desc: 'Order, discipline, and authority. Leadership through structure, clear boundaries, and the willingness to take responsibility.',
  },
  {
    thumbnail: theHierophantThumb,
    image: theHierophantFull,
    title: 'The Hierophant',
    desc: 'Tradition, spiritual authority, and shared belief systems. Mentorship and inherited wisdom. Do the structures you follow still serve your growth?',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The Lovers',
    desc: 'Union, choice, and the alignment of values. The decisions that define who you are and the consequences that follow.',
  },
  {
    thumbnail: theChariotThumb,
    image: theChariotFull,
    title: 'The Chariot',
    desc: 'Determination, control, and triumph through discipline. Victory comes only through focused effort and harnessing opposing forces.',
  },
  {
    thumbnail: strengthThumb,
    image: strengthFull,
    title: 'Strength',
    desc: 'Courage, patience, and inner fortitude. True power comes from mastering yourself, not dominating others.',
  },
  {
    thumbnail: theHermitThumb,
    image: theHermitFull,
    title: 'The Hermit',
    desc: 'Solitude, introspection, and the search for deeper truth. Step away from noise and listen to what silence teaches.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'Wheel of Fortune',
    desc: 'Change, cycles, and forces beyond your control. What rises will fall; what falls will rise. Find your center within the turning.',
  },
  {
    thumbnail: justiceThumb,
    image: justiceFull,
    title: 'Justice',
    desc: 'Clarity, fairness, and the consequences of past actions. Truth over mercy. What you set in motion returns to you.',
  },
  {
    thumbnail: theHangedManThumb,
    image: theHangedManFull,
    title: 'The Hanged Man',
    desc: 'Surrender, not defeat. A willing pause that shifts perspective entirely. The answer comes only from letting go.',
  },
  {
    thumbnail: deathThumb,
    image: deathFull,
    title: 'Death',
    desc: 'Transformation, not ending. The necessary clearing away of what no longer serves you. Release your grip on what is already gone.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'Temperance',
    desc: 'Balance, moderation, and the patient blending of opposites. Not compromise but integration. Find the middle path.',
  },
  {
    thumbnail: theDevilThumb,
    image: theDevilFull,
    title: 'The Devil',
    desc: 'Bondage, materialism, and the shadow self. Attachments you mistake for necessities. The chains are loose — are you ready to see?',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The Tower',
    desc: 'Sudden upheaval and the destruction of false structures. What collapses needed to fall. From the rubble, something honest emerges.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'The Star',
    desc: 'Hope renewed after devastation. Calm, clarity, and faith restored. Trust that what was broken is mending.',
  },
  {
    thumbnail: theMoonThumb,
    image: theMoonFull,
    title: 'The Moon',
    desc: 'Illusion, anxiety, and the unconscious mind. Nothing is as it appears. Fear clouds your judgment — navigate carefully.',
  },
  {
    thumbnail: theSunThumb,
    image: theSunFull,
    title: 'The Sun',
    desc: 'Joy, vitality, and success without ambiguity. Clarity after confusion. Warmth, confidence, and things going right.',
  },
  {
    thumbnail: blankThumb,
    image: blankFull,
    title: 'Judgement',
    desc: 'Resurrection, reckoning, and a call to account. Evaluate yourself honestly — not with guilt, but with clarity for renewal.',
  },
  {
    thumbnail: theWorldThumb,
    image: theWorldFull,
    title: 'The World',
    desc: 'Completion, wholeness, and the end of a major cycle. A moment of integration before the next journey begins.',
  },
];

function OccultOfPersonality() {
  return (
    <ScrollingGallery
      namespace="occult"
      heroImage={blankFull}
      heroTitle="Tarot is personal. Celebrity is universal."
      heroDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      items={galleryItems}
    />
  );
}

export default OccultOfPersonality;
