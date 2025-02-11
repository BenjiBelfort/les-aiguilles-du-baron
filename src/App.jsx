import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CookieBanner from './components/CookieBanner/CookieBanner';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Mainimg from './components/MainImg/mainimg';
import Mainlogo from './components/Mainlogo/mainlogo';
import Testimonials from './components/Testimonials/testimonials'
import Gallery from './components/Gallery/gallery';
import Atelier from './components/Atelier/atelier';
import Contact from './components/Contact/contact';
import Social from './components/Social/social';
import Footer from './components/Footer/footer';
// import Popup from './components/Popup/popup';

const App = () => {
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'true') {
      // Charger Google Analytics uniquement si le consentement est donné
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-TSXGBSTWVX";
      script.async = true;
      document.head.appendChild(script);

      // Configurer Google Analytics directement dans App.jsx
      const gaConfig = document.createElement('script');
      gaConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TSXGBSTWVX');
      `;
      document.head.appendChild(gaConfig);

      // Vérifiez si Google Analytics est activé
      console.log("Google Analytics est activé");
    } else {
      console.log("Google Analytics n'est pas activé");
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <>
              {/* <Popup /> */}
              <Navbar />
              <Mainimg />
              <Mainlogo />
              <Intro />
              <Gallery />
              <Atelier />
              <Testimonials />
              <Contact />
              <Social />
              <Footer />
              <CookieBanner />
            </>
            }
          />
          <Route path='/policy' element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;