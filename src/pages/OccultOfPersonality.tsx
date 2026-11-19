import '../styles/main.css';
import ScrollingGallery, { type ScrollingGalleryItem } from '../components/ScrollingGallery';

// Thumbnails (600w webp) for gallery grid
import theFoolThumb from '../assets/occult_of_personality/0_TheFool_2Ed.jpg?w=600&format=webp&imagetools';
import theMagicianThumb from '../assets/occult_of_personality/1_TheMagician_2Ed.jpg?w=600&format=webp&imagetools';
import theHighPriestessThumb from '../assets/occult_of_personality/2_TheHighPriestess_2Ed.jpg?w=600&format=webp&imagetools';
import theEmpressThumb from '../assets/occult_of_personality/3_TheEmpress_2Ed.jpg?w=600&format=webp&imagetools';
import theEmperorThumb from '../assets/occult_of_personality/4_TheEmperor_2Ed.jpg?w=600&format=webp&imagetools';
import theHierophantThumb from '../assets/occult_of_personality/5_TheHierophant_2Ed.jpg?w=600&format=webp&imagetools';
import theLoversThumb from '../assets/occult_of_personality/6_TheLovers_2Ed.jpg?w=600&format=webp&imagetools';
import theChariotThumb from '../assets/occult_of_personality/7_TheChariot_2Ed.jpg?w=600&format=webp&imagetools';
import strengthThumb from '../assets/occult_of_personality/8_Strength_2Ed.jpg?w=600&format=webp&imagetools';
import theHermitThumb from '../assets/occult_of_personality/9_TheHermit_2Ed.jpg?w=600&format=webp&imagetools';
import wheelOfFortuneThumb from '../assets/occult_of_personality/10_WheelOfFortune_2Ed.jpg?w=600&format=webp&imagetools';
import justiceThumb from '../assets/occult_of_personality/11_Justice_2Ed.jpg?w=600&format=webp&imagetools';
import theHangedManThumb from '../assets/occult_of_personality/12_TheHangedMan_2Ed.jpg?w=600&format=webp&imagetools';
import deathThumb from '../assets/occult_of_personality/13_Death_2Ed.jpg?w=600&format=webp&imagetools';
import temperanceThumb from '../assets/occult_of_personality/14_Temperance_2Ed.jpg?w=600&format=webp&imagetools';
import theTowerThumb from '../assets/occult_of_personality/16_TheTower_2Ed.jpg?w=600&format=webp&imagetools';
import theDevilThumb from '../assets/occult_of_personality/15_TheDevil_2Ed.jpg?w=600&format=webp&imagetools';
import theStarThumb from '../assets/occult_of_personality/17_TheStar_2Ed.jpg?w=600&format=webp&imagetools';
import theMoonThumb from '../assets/occult_of_personality/18_TheMoon_2Ed.jpg?w=600&format=webp&imagetools';
import theSunThumb from '../assets/occult_of_personality/19_TheSun_2Ed.jpg?w=600&format=webp&imagetools';
import judgementThumb from '../assets/occult_of_personality/20_Judgement_2Ed.jpg?w=600&format=webp&imagetools';
import theWorldThumb from '../assets/occult_of_personality/21_TheWorld_2Ed.jpg?w=600&format=webp&imagetools';

// Thumbnails (600w webp) for first edition prints, where available
import theFool1EdThumb from '../assets/occult_of_personality/0_TheFool_1Ed.jpg?w=600&format=webp&imagetools';
import theMagician1EdThumb from '../assets/occult_of_personality/1_TheMagician_1Ed.jpg?w=600&format=webp&imagetools';
import theHighPriestess1EdThumb from '../assets/occult_of_personality/2_TheHighPriestess_1Ed.jpg?w=600&format=webp&imagetools';
import theEmpress1EdThumb from '../assets/occult_of_personality/3_TheEmpress_1Ed.jpg?w=600&format=webp&imagetools';
import theEmperor1EdThumb from '../assets/occult_of_personality/4_TheEmperor_1Ed.jpg?w=600&format=webp&imagetools';
import theHierophant1EdThumb from '../assets/occult_of_personality/5_TheHierophant_1Ed.jpg?w=600&format=webp&imagetools';
import theLovers1EdThumb from '../assets/occult_of_personality/6_TheLovers_1Ed.jpg?w=600&format=webp&imagetools';
import theChariot1EdThumb from '../assets/occult_of_personality/7_TheChariot_1Ed.jpg?w=600&format=webp&imagetools';
import strength1EdThumb from '../assets/occult_of_personality/8_Strength_1Ed.jpg?w=600&format=webp&imagetools';
import theHermit1EdThumb from '../assets/occult_of_personality/9_TheHermit_1Ed.jpg?w=600&format=webp&imagetools';
import wheelOfFortune1EdThumb from '../assets/occult_of_personality/10_WheelOfFortune_1Ed.jpg?w=600&format=webp&imagetools';
import justice1EdThumb from '../assets/occult_of_personality/11_justice_1Ed.jpg?w=600&format=webp&imagetools';
import theHangedMan1EdThumb from '../assets/occult_of_personality/12_TheHangedMan_1Ed.jpg?w=600&format=webp&imagetools';
import death1EdThumb from '../assets/occult_of_personality/13_Death_1Ed.jpg?w=600&format=webp&imagetools';
import temperance1EdThumb from '../assets/occult_of_personality/14_Temperance_1Ed.jpg?w=600&format=webp&imagetools';
import theDevil1EdThumb from '../assets/occult_of_personality/15_TheDevil_1Ed.jpg?w=600&format=webp&imagetools';
import theTower1EdThumb from '../assets/occult_of_personality/16_TheTower_1Ed.jpg?w=600&format=webp&imagetools';
import theStar1EdThumb from '../assets/occult_of_personality/17_TheStar_1Ed.jpg?w=600&format=webp&imagetools';
import theMoon1EdThumb from '../assets/occult_of_personality/18_TheMoon_1Ed.jpg?w=600&format=webp&imagetools';
import theSun1EdThumb from '../assets/occult_of_personality/19_TheSun_1Ed.jpg?w=600&format=webp&imagetools';
import judgement1EdThumb from '../assets/occult_of_personality/20_Judgement_1Ed.jpg?w=600&format=webp&imagetools';
import theWorld1EdThumb from '../assets/occult_of_personality/21_TheWorld_1Ed.jpg?w=600&format=webp&imagetools';

// Full size (1200w webp) for first edition prints, where available
import theFool1EdFull from '../assets/occult_of_personality/0_TheFool_1Ed.jpg?w=1200&format=webp&imagetools';
import theMagician1EdFull from '../assets/occult_of_personality/1_TheMagician_1Ed.jpg?w=1200&format=webp&imagetools';
import theHighPriestess1EdFull from '../assets/occult_of_personality/2_TheHighPriestess_1Ed.jpg?w=1200&format=webp&imagetools';
import theEmpress1EdFull from '../assets/occult_of_personality/3_TheEmpress_1Ed.jpg?w=1200&format=webp&imagetools';
import theEmperor1EdFull from '../assets/occult_of_personality/4_TheEmperor_1Ed.jpg?w=1200&format=webp&imagetools';
import theHierophant1EdFull from '../assets/occult_of_personality/5_TheHierophant_1Ed.jpg?w=1200&format=webp&imagetools';
import theLovers1EdFull from '../assets/occult_of_personality/6_TheLovers_1Ed.jpg?w=1200&format=webp&imagetools';
import theChariot1EdFull from '../assets/occult_of_personality/7_TheChariot_1Ed.jpg?w=1200&format=webp&imagetools';
import strength1EdFull from '../assets/occult_of_personality/8_Strength_1Ed.jpg?w=1200&format=webp&imagetools';
import theHermit1EdFull from '../assets/occult_of_personality/9_TheHermit_1Ed.jpg?w=1200&format=webp&imagetools';
import wheelOfFortune1EdFull from '../assets/occult_of_personality/10_WheelOfFortune_1Ed.jpg?w=1200&format=webp&imagetools';
import justice1EdFull from '../assets/occult_of_personality/11_justice_1Ed.jpg?w=1200&format=webp&imagetools';
import theHangedMan1EdFull from '../assets/occult_of_personality/12_TheHangedMan_1Ed.jpg?w=1200&format=webp&imagetools';
import death1EdFull from '../assets/occult_of_personality/13_Death_1Ed.jpg?w=1200&format=webp&imagetools';
import temperance1EdFull from '../assets/occult_of_personality/14_Temperance_1Ed.jpg?w=1200&format=webp&imagetools';
import theDevil1EdFull from '../assets/occult_of_personality/15_TheDevil_1Ed.jpg?w=1200&format=webp&imagetools';
import theTower1EdFull from '../assets/occult_of_personality/16_TheTower_1Ed.jpg?w=1200&format=webp&imagetools';
import theStar1EdFull from '../assets/occult_of_personality/17_TheStar_1Ed.jpg?w=1200&format=webp&imagetools';
import theMoon1EdFull from '../assets/occult_of_personality/18_TheMoon_1Ed.jpg?w=1200&format=webp&imagetools';
import theSun1EdFull from '../assets/occult_of_personality/19_TheSun_1Ed.jpg?w=1200&format=webp&imagetools';
import judgement1EdFull from '../assets/occult_of_personality/20_Judgement_1Ed.jpg?w=1200&format=webp&imagetools';
import theWorld1EdFull from '../assets/occult_of_personality/21_TheWorld_1Ed.jpg?w=1200&format=webp&imagetools';

