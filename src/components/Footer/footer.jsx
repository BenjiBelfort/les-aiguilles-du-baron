import './footer.css';
import MentionsLegalesModal from '../MentionsLegalesModal/mentionsLegalesModal';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear} - Les Aiguilles du Baron. Atelier de tatouage à Belfort.
        </p>
        <p>Tous droits réservés.</p>

        <MentionsLegalesModal />

        {/* Liens internes pour le maillage SEO */}
        <nav aria-label="Liens de navigation du footer">
          <ul className="footer-nav">
            <li>
              <Link to="Intro" smooth={true} offset={-100} duration={500}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="Gallery" smooth={true} offset={-40} duration={500}>
                Galerie
              </Link>
            </li>
            <li>
              <Link to="Atelier" smooth={true} offset={-100} duration={500}>
                L’atelier
              </Link>
            </li>
            <li>
              <Link to="Testimonials" smooth={true} offset={-40} duration={500}>
                Témoignages
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Crédits */}
        <div className="footer-credits">
          <a
            className="footerlink"
            href="https://ta0.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pics by Théo Merle
          </a>
          <a
            className="footerlink footer-dev"
            href="https://benji-belfort-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Dev by Benji Belfort</span>
            <img
              src="/icon/logo-CPEP.png"
              alt="Logo CPEP"
              className="footer-logo"
              width="80"
              height="24"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
