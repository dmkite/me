import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ArtistStatement from './pages/ArtistStatement';
import OccultOfPersonality from './pages/OccultOfPersonality';
import Gallery from './pages/Gallery';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Menu from './components/menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/me" element={<Landing />} />
        <Route path="/me/artist-statement" element={<ArtistStatement />} />
        <Route path="/me/occult-of-personality" element={<OccultOfPersonality />} />
        <Route path="/me/gallery" element={<Gallery />} />
        <Route path="/me/development" element={<Development />} />
        <Route path="/me/contact" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