// Full size (1200w webp) for modal view
import blankFull from '../assets/occult_of_personality/0_Blank_0Ed.jpg?w=1200&format=webp&imagetools';
import theFoolFull from '../assets/occult_of_personality/0_TheFool_2Ed.jpg?w=1200&format=webp&imagetools';
import theMagicianFull from '../assets/occult_of_personality/1_TheMagician_2Ed.jpg?w=1200&format=webp&imagetools';
import theHighPriestessFull from '../assets/occult_of_personality/2_TheHighPriestess_2Ed.jpg?w=1200&format=webp&imagetools';
import theEmpressFull from '../assets/occult_of_personality/3_TheEmpress_2Ed.jpg?w=1200&format=webp&imagetools';
import theEmperorFull from '../assets/occult_of_personality/4_TheEmperor_2Ed.jpg?w=1200&format=webp&imagetools';
import theHierophantFull from '../assets/occult_of_personality/5_TheHierophant_2Ed.jpg?w=1200&format=webp&imagetools';
import theLoversFull from '../assets/occult_of_personality/6_TheLovers_2Ed.jpg?w=1200&format=webp&imagetools';
import theChariotFull from '../assets/occult_of_personality/7_TheChariot_2Ed.jpg?w=1200&format=webp&imagetools';
import strengthFull from '../assets/occult_of_personality/8_Strength_2Ed.jpg?w=1200&format=webp&imagetools';
import theHermitFull from '../assets/occult_of_personality/9_TheHermit_2Ed.jpg?w=1200&format=webp&imagetools';
import wheelOfFortuneFull from '../assets/occult_of_personality/10_WheelOfFortune_2Ed.jpg?w=1200&format=webp&imagetools';
import justiceFull from '../assets/occult_of_personality/11_Justice_2Ed.jpg?w=1200&format=webp&imagetools';
import theHangedManFull from '../assets/occult_of_personality/12_TheHangedMan_2Ed.jpg?w=1200&format=webp&imagetools';
import deathFull from '../assets/occult_of_personality/13_Death_2Ed.jpg?w=1200&format=webp&imagetools';
import temperanceFull from '../assets/occult_of_personality/14_Temperance_2Ed.jpg?w=1200&format=webp&imagetools';
import theDevilFull from '../assets/occult_of_personality/15_TheDevil_2Ed.jpg?w=1200&format=webp&imagetools';
import theTowerFull from '../assets/occult_of_personality/16_TheTower_2Ed.jpg?w=1200&format=webp&imagetools';
import theStarFull from '../assets/occult_of_personality/17_TheStar_2Ed.jpg?w=1200&format=webp&imagetools';
import theMoonFull from '../assets/occult_of_personality/18_TheMoon_2Ed.jpg?w=1200&format=webp&imagetools';
import theSunFull from '../assets/occult_of_personality/19_TheSun_2Ed.jpg?w=1200&format=webp&imagetools';
import judgementFull from '../assets/occult_of_personality/20_Judgement_2Ed.jpg?w=1200&format=webp&imagetools';
import theWorldFull from '../assets/occult_of_personality/21_TheWorld_2Ed.jpg?w=1200&format=webp&imagetools';

const galleryItems: ScrollingGalleryItem[] = [
  {
    thumbnail: theFoolThumb,
    image: theFoolFull,
    firstEditionThumbnail: theFool1EdThumb,
    firstEditionImage: theFool1EdFull,
    title: 'The Fool',
    desc: 'New beginnings, innocence, and a leap of faith. Pure potential before the journey begins. Trust the path even when you cannot see ahead.\n\nOriginal photo by Shelby Duncan',
  },
  {
    thumbnail: theMagicianThumb,
    image: theMagicianFull,
    firstEditionThumbnail: theMagician1EdThumb,
    firstEditionImage: theMagician1EdFull,
    title: 'The Magician',
    desc: 'Willpower, resourcefulness, and turning intention into reality. You have everything you need — focus your energy and act.\n\nOriginal photo by Robin Harper',
  },
  {
    thumbnail: theHighPriestessThumb,
    image: theHighPriestessFull,
    firstEditionThumbnail: theHighPriestess1EdThumb,
    firstEditionImage: theHighPriestess1EdFull,
    title: 'The High Priestess',
    desc: 'Intuition, mystery, and inner knowledge. Look inward and trust what you find beneath the surface.\n\nOriginal photo by David Gahr',
  },
  {
    thumbnail: theEmpressThumb,
    image: theEmpressFull,
    firstEditionThumbnail: theEmpress1EdThumb,
    firstEditionImage: theEmpress1EdFull,
    title: 'The Empress',
    desc: 'Fertility, creativity, and nurturing abundance. Tend to what you are growing with patience and care.\n\nOriginal photo by Kevin Winter ',
  },
  {
    thumbnail: theEmperorThumb,
    image: theEmperorFull,
    firstEditionThumbnail: theEmperor1EdThumb,
    firstEditionImage: theEmperor1EdFull,
    title: 'The Emperor',
    desc: 'Order, discipline, and authority. Leadership through structure, clear boundaries, and the willingness to take responsibility.\n\nOriginal photo by David Burton',
  },
  {
    thumbnail: theHierophantThumb,
    image: theHierophantFull,
    firstEditionThumbnail: theHierophant1EdThumb,
    firstEditionImage: theHierophant1EdFull,
    title: 'The Hierophant',
    desc: 'Tradition, spiritual authority, and shared belief systems. Mentorship and inherited wisdom. Do the structures you follow still serve your growth?\n\nOriginal photo by Denny Renshaw',
  },
  {
    thumbnail: theLoversThumb,
    image: theLoversFull,
    firstEditionThumbnail: theLovers1EdThumb,
    firstEditionImage: theLovers1EdFull,
    title: 'The Lovers',
    desc: 'Union, choice, and the alignment of values. The decisions that define who you are and the consequences that follow.\n\nOriginal photo by Bettmann/Corbis',
  },
  {
    thumbnail: theChariotThumb,
    image: theChariotFull,
    firstEditionThumbnail: theChariot1EdThumb,
    firstEditionImage: theChariot1EdFull,
    title: 'The Chariot',
    desc: 'Determination, control, and triumph through discipline. Victory comes only through focused effort and harnessing opposing forces.\n\nOriginal photo by Coco and Clair Clair',
  },
  {
    thumbnail: strengthThumb,
    image: strengthFull,
    firstEditionThumbnail: strength1EdThumb,
    firstEditionImage: strength1EdFull,
    title: 'Strength',
    desc: 'Courage, patience, and inner fortitude. True power comes from mastering yourself, not dominating others.\n\nOriginal photo by William P. Gottlieb',
  },
  {
    thumbnail: theHermitThumb,
    image: theHermitFull,
    firstEditionThumbnail: theHermit1EdThumb,
    firstEditionImage: theHermit1EdFull,
    title: 'The Hermit',
    desc: 'Solitude, introspection, and the search for deeper truth. Step away from noise and listen to what silence teaches.\n\nOriginal photo by Andre D. Wagner',
  },
  {
    thumbnail: wheelOfFortuneThumb,
    image: wheelOfFortuneFull,
    firstEditionThumbnail: wheelOfFortune1EdThumb,
    firstEditionImage: wheelOfFortune1EdFull,
    title: 'Wheel of Fortune',
    desc: 'Change, cycles, and forces beyond your control. What rises will fall; what falls will rise. Find your center within the turning.\n\nOriginal photo by Masayoshi Sukita',
  },
  {
    thumbnail: justiceThumb,
    image: justiceFull,
    firstEditionThumbnail: justice1EdThumb,
    firstEditionImage: justice1EdFull,
    title: 'Justice',
    desc: 'Clarity, fairness, and the consequences of past actions. Truth over mercy. What you set in motion returns to you.\n\nOriginal photo by Mike Coppola',
  },
  {
    thumbnail: theHangedManThumb,
    image: theHangedManFull,
    firstEditionThumbnail: theHangedMan1EdThumb,
    firstEditionImage: theHangedMan1EdFull,
    title: 'The Hanged Man',
    desc: 'Surrender, not defeat. A willing pause that shifts perspective entirely. The answer comes only from letting go.\n\nOriginal photo by Terry O\'Neill',
  },
  {
    thumbnail: deathThumb,
    image: deathFull,
    firstEditionThumbnail: death1EdThumb,
    firstEditionImage: death1EdFull,
    title: 'Death',
    desc: 'Transformation, not ending. The necessary clearing away of what no longer serves you. Release your grip on what is already gone.\n\nOriginal video by Doja Cat, Nina McNeely, and Tehillah De Castro',
  },
  {
    thumbnail: temperanceThumb,
    image: temperanceFull,
    firstEditionThumbnail: temperance1EdThumb,
    firstEditionImage: temperance1EdFull,
    title: 'Temperance',
    desc: 'Balance, moderation, and the patient blending of opposites. Not compromise but integration. Find the middle path.\n\nOriginal photo by Brian Tamborello',
  },
  {
    thumbnail: theDevilThumb,
    image: theDevilFull,
    firstEditionThumbnail: theDevil1EdThumb,
    firstEditionImage: theDevil1EdFull,
    title: 'The Devil',
    desc: 'Bondage, materialism, and the shadow self. Attachments you mistake for necessities. The chains are loose — are you ready to see?\n\nOriginal video by Phil Griffin and Adam Frisch',
  },
  {
    thumbnail: theTowerThumb,
    image: theTowerFull,
    firstEditionThumbnail: theTower1EdThumb,
    firstEditionImage: theTower1EdFull,
    title: 'The Tower',
    desc: 'Sudden upheaval and the destruction of false structures. What collapses needed to fall. From the rubble, something honest emerges.\n\nOriginal photo by X17 Online',
  },
  {
    thumbnail: theStarThumb,
    image: theStarFull,
    firstEditionThumbnail: theStar1EdThumb,
    firstEditionImage: theStar1EdFull,
    title: 'The Star',
    desc: 'Hope renewed after devastation. Calm, clarity, and faith restored. Trust that what was broken is mending.\n\nOriginal photo by Tony McGee',
  },
  {
    thumbnail: theMoonThumb,
    image: theMoonFull,
    firstEditionThumbnail: theMoon1EdThumb,
    firstEditionImage: theMoon1EdFull,
    title: 'The Moon',
    desc: 'Illusion, anxiety, and the unconscious mind. Nothing is as it appears. Fear clouds your judgment — navigate carefully.\n\nOriginal photo by Ebru Yildiz',
  },
  {
    thumbnail: theSunThumb,
    image: theSunFull,
    firstEditionThumbnail: theSun1EdThumb,
    firstEditionImage: theSun1EdFull,
    title: 'The Sun',
    desc: 'Joy, vitality, and success without ambiguity. Clarity after confusion. Warmth, confidence, and things going right.\n\nOriginal photo by Matthew Rolston',
  },
  {
    thumbnail: judgementThumb,
    image: judgementFull,
    firstEditionThumbnail: judgement1EdThumb,
    firstEditionImage: judgement1EdFull,
    title: 'Judgement',
    desc: 'Resurrection, reckoning, and a call to account. Evaluate yourself honestly — not with guilt, but with clarity for renewal.\n\nOriginal photo by Peter Noble',
  },
  {
    thumbnail: theWorldThumb,
    image: theWorldFull,
    firstEditionThumbnail: theWorld1EdThumb,
    firstEditionImage: theWorld1EdFull,
    title: 'The World',
    desc: 'Completion, wholeness, and the end of a major cycle. A moment of integration before the next journey begins.\n\nOriginal photo by Daniel Dorsa',
  },
];

type Props = {
  firstEdition?: boolean;
};

function OccultOfPersonality({ firstEdition = false }: Props) {
  return (
    <ScrollingGallery
      namespace="occult"
      heroImage={blankFull}
      heroTitle="Occult of Personality"
      heroDesc="Tarot is personal. Celebrity is universal."
      items={galleryItems}
      useFirstEdition={firstEdition}
      editionLink={{
        label: firstEdition ? 'See second edition prints' : 'See first edition prints',
        to: firstEdition ? '/occult-of-personality' : '/occult-of-personality/first-edition',
      }}
    />
  );
}

export default OccultOfPersonality;
