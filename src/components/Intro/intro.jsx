import './intro.css';
import logo from '../../assets/logo.png';
import photoIntro from '../../assets/intro-site.webp';


const Intro = () => {
  return (
    <section id='Intro'>
        <img src={logo} alt='logo Les Aiguilles du Baron, Atelier de tatouage' className='logo-intro' />
        <div className='introContact'>
            <p className='introText'>L’atelier de tatouage <span className='gold-title'>les&nbsp;aiguilles&nbsp;du&nbsp;baron</span> situé dans le quartier historique de la vieille ville de Belfort, vous accueille dans un <span className='gold-words'>cabinet de curiosités</span> feutré.
            <br />
            <br />
            L&apos;alchimie qui règne dans ce lieu convivial, véritable point de rencontre pour artistes de tous horizons, est propice à la création de projets de <span className='gold-words'>tatouages personnalisés</span>.
            <br />
            <br />
            <span className='gold-words'>M. Chellovnik</span>, le tatoueur, mettra à profit son expérience pour vous satisfaire dans divers styles : réalisme, semi-réalisme, floral, manga, japonais, trash polka, blackwork, graphique…
            <br />
            <br />
            Il sera ravis de vous accueillir sur place ou d’échanger avec vous par courriel, par MP sur les réseaux sociaux ou par téléphone (liens en bas de page) pour discuter de <span className='gold-words'>vos projets de tatouage</span>.
            <br />
            <br />
            à bientot !
            </p>
          <img src={photoIntro} alt="3 photos montrant Chellovnik en train de tatouer le dos d'un homme" className='intro-img' width={500} />
        </div>
    </section>
  )
}

export default Intro;