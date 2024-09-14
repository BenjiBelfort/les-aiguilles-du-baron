import './atelier.css';
import convivial from '../../assets/convivialite.jpg';
import coworking from '../../assets/coworking.jpg';
import tatoueur from '../../assets/tatoueur.jpg';
import ornement from '../../assets/ornement.png';

const Atelier = () => {
  return (
    <section id='Atelier'>
        <h3>L&apos;atelier</h3>

      <div className="atelier-container">
        <div className="item">
          <figure className="image-atelier">
            <img src={tatoueur} alt="M. Chellovnik tatoueur" />
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
              <img src={coworking} alt="espace co-working" />
            </figure>
            <div className="item-content">
              <h4>Espace Expo/Co-Working</h4>
              <p>Au delà du tatouage, l’Atelier a vocation de lieu d’échange d’artistes de divers horizons en proposant des mises en commun de compétences (co-working) ainsi que des expositions d’oeuvres (photos, peintures..).</p>
            </div>
        </div>
        <div className='inter-item'>
          <img src={ornement} alt="ornement" className='ornement-reverse'/>
        </div>
        <div className="item">
            <figure className="image-atelier">
              <img src={convivial} alt="espace convivial" />
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
