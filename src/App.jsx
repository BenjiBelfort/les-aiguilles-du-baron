import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Mainimg from './components/MainImg/mainimg';
import Mainlogo from './components/Mainlogo/mainlogo';
import Gallery from './components/Gallery/gallery';
import Atelier from './components/Atelier/atelier';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainimg />
      <Mainlogo />
      <Intro />
      <Gallery />
      <Atelier />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;