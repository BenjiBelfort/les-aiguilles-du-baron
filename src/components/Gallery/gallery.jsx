import { useState } from 'react';
import './gallery.css';

import photo1 from '../../assets/photos/detail.jpg';
import photo2 from '../../assets/photos/dragon.jpg';
import photo3 from '../../assets/photos/encres.jpg';
import photo4 from '../../assets/photos/fleurs.jpg';
import photo5 from '../../assets/photos/fleurs2.jpg';
import photo6 from '../../assets/photos/poseidon.jpg';
import photo7 from '../../assets/photos/poseidon2.jpg';
import photo8 from '../../assets/photos/croix.jpg';
import photo9 from '../../assets/photos/robot.jpg';
import photo10 from '../../assets/photos/robot2.jpg';

const photos = [
    { id: 1, url: photo1, category: 'réalisme', alt: 'texte alternatif photo 1 à changer' },
    { id: 2, url: photo2, category: 'manga', alt: 'texte alternatif photo 2 à changer' },
    { id: 3, url: photo3, category: 'polka', alt: 'texte alternatif photo 3 à changer' },
    { id: 4, url: photo4, category: 'réalisme', alt: 'texte alternatif photo 4 à changer' },
    { id: 5, url: photo5, category: 'manga', alt: 'texte alternatif photo 5 à changer' },
    { id: 6, url: photo6, category: 'polka', alt: 'texte alternatif photo 6 à changer' },
    { id: 7, url: photo7, category: 'réalisme', alt: 'texte alternatif photo 7 à changer' },
    { id: 8, url: photo8, category: 'manga', alt: 'texte alternatif photo 8 à changer' },
    { id: 9, url: photo9, category: 'polka', alt: 'texte alternatif photo 9 à changer' },
    { id: 10, url: photo10, category: 'réalisme', alt: 'texte alternatif photo 10 à changer' }
  ];

const categories = ['TOUS', 'réalisme', 'manga', 'polka'];

const categoryDescriptions = {
    réalisme: "Le style réalisme correspond à des dessins très proches de la réalité.",
    manga: "Le style manga est caractérisé par des dessins aux traits exagérés et expressifs, typiques de la bande dessinée japonaise.",
    polka: "Le style polka est souvent associé à des motifs répétitifs et des tatouages minimalistes.",
    TOUS: "Découvrez mon univers artistique au travers de mes réalisations",
};

const Gallery = () => {

    const [selectedCategory, setSelectedCategory] = useState('TOUS');

    const filteredPhotos = photos.filter(photo =>
      selectedCategory === 'TOUS' ? true : photo.category === selectedCategory
    );

  return (
    <section id='Gallery'>
        <div>
            <h3>galerie</h3>
            <div className="filters">
                {categories.map((category) => (
                <button
                    key={category}
                    className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
                ))}
            </div>

            <p className="category-description">
                {categoryDescriptions[selectedCategory]}
            </p>

            <div className="gallery-container">
                {filteredPhotos.map((photo) => (
                <img
                    key={photo.id}
                    src={photo.url}
                    alt={photo.alt}
                    className="photo-thumbnail"
                />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Gallery;