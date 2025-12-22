import { useState } from 'react';
import '../styles/main.css';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
              <button type="button" onClick={closeMenu}>
                Menu Item 1
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={closeMenu}>
                Menu Item 2
              </button>
            </li>
            <li className="side-menu__item">
              <button type="button" onClick={closeMenu}>
                Menu Item 3
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Menu;

