import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ArtistStatement from './pages/ArtistStatement';
import OccultOfPersonality from './pages/OccultOfPersonality';
import Gallery from './pages/Gallery';
import Development from './pages/Development';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
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
