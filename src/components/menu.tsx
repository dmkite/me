import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      <header className="landing-header">
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>
      </header>

      <div
        className={`side-menu__backdrop ${
          isMenuOpen ? 'side-menu__backdrop--visible' : ''
        }`}
        onClick={closeMenu}
      >
        <nav
          className={`side-menu ${isMenuOpen ? 'side-menu--open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="side-menu__list">
            <li className="side-menu__item">
              <button type="button" onClick={() => handleNavigate('/artist-statement')}>
                Artist Statement
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={() => handleNavigate('/occult-of-personality')}>
                Occult of Personality
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={() => handleNavigate('/gallery')}>
                Gallery
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={() => handleNavigate('/development')}>
                Development
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={() => handleNavigate('/contact')}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;

