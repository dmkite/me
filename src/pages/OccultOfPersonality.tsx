import { useEffect, useRef } from 'react';
import '../styles/main.css';
import profPic from '../assets/prof-pic.png';
import theWorld from '../assets/the_world.png'

const projectDetails = [
    {
        title: "Occult of Personality",
        desc: "Panel 1: Overview of the project, themes, and intent.",
        image: profPic,
    },
    ]

const Project = (props) => {
    return (
        <section className="project-panel">
            <section className="project-image">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <div className="circle"/>
            <div className="circle"/>
            </section>
            <div className="image-holder">
                <img src={theWorld} alt="project image"/>
            </div>

        </section>
        );
    }


function OccultOfPersonality() {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (event: WheelEvent) => {
      // Convert vertical scroll into horizontal
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        el.scrollBy({ left: event.deltaY, behavior: 'auto' });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <main className="project-page" ref={containerRef}>
      <div className="project-strip">
        <section className="project-panel">
          <h1>Occult of Personality</h1>
          <p>Panel 1: Overview of the project, themes, and intent.</p>
        </section>

        <Project title="The World" desc="desc" image={profPic}/>

        <section className="project-panel">
          <h2>Process</h2>
          <p>Panel 2: Process notes, research, and experiments.</p>
        </section>

        <section className="project-panel">
          <h2>Outcomes</h2>
          <p>Panel 3: Final outcomes, reflections, and next steps.</p>
        </section>
      </div>
    </main>
  );
}


export default OccultOfPersonality;
