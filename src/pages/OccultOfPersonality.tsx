import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

import blank from '../assets/occult_of_personality/0_Blank_0Ed.jpg';
import theMagician from '../assets/occult_of_personality/1_TheMagician_2Ed.jpg';
import theEmperor from '../assets/occult_of_personality/4_TheEmperor_2Ed.jpg';
import theHierophant from '../assets/occult_of_personality/5_TheHierophant_2Ed.jpg';
import theChariot from '../assets/occult_of_personality/7_TheChariot_2Ed.jpg';
import strength from '../assets/occult_of_personality/8_Strength_2Ed.jpg';
import theHermit from '../assets/occult_of_personality/9_TheHermit_2Ed.jpg';
import justice from '../assets/occult_of_personality/11_Justice_2Ed.jpg';
import theHangedMan from '../assets/occult_of_personality/12_TheHangedMan_2Ed.jpg';
import death from '../assets/occult_of_personality/13_Death_2Ed.jpg';
import theDevil from '../assets/occult_of_personality/15_TheDevil_2Ed.jpg';
import theMoon from '../assets/occult_of_personality/18_TheMoon_2Ed.jpg';
import theSun from '../assets/occult_of_personality/19_TheSun_2Ed.jpg';
import theWorld from '../assets/occult_of_personality/21_TheWorld_2Ed.jpg';

const galleryItems: ScrollingGalleryItem[] = [
  {
    image: blank,
    title: 'The Fool',
    desc: 'New beginnings, innocence, and a leap of faith. Pure potential before the journey begins. Trust the path even when you cannot see ahead.',
  },
  {
    image: theMagician,
    title: 'The Magician',
    desc: 'Willpower, resourcefulness, and turning intention into reality. You have everything you need — focus your energy and act.',
  },
  {
    image: blank,
    title: 'The High Priestess',
    desc: 'Intuition, mystery, and inner knowledge. Look inward and trust what you find beneath the surface.',
  },
  {
    image: blank,
    title: 'The Empress',
    desc: 'Fertility, creativity, and nurturing abundance. Tend to what you are growing with patience and care.',
  },
  {
    image: theEmperor,
    title: 'The Emperor',
    desc: 'Order, discipline, and authority. Leadership through structure, clear boundaries, and the willingness to take responsibility.',
  },
  {
    image: theHierophant,
    title: 'The Hierophant',
    desc: 'Tradition, spiritual authority, and shared belief systems. Mentorship and inherited wisdom. Do the structures you follow still serve your growth?',
  },
  {
    image: blank,
    title: 'The Lovers',
    desc: 'Union, choice, and the alignment of values. The decisions that define who you are and the consequences that follow.',
  },
  {
    image: theChariot,
    title: 'The Chariot',
    desc: 'Determination, control, and triumph through discipline. Victory comes only through focused effort and harnessing opposing forces.',
  },
  {
    image: strength,
    title: 'Strength',
    desc: 'Courage, patience, and inner fortitude. True power comes from mastering yourself, not dominating others.',
  },
  {
    image: theHermit,
    title: 'The Hermit',
    desc: 'Solitude, introspection, and the search for deeper truth. Step away from noise and listen to what silence teaches.',
  },
  {
    image: blank,
    title: 'Wheel of Fortune',
    desc: 'Change, cycles, and forces beyond your control. What rises will fall; what falls will rise. Find your center within the turning.',
  },
  {
    image: justice,
    title: 'Justice',
    desc: 'Clarity, fairness, and the consequences of past actions. Truth over mercy. What you set in motion returns to you.',
  },
  {
    image: theHangedMan,
    title: 'The Hanged Man',
    desc: 'Surrender, not defeat. A willing pause that shifts perspective entirely. The answer comes only from letting go.',
  },
  {
    image: death,
    title: 'Death',
    desc: 'Transformation, not ending. The necessary clearing away of what no longer serves you. Release your grip on what is already gone.',
  },
  {
    image: blank,
    title: 'Temperance',
    desc: 'Balance, moderation, and the patient blending of opposites. Not compromise but integration. Find the middle path.',
  },
  {
    image: theDevil,
    title: 'The Devil',
    desc: 'Bondage, materialism, and the shadow self. Attachments you mistake for necessities. The chains are loose — are you ready to see?',
  },
  {
    image: blank,
    title: 'The Tower',
    desc: 'Sudden upheaval and the destruction of false structures. What collapses needed to fall. From the rubble, something honest emerges.',
  },
  {
    image: blank,
    title: 'The Star',
    desc: 'Hope renewed after devastation. Calm, clarity, and faith restored. Trust that what was broken is mending.',
  },
  {
    image: theMoon,
    title: 'The Moon',
    desc: 'Illusion, anxiety, and the unconscious mind. Nothing is as it appears. Fear clouds your judgment — navigate carefully.',
  },
  {
    image: theSun,
    title: 'The Sun',
    desc: 'Joy, vitality, and success without ambiguity. Clarity after confusion. Warmth, confidence, and things going right.',
  },
  {
    image: blank,
    title: 'Judgement',
    desc: 'Resurrection, reckoning, and a call to account. Evaluate yourself honestly — not with guilt, but with clarity for renewal.',
  },
  {
    image: theWorld,
    title: 'The World',
    desc: 'Completion, wholeness, and the end of a major cycle. A moment of integration before the next journey begins.',
  },
];

function OccultOfPersonality() {
  return (
    <ScrollingGallery
      namespace="occult"
      heroImage={blank}
      heroTitle="Tarot is personal. Celebrity is universal."
      heroDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      items={galleryItems}
    />
  );
}

export default OccultOfPersonality;
