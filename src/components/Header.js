// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS for the header
// import { useCursor } from '../context/CursorContext';
import MobileMenu from './MobileMenu'; // Import the new component

const Header = () => {
  // const { handleMouseEnter, handleMouseLeave } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu

  // Function to toggle the menu's state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling when the mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isScrolled, isMenuOpen]); // Add isMenuOpen to dependency array

  return (
    <>
      {/* <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}> */}
      <header className="site-header">
        <div className="header-pill">
          <div className='header_logo'>
            <div className="logo">
              {/* <a href="/"> */}
                {/* <button> */}
                  {/* tonic<span className="trademark">™</span> */}
                  {/* <svg width="70" height="15" viewBox="0 0 68 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.9945 3.98633H42.3428V18.6379H45.9945V3.98633Z" fill="#FF570E"></path><path d="M16.462 18.8726C12.0123 18.8726 8.74023 15.8112 8.74023 11.3417C8.74023 6.8613 11.9917 3.78131 16.462 3.78131C20.9613 3.78131 24.1834 6.83104 24.1834 11.3417C24.1834 15.8269 20.9271 18.8726 16.462 18.8726ZM13.6003 14.3531C15.1132 15.9322 17.8265 15.9121 19.3354 14.3382C20.8605 12.7473 20.8524 9.88683 19.3435 8.29115C17.8442 6.70637 15.0939 6.68701 13.5902 8.27703C12.0688 9.88521 12.0627 12.7498 13.6003 14.3531Z" fill="#FF570E"></path><path d="M32.9357 3.93043C34.1339 3.67463 35.5658 3.73596 36.7035 4.18823C38.152 4.76356 39.0291 5.90494 39.4636 7.36828C39.6895 8.1292 39.8102 9.02084 39.8102 10.0521V18.638H36.1585V10.9018C36.1585 9.53646 35.9584 7.80442 34.4627 7.27508C33.6546 6.98903 32.5177 7.03664 31.7325 7.3707C30.7881 7.77255 30.2026 8.5609 29.9085 9.52113C29.7524 10.0319 29.6693 10.621 29.6693 11.283V18.638H26.0176V3.98651H29.6693V5.73186C30.5508 4.81521 31.6882 4.19671 32.9357 3.93043Z" fill="#FF570E"></path><path d="M50.6349 5.4831C53.8932 2.75775 59.2882 3.3827 61.9547 6.64344C61.1215 7.36401 60.2868 8.08297 59.4528 8.80355C58.1416 7.26113 56.1053 6.63618 54.1885 7.38661C50.8991 8.67404 50.9165 13.9553 54.1881 15.2371C56.0355 15.9605 58.1569 15.3738 59.4891 13.9424C60.3328 14.6815 61.1736 15.4235 62.0168 16.1618C58.9469 19.6658 52.933 19.8389 49.8873 16.4749C47.1195 13.4183 47.4621 8.13623 50.6349 5.4831Z" fill="#FF570E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.66016 4.01008H7.32032V7.67024H3.66016V14.991H7.32032V18.6515H3.66016V14.991H0V0.349915H3.66016V4.01008Z" fill="#FF570E"></path><path d="M63.2622 2.50352H63.7629V0.440761H64.4575V0H62.5781V0.440761H63.2622V2.50352Z" fill="#FF570E"></path><path d="M65.0396 2.50352H65.5332V0.952044H65.5403L66.1467 2.03103H66.4676L67.0776 0.95557H67.0847V2.50352H67.5783V0H67.0812L66.3125 1.42454H66.3054L65.5367 0H65.0396V2.50352Z" fill="#FF570E"></path></svg> */}
                  <svg width="70" height="20" viewBox="0 0 68 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.9945 3.98633H42.3428V18.6379H45.9945V3.98633Z" fill="#FF570E"></path><path d="M16.462 18.8726C12.0123 18.8726 8.74023 15.8112 8.74023 11.3417C8.74023 6.8613 11.9917 3.78131 16.462 3.78131C20.9613 3.78131 24.1834 6.83104 24.1834 11.3417C24.1834 15.8269 20.9271 18.8726 16.462 18.8726ZM13.6003 14.3531C15.1132 15.9322 17.8265 15.9121 19.3354 14.3382C20.8605 12.7473 20.8524 9.88683 19.3435 8.29115C17.8442 6.70637 15.0939 6.68701 13.5902 8.27703C12.0688 9.88521 12.0627 12.7498 13.6003 14.3531Z" fill="#FF570E"></path><path d="M32.9357 3.93043C34.1339 3.67463 35.5658 3.73596 36.7035 4.18823C38.152 4.76356 39.0291 5.90494 39.4636 7.36828C39.6895 8.1292 39.8102 9.02084 39.8102 10.0521V18.638H36.1585V10.9018C36.1585 9.53646 35.9584 7.80442 34.4627 7.27508C33.6546 6.98903 32.5177 7.03664 31.7325 7.3707C30.7881 7.77255 30.2026 8.5609 29.9085 9.52113C29.7524 10.0319 29.6693 10.621 29.6693 11.283V18.638H26.0176V3.98651H29.6693V5.73186C30.5508 4.81521 31.6882 4.19671 32.9357 3.93043Z" fill="#FF570E"></path><path d="M50.6349 5.4831C53.8932 2.75775 59.2882 3.3827 61.9547 6.64344C61.1215 7.36401 60.2868 8.08297 59.4528 8.80355C58.1416 7.26113 56.1053 6.63618 54.1885 7.38661C50.8991 8.67404 50.9165 13.9553 54.1881 15.2371C56.0355 15.9605 58.1569 15.3738 59.4891 13.9424C60.3328 14.6815 61.1736 15.4235 62.0168 16.1618C58.9469 19.6658 52.933 19.8389 49.8873 16.4749C47.1195 13.4183 47.4621 8.13623 50.6349 5.4831Z" fill="#FF570E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.66016 4.01008H7.32032V7.67024H3.66016V14.991H7.32032V18.6515H3.66016V14.991H0V0.349915H3.66016V4.01008Z" fill="#FF570E"></path><path d="M63.2622 2.50352H63.7629V0.440761H64.4575V0H62.5781V0.440761H63.2622V2.50352Z" fill="#FF570E"></path><path d="M65.0396 2.50352H65.5332V0.952044H65.5403L66.1467 2.03103H66.4676L67.0776 0.95557H67.0847V2.50352H67.5783V0H67.0812L66.3125 1.42454H66.3054L65.5367 0H65.0396V2.50352Z" fill="#FF570E"></path></svg>
                {/* </button> */}
              {/* </a> */}


              {/* Hamburger Button for Mobile */}
              
              {/* // <button */}
              <div className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <span></span>
                <span></span>
              {/* </button> */}
              </div>

            </div>
            {/* Desktop Navigation */}
            <div className="header_navLink">
              {/* <ul>
                <li className='mobile'>
                  <a href='/'>
                    <button>Home
                    </button>
                  </a>
                </li>
                <li>
                  <a href='/jobs'>
                    <button>Jobs
                    </button>
                  </a>
                </li>
                <li >
                  <a href='/contact'>
                    <button>Contact
                    </button>
                  </a>
                </li>
              </ul> */}

              <div>Jobs</div>
              <div>Contact</div>


            </div>
          </div>

        </div>
      </header>

      {/* Conditionally render the mobile menu */}
      {isMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </>
  );
};

export default Header;