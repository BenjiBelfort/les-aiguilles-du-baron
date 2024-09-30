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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          navRef.current && !navRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <div className='desktopmenutitle' onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <h1>Les Aiguilles du Baron</h1>
          <h2>Atelier de tatouage</h2>
        </div>

        <div className='desktopmenu'>
          <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>à propos</Link>
          <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuListItem'>galerie</Link>
          <Link activeClass='active' to='Atelier' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>l&apos;atelier</Link>
        </div>

        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
          <img src={contactImg} alt='Contact icone' className='desktopMenuImg' />Contact
        </button>

        <img src={burgerMenu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div ref={menuRef} className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>à propos</Link>
          <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-40} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>galerie</Link>
          <Link activeClass='active' to='Atelier' spy={true} smooth={true} offset={-80} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>l&apos;atelier</Link>
          <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
