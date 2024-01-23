import React, { useEffect, useRef, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Carosuel from '../carosuel/carosuel';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const hamburgerMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => {
    hamburgerMenuRef.current = document.getElementById('hamburger-menu');
    overlayRef.current = document.getElementById('overlay');
    navItemsRef.current = Array.from({ length: 3 }, (_, i) => document.getElementById(`nav-${i + 1}`));

    const toggleNav = () => {
      hamburgerMenuRef.current.classList.toggle('active');
      setIsOverlayActive((prev) => !prev);
    };

    hamburgerMenuRef.current.addEventListener('click', toggleNav);
    navItemsRef.current.forEach((nav) => {
      nav.addEventListener('click', () => {
        toggleNav();
        handleNavLinkClick();
      });
    });

    return () => {
      hamburgerMenuRef.current.removeEventListener('click', toggleNav);
      navItemsRef.current.forEach((nav) => {
        nav.removeEventListener('click', () => {
          toggleNav();
          handleNavLinkClick();
        });
      });
    };
  }, [isOverlayActive]);

  function handleNavLinkClick() {
    overlayRef.current.classList.replace(
      isOverlayActive ? 'overlay-slide-left' : 'overlay-slide-right',
      isOverlayActive ? 'overlay-slide-right' : 'overlay-slide-left'
    );
    navAnimation(isOverlayActive ? 'out' : 'in', isOverlayActive ? 'in' : 'out');
  }

  function navAnimation(val1, val2) {
    navItemsRef.current.forEach((nav, i) => {
      nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
    });
  }

  return (
    <div className='' data-aos="fade-down">
      <div className={`overlay ${isOverlayActive ? 'overlay-slide-right' : 'overlay-slide-left'}`} id="overlay">
        <nav>
          <ul className='p-0'>
            <li id="nav-1" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/'} className="center fw-bold " onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li id="nav-2" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/about'} className="center fw-bold " onClick={handleNavLinkClick}>
                About
              </Link>
            </li>
            <li id="nav-3" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/what'} className="center fw-bold " onClick={handleNavLinkClick}>
                What I Do
              </Link>
            </li>
            <li id="nav-4" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/resume'} className="center fw-bold " onClick={handleNavLinkClick}>
                Resume
              </Link>
            </li>
            <li id="nav-5" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/portfolio'} className="center fw-bold " onClick={handleNavLinkClick}>
                Portfolio
              </Link>
            </li>
            <li id="nav-6" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/faq'} className="center fw-bold " onClick={handleNavLinkClick}>
                FAQ
              </Link>
            </li>
            <li id="nav-7" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/client'} className="center fw-bold " onClick={handleNavLinkClick}>
                Client
              </Link>
            </li>
            <li id="nav-8" className={`navAnimation(isOverlayActive ? 'in' : 'out', isOverlayActive ? 'out' : 'in') d-flex justify-content-center align-items-center`}>
              <Link to={'/contact'} className="center fw-bold " onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    
    <div className=''>

      <div className="hamburger-menu" id="hamburger-menu">
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>

      <section id="home" className="center">
        <p className="logo fs-2 fw-bold">CIRICULLAM</p>
 

        {/* <h2 className='uppercase fs-1 fw-bold'>Hi,I'M a Freelance</h2> */}
       <Carosuel/>
      </section>
    </div>

    </div>
  );
};

export default Nav;
