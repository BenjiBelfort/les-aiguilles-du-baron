import { useState, useEffect } from 'react';
import './popup.css';
import popupImage from '../../assets/popup.jpg';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCloseBtn, setShowCloseBtn] = useState(false);

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
          <img src={popupImage} alt="popup" />
        </div>
      </div>
    )
  );
};

export default Popup;
