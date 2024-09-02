import { useState, useEffect } from 'react';
import './navbar.css';
import contactImg from '../../assets/typewriter.png';
import burgerMenu from '../../assets/burger-menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <div className='navbar-container'>

        <div className='desktopmenutitle'>
          <h1>Les Aiguilles du Baron</h1>
          <h2>Atelier de tatouage</h2>
        </div>
        <div className='desktopmenu'>
          <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>à propos</Link>
          {/* <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>atelier</Link> */}
          <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>gallerie</Link>
          <Link activeClass='active' to='Services' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>services</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=> {
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
          <img src={contactImg} alt='Contact' className='desktopMenuImg' />Contact
        </button>


        <img src={burgerMenu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>à propos</Link>
          {/* <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>atelier</Link> */}
          <Link activeClass='active' to='Gallery' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>gallerie</Link>
          <Link activeClass='active' to='Services' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>services</Link>
          <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>contact</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
