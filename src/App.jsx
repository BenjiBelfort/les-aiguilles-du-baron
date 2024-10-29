import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Mainimg from './components/MainImg/mainimg';
import Mainlogo from './components/Mainlogo/mainlogo';
import Gallery from './components/Gallery/gallery';
import Atelier from './components/Atelier/atelier';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
// import Popup from './components/Popup/popup';

import CookiePolicy from './components/CookiePolicy/CookiePolicy';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Mainimg />
              <Mainlogo />
              <Intro />
              <Gallery />
              <Atelier />
              <Contact />
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
}

export default App;