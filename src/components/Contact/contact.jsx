import { useRef, useState, useEffect, useCallback } from 'react';
import './contact.css';
import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram-icon.png';
import tiktok from '../../assets/tiktok-icon.png';
import newIcon from '../../assets/new-icon.png';
import map from '../../assets/map.png';
import cabine from '../../assets/cabine-de-tatouage.webp';
import puzzleImage from '../../assets/puzzle.webp';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const location = 'https://maps.app.goo.gl/7RTAXPvkf95cCVes5';
  const form = useRef();
  const [puzzle, setPuzzle] = useState([]);
  const [isCaptchaComplete, setIsCaptchaComplete] = useState(false);

  // Initialisation simplifiée du puzzle
  const initializePuzzle = useCallback(() => {
    const pieces = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      position: i,
      correctPosition: i,
    }));

    // Effectuer exactement 3 mouvements pour mélanger
    const newPuzzle = [...pieces];
    swap(newPuzzle, 7, 8); // Déplacement 1
    swap(newPuzzle, 6, 7); // Déplacement 2
    swap(newPuzzle, 3, 6); // Déplacement 3

    setPuzzle(newPuzzle);
  }, []);

  // Fonction pour échanger deux pièces
  const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  };

  useEffect(() => {
    initializePuzzle();
  }, [initializePuzzle]);

  const handlePieceClick = (pieceIndex) => {
    // Si le puzzle est déjà complété, on ignore l'action
    if (isCaptchaComplete) return;

    const emptyIndex = puzzle.findIndex((piece) => piece.id === 8);
    const canMove = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3].includes(pieceIndex);

    if (canMove) {
      const newPuzzle = [...puzzle];
      [newPuzzle[emptyIndex], newPuzzle[pieceIndex]] = [newPuzzle[pieceIndex], newPuzzle[emptyIndex]];
      setPuzzle(newPuzzle);

      const isSolved = newPuzzle.every((piece, index) => piece.correctPosition === index);
      if (isSolved) setIsCaptchaComplete(true);  // Le puzzle est résolu
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isCaptchaComplete) {
      alert('Veuillez compléter le CAPTCHA avant d\'envoyer le formulaire.');
      return;
    }

    emailjs
      .sendForm('service_igpqnd4', 'template_88jzv9o', form.current, {
        publicKey: 'YyfiYuz0ZxFVoTKJV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email envoyé !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='Contact'>
      <h3 className='contact-title'>Contact</h3>

      <div className="contact-wrapper">
        <a href="tel:+33363146999"><img src={cabine} alt="Cabine téléphonique" className='cabine' loading="lazy" /></a>
        <p className='contact-description'>
          <a href="tel:+33363146999" className="phone-link">03 63 14 69 99</a>
        </p>
        <div className="contact-map-wrapper">
          <p className='contact-description'>5 rue du Général Roussel - 90000 BELFORT</p>
          <a href={location} target="_blank" rel="noopener noreferrer">
            <img src={map} alt="carte d'accès" className='contact-map' />
          </a>
        </div>
        <p className='horaires'>Du lundi au samedi <br />
          10h à 12h et de 14h à 19h</p>

        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' id='name' placeholder='Votre nom' name='your_name' required />
          <input type='email' className='email' id='email' placeholder='Votre email' name='your_email' required />
          <textarea name='message' className='msg' id='message' rows="5" placeholder='Votre message' required></textarea>

          {/* CAPTCHA Puzzle */}
          <div className="captcha-container">
            <p>{isCaptchaComplete ? 'Vérification : puzzle reconstitué !' : 'Vérification : Reconstituez le puzzle'}</p>
            <div className="puzzle-grid">
              {/* Si le puzzle est résolu, on affiche l'image complète, sinon les pièces du puzzle */}
              {isCaptchaComplete ? (
                <div className="completed-puzzle">
                  <img
                    src={puzzleImage}
                    alt="Puzzle complet"
                    className="completed-puzzle-image"
                    style={{ opacity: 1 }} // Lorsque le puzzle est complet, l'opacité devient 1
                  />
                </div>
              ) : (
                puzzle.map((piece, index) => (
                  <div
                    key={piece.id}
                    className={`puzzle-piece ${piece.id === 8 ? 'empty-piece' : ''}`}
                    onClick={() => handlePieceClick(index)}
                    style={{
                      backgroundImage: piece.id !== 8 ? `url(${puzzleImage})` : 'none',
                      backgroundPosition: `${-((piece.correctPosition % 3) * 100)}px ${-(
                        Math.floor(piece.correctPosition / 3) * 100
                      )}px`,
                      transition: 'all 0.3s ease',
                      opacity: isCaptchaComplete && piece.id !== 8 ? 0 : 1, // Masquer les pièces une fois résolu
                    }}
                  ></div>
                ))
              )}
            </div>
          </div>

          <button
            type='submit'
            value='send'
            className={`submit-btn ${!isCaptchaComplete ? 'disabled' : ''}`}
            disabled={!isCaptchaComplete}
          >
            Envoyer
          </button>
        </form>

        <div className='links'>
          <a href='https://www.facebook.com/profile.php?id=61555545550171' target='_blank' rel="noopener noreferrer">
            <img src={facebook} alt='Facebook' className='link' /></a>
          <a href='https://www.tiktok.com/@lesaiguillesdubaron' target='_blank' rel='noopener noreferrer' className='tiktok-container'>
            <img src={tiktok} alt='TikTok' className='link' />
            <img src={newIcon} alt='New Icon' className='new-icon' />
          </a>
          <a href='https://www.instagram.com/lesaiguillesdubaron/' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} alt='Instagram' className='link' /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
