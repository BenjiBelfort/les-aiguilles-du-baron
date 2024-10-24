import './mainimg.css';
import bg from '../../assets/chellovnik.webp';

const Mainimg = () => {
  return (
    <img 
      src={bg} 
      alt='tatoueur au travail' 
      className='bg'
      width={1200}
      height={800} 
    />
  )
}

export default Mainimg;
