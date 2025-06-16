// src/components/MobileMenu.js
import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ closeMenu }) => {

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="mobile-menu-overlay" onClick={closeMenu}>
      <nav className="mobile-nav-links" onClick={(e) => e.stopPropagation()}>
         <a 
          href="/" 
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a 
          href="#jobs" 
          onClick={handleLinkClick}
        >
          Jobs
        </a>
        <a 
          href="#contact" 
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;