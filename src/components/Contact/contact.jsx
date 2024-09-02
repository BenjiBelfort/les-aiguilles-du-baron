import { useRef } from 'react';

import './contact.css';

import facebook from '../../assets/facebook-icon.png';
import instagram from '../../assets/instagram-icon.png';

import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g942k8k', 'template_drk5nns', form.current, {
        publicKey: 'vX579AdagFxAVIYa6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email envoyé !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='Contact'>
        <div className='contact-wrapper'>
            <h3 className='contact-title'>Contact</h3>
            <p className='contact-description'>
              <a href="tel:+33363146999" className="phone-link">03 63 14 69 99</a>
            </p>
            <p className='contact-description'>5 rue du Général Roussel - 90000 BELFORT</p>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Votre nom' name='your_name' required/>
                <input type='email' className='email' placeholder='Votre email' name='your_email' required/>
                <textarea name='message' className='msg' rows="5" placeholder='Votre message' required></textarea>
                <button type='submit' value='send' className='submit-btn'>Envoyer</button>
            </form>

            <div className='links'>
                <a href='https://www.facebook.com/profile.php?id=61555545550171' target='_blank' rel="noopener noreferrer"><img src={facebook} alt='Facebook' className='link' /></a>
                <a href='https://www.instagram.com/lesaiguillesdubaron/' target='_blank' rel="noopener noreferrer"><img src={instagram} alt='Instagram' className='link' /></a>
            </div>
        </div>
    </section>
  )
}

export default Contact;
