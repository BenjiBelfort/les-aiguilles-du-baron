import './intro.css';
import logo from '../../assets/logo.png';
import cabine from '../../assets/cabine-de-tatouage.jpg';


const Intro = () => {
  return (
    <section id='Intro'>
        <img src={logo} alt='logo Les Aiguilles du Baron, Atelier de tatouage' className='logo-intro' />
        <div className='introContact'>
            <p className='introText'>L’atelier de tatouage <span className='goldText'>les aiguilles du baron</span> situé dans le quartier historique de la vieille ville de Belfort vous accueille dans ce <span className='gold-words'>cabinet de curiosités</span> feutré.
            <br />
            <br />
            L’alchimie présente dans ce lieu convivial de rencontre d’artistes en tous genres est propice à la création de projets de <span className='gold-words'>tatouages personnalisés</span>.
            <br />
            <br />
            Le tatoueur <span className='gold-words'>Chellovnik</span>, membre de la communauté <span className='lien'><a href="https://www.facebook.com/tatoueur2.0/" target='_blank' rel="noopener noreferrer">Tatoueur2.0</a></span>, saura vous écouter et partager avec vous son expérience pour vous satisfaire dans de nombreux styles (Réalisme, Semi-réalisme, Floral, Manga, Japonais, Trash Polka, Blackwork, Graphique…).
            <br />
            <br />
            Son expérience antérieure dans le milieu pharmaceutique vous assurera une <span className='gold-words'>hygiène irréprochable</span> lors de votre séance.</p>
          <img src={cabine} alt="Cabine téléphonique et place de l'abattoir" className='intro-img'/>
        </div>
    </section>
  )
}

export default Intro;