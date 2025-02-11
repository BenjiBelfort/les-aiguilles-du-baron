import './social.css';

const social = () => {
  return (
    <section id='social'>
        <div className='links'>
            <a href='https://www.facebook.com/profile.php?id=61555545550171' target='_blank' rel="noopener noreferrer">
                <img src='/icon/facebook-icon.png' alt='Facebook' className='link' />
            </a>
            <a href='https://www.tiktok.com/@lesaiguillesdubaron' target='_blank' rel='noopener noreferrer' className='tiktok-container'>
                <img src='/icon/tiktok-icon.png' alt='TikTok' className='link' />
                <img src='/icon/new-icon.png' alt='New Icon' className='new-icon' />
            </a>
            <a href='https://www.instagram.com/lesaiguillesdubaron/' target='_blank' rel='noopener noreferrer'>
                <img src='/icon/instagram-icon.png' alt='Instagram' className='link' />
            </a>
        </div>
    </section>
  )
}

export default social