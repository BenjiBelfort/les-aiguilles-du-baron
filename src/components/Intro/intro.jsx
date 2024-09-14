import './intro.css';
import logo from '../../assets/logo.png';
import photoIntro from '../../assets/intro-site.jpg';


const Intro = () => {
  return (
    <section id='Intro'>
        <img src={logo} alt='logo Les Aiguilles du Baron, Atelier de tatouage' className='logo-intro' />
        <div className='introContact'>
            <p className='introText'>L’atelier de tatouage <span className='goldText'>les&nbsp;aiguilles&nbsp;du&nbsp;baron</span> situé dans le quartier historique de la vieille ville de Belfort, vous accueille dans un <span className='gold-words'>cabinet de curiosités</span> feutré.
            <br />
            <br />
            L&apos;alchimie qui règne dans ce lieu convivial, véritable point de rencontre pour artistes de tous horizons, est propice à la création de projets de <span className='gold-words'>tatouages personnalisés</span>.
            <br />
            <br />
            <span className='gold-words'>M. Chellovnik</span>, le tatoueur, mettra à profit son expérience pour vous satisfaire dans divers styles : réalisme, semi-réalisme, floral, manga, japonais, trash polka, blackwork, graphique…
            <br />
            <br />
            Son parcours dans le milieu pharmaceutique vous garantit une <span className='gold-words'>hygiène irréprochable</span> lors de chaque séance.</p>
          <img src={photoIntro} alt="Cabine téléphonique et place de l'abattoir" className='intro-img'/>
        </div>
    </section>
  )
}

export default Intro;