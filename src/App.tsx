import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import ArtistStatement from './pages/ArtistStatement';
import OccultOfPersonality from './pages/OccultOfPersonality';
import Gallery from './pages/Gallery';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Menu from './components/menu';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/me">
      <PageViewTracker />
      <Menu />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/artist-statement" element={<ArtistStatement />} />
        <Route path="/occult-of-personality" element={<OccultOfPersonality />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/development" element={<Development />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
