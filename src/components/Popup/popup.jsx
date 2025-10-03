import { useState, useEffect, useRef } from 'react';
import './popup.css';

// import de la vidéo ou de l'image (popupImage) à afficher dans le popup
import popupVideo from '/videos/tattoo-show-Axone.mp4';
// import popupImage from '/(dossier à définir))/popup-image.png';
// Si vous utilisez une image à la place de la vidéo

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const videoRef = useRef(null); // Référence pour contrôler la vidéo

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    const closeBtnTimer = setTimeout(() => {
      setShowCloseBtn(true);
    }, 5000);

    return () => {
      clearTimeout(popupTimer);
      clearTimeout(closeBtnTimer);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowCloseBtn(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Mettre en pause la vidéo à la fermeture
      videoRef.current.currentTime = 0; // Remettre la vidéo au début
    }
  };


  return (
    showPopup && (
      <div className={`popup-overlay ${showPopup ? 'fade-in' : 'fade-out'}`}>
        <div className="popup">
          <button
            className={`close-btn ${showCloseBtn ? 'fade-in' : 'fade-out'}`}
            onClick={handleClosePopup} >
            &times;
          </button>
          
          <video className="popup-image" controls autoPlay muted >
            <source src={popupVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <img src={popupImage} alt="popup" className='popup-image'/> */}
        </div>
      </div>
    )
  );
};

export default Popup;