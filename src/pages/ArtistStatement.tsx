import '../styles/main.css';
import profPic from '../assets/prof-pic.png';
import Menu from '../components/Menu';

 const ArtistSplash = () => {
    return (
        <section className="artist-hero-left">
            <h1>Something cool.<br/>Something even cooler.</h1>
        </section>
        );
 }

 const ArtistFollowUp =() => {
     return (
         <section className="artist-lower-left">
         <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis justo et dolor
             lacinia commodo. Pellentesque id accumsan lacus, et consectetur diam. Integer
             scelerisque lacinia fringilla.
           </p>
           <p>
             Vestibulum ut lacinia sapien. Praesent arcu felis, maximus a euismod id, feugiat gravida
             enim. Phasellus vulputate ac urna sit amet porttitor. Vivamus lacinia tempus commodo.
           </p>
          </section>
         );
     }

 const ArtistDescription = () => {
     return (
         <section className="artist-desc col">
            <h3>How I approach art</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis justo et dolor
            lacinia commodo. Pellentesque id accumsan lacus, et consectetur diam. Integer
            scelerisque lacinia fringilla. Vestibulum ut lacinia sapien. Praesent arcu felis, maximus a euismod id, feugiat gravida
            enim. Phasellus vulputate ac urna sit amet porttitor. Vivamus lacinia tempus commodo.
            </p>
            <div className="artist-hero-circle"/>

            <img src={profPic} className="artist-image"/>
         </section>
     );
}

function ArtistStatement() {
  return (
      <>
      <Menu/>
      <section className="flex">
      <section className="col">
        <ArtistSplash/>
        <ArtistFollowUp/>
    </section>
        <ArtistDescription/>
    </section>
      </>
  );



//     <div className="artist-page">
//
//       <div className="artist-hero">
//         <div className="artist-hero-left">
//           <h1>
//             Igniting passions.
//             <br />
//             Expanding horizons.
//           </h1>
//         </div>
//
//         <div className="artist-hero-right">
//           <div className="artist-hero-circle" />
//           <div className="artist-hero-text-block">
//             <h2>The Artistic Process</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis justo et
//               dolor lacinia commodo. Pellentesque id accumsan lacus, et consectetur diam. Integer
//               scelerisque lacinia fringilla.
//             </p>
//           </div>
//         </div>
//       </div>
//
//       <div className="artist-lower">
//         <div className="artist-lower-left">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis justo et dolor
//             lacinia commodo. Pellentesque id accumsan lacus, et consectetur diam. Integer
//             scelerisque lacinia fringilla.
//           </p>
//           <p>
//             Vestibulum ut lacinia sapien. Praesent arcu felis, maximus a euismod id, feugiat gravida
//             enim. Phasellus vulputate ac urna sit amet porttitor. Vivamus lacinia tempus commodo.
//           </p>
//         </div>
//
//         <div className="artist-lower-right">
//           <div className="artist-photo-wrapper">
//             <div className="artist-photo-ring">
//               <div className="artist-photo-circle" />
//             </div>
//           </div>
//           <h3 className="artist-lower-callout">
//             Something else relevant to what we&apos;re talking about.
//           </h3>
//         </div>
//       </div>
//     </div>
}

export default ArtistStatement;
