import { useState, useEffect, useRef } from 'react';
import './navbar.css';
import contactImg from '../../assets/typewriter.png';
import burgerMenu from '../../assets/burger-menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Modification du background au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture du menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  // Fermeture automatique lors d'un changement de taille d'écran (>850px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <div
          className='desktopmenutitle'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setShowMenu(false);
          }}
        >
          <h2>Les Aiguilles du Baron</h2>
          <h1>Atelier de tatouage</h1>
        </div>

        <div className='desktopmenu'>
          <Link
            href="#Intro"
            activeClass="active"
            to="Intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            à propos
          </Link>
          <Link
            href="#Gallery"
            activeClass="active"
            to="Gallery"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="desktopMenuListItem"
          >
            galerie
          </Link>
          <Link
            href="#Atelier"
            activeClass="active"
            to="Atelier"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            l&apos;atelier
          </Link>
          <Link
            href="#Testimonials"
            activeClass="active"
            to="Testimonials"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="desktopMenuListItem"
          >
            témoignages
          </Link>
        </div>

        <button
          className="desktopMenuBtn"
          onClick={() => {
            document.getElementById('Contact').scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          <img
            src={contactImg}
            alt="Contact icone"
            className="desktopMenuImg"
          />
          Contact
        </button>

        <img
          src={burgerMenu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />

        {/* Menu mobile animé via CSS */}
        <div ref={menuRef} className={`navMenu ${showMenu ? 'activeMob' : ''}`}>
          <Link
            href="#Intro"
            activeClass="active"
            to="Intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            à propos
          </Link>
          <Link
            href="#Gallery"
            activeClass="active"
            to="Gallery"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            galerie
          </Link>
          <Link
            href="#Atelier"
            activeClass="active"
            to="Atelier"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            l&apos;atelier
          </Link>
          <Link
            href="#Testimonials"
            activeClass="active"
            to="Testimonials"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            témoignages
          </Link>
          <Link
            href="#Contact"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
