import './atelier.css';
import convivial from '../../assets/convivialite.webp';
import coworking from '../../assets/coworking.webp';
import tatoueur from '../../assets/tatoueur.webp';
import ornement from '../../assets/ornement.png';
import phil from '/icon/phil-logo-white.png';
import flo from '/icon/logo-Florence-H.png';

const Atelier = () => {
  return (
    <section id='Atelier'>
        <h3>L&apos;atelier</h3>

      <div className="atelier-container">
        <div className="item">
          <figure className="image-atelier">
            <img src={tatoueur} alt="M. Chellovnik tatoueur" loading="lazy" />
            </figure>
            <div className="item-content">
              <h4>M. Chellovnik</h4>
              <p>Le Baron m’a confié la mission de vous <span className='gold-words'>&quot;aiguiller&quot;</span> dans vos projets de tatouage. C’est un honneur pour moi que votre satisfaction soit la sienne…</p>
            </div>
        </div>
        <div className='inter-item'>
          <img src={ornement} alt="ornement" />
        </div>
        <div className="item">
          <figure className="image-atelier">
            <img src={coworking} alt="espace co-working" loading="lazy" />
          </figure>
          <div className="item-content">
            <h4>Espace Expo/Co-Working</h4>
            <p>
              Au delà du tatouage, l’Atelier a vocation de lieu d’échange d’artistes de divers horizons en proposant des mises en commun de compétences (co-working) ainsi que des expositions d’oeuvres (photos, peintures..).
            </p>

            {/* 👇 Ajout du bloc "en ce moment" */}
            <div className="en-ce-moment">
              <span>En ce moment</span>
              <div className="tooltip-container">
                <a href="https://www.bullet-art.com/" target="_blank" rel="noopener noreferrer">
                  <img src={phil}  alt="Logo Phil Bullet Art" />
                </a>
                <div className="tooltip">
                  <strong>Phil Bullet Art</strong><br />
                  Phil bullet art artiste peintre original de Belfort, utilise des éléments de tir pour réaliser des oeuvres uniques.
                </div>
              </div>
              <div className="tooltip-container">
                <a href="https://www.instagram.com/flohuynhart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <img src={flo}  alt="Logo Florenre H" />
                </a>
                <div className="tooltip">
                  <strong>Flo Art</strong><br />
                  Artiste peintre autodidacte ayant découvert la peinture ces dernières années. Florence peint au gré de ses envies, avec passion utilisant la peinture à l&apos;huile, la méthode &quot;wet and wet&quot; pour les paysages, et la peinture acrylique pour les tableaux abstraits.<br />
                  Elle aime donner vie à ses créations pour émerveiller les yeux et toucher les cœurs.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='inter-item'>
          <img src={ornement} alt="ornement" className='ornement-reverse' loading="lazy" />
        </div>
        <div className="item">
            <figure className="image-atelier">
              <img src={convivial} alt="espace convivial" loading="lazy" />
            </figure>
            <div className="item-content">
              <h4>Cabinet de curiosités</h4>
              <p>Vous trouverez également une ambiance parfois insolite inspirée par la présence d’objets atypiques, une place du chineur où l’on peut dialoguer, troquer…</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Atelier;
