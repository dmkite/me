import { useEffect, useRef } from 'react';
import splashVideo from '../assets/splash-video.mp4';
import '../styles/main.css';
import Menu from '../components/menu';

function Landing() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="landing-container">
      <video
        ref={videoRef}
        src={splashVideo}
        autoPlay
        muted
        loop
        playsInline
        className="landing-video"
      />

      <div className="landing-scrim" />

      <div className="landing-content">
        <Menu />

        <div className="landing-title">
          <h1>Dylan Kite</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
