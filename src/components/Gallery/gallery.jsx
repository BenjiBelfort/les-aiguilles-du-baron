import { useState, useEffect } from 'react';
import CategoryDescription from './categoryDescription';
import reservedBadge from '../../assets/reza.png';
import inProgressBadge from '../../assets/en-cours.png';
import availableBadge from '../../assets/dispo.png';
import coverBadge from '../../assets/cover.png';

import photosData from '../../data/photos.json';
import Lightbox from '../Lightbox/Lightbox';

import './gallery.css';

const categories = [
  { key: 'realisme', label: 'Réalisme / Semi-réalisme' },
  { key: 'manga', label: 'Manga / Japonais' },
  { key: 'graphique', label: 'Sketch / Graphique / Lettrage' },
  { key: 'trash', label: 'Trash Polka / Pop Culture' },
  { key: 'floral', label: 'Floral / Fine line' },
  { key: 'atelier', label: "Vie de l'Atelier" }
];

const badgeMap = {
  reserved: {
    src: reservedBadge,
    alt: "Réservé"
  },
  in_progress: {
    src: inProgressBadge,
    alt: "En cours"
  },
  available: {
    src: availableBadge,
    alt: "Disponible"
  },
  cover: {
    src: coverBadge,
    alt: "Cover"
  }
};

const shufflePhotos = (photosArray) => {
  return photosArray
    .map(photo => ({ ...photo, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey);
};

const sortById = (photosArray) => {
  return [...photosArray].sort((a, b) => a.id - b.id);
};

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(10);
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = aucune lightbox ouverte

  useEffect(() => {
    // Charger les photos au chargement initial de la page
    setPhotos(shufflePhotos(photosData));
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    // Si une catégorie est sélectionnée, afficher toutes les photos de cette catégorie
    if (category) {
      setVisiblePhotosCount(Infinity);
    } else {
      setVisiblePhotosCount(10);
    }
  };

  const filteredPhotos = selectedCategory
    ? sortById(photos.filter(photo => photo.category === selectedCategory))
    : photos;

  const handleShowMore = () => {
    setVisiblePhotosCount(prevCount => prevCount + 10);
  };

  return (
    <section id="Gallery">
      <div>
        <h3>galerie</h3>
        <div className="filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-button ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => handleCategorySelection(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="category-description-container">
          <CategoryDescription selectedCategory={selectedCategory || 'TOUS'} />
        </div>

        <div className="gallery-container">
          {filteredPhotos.slice(0, visiblePhotosCount).map((photo, idx) => (
            <div key={photo.id} className="photo-wrapper">
              {photo.status && badgeMap[photo.status] && (
                <img
                  src={badgeMap[photo.status].src}
                  alt={badgeMap[photo.status].alt}
                  className="badge"
                />
              )}
              <img
                src={photo.url}
                alt={photo.alt}
                className="photo-thumbnail"
                loading="lazy"
                onClick={() => setLightboxIndex(idx)}
              />
            </div>
          ))}
        </div>

        {/* Bouton "Afficher la suite" uniquement dans la vue initiale (TOUS) */}
        {!selectedCategory && visiblePhotosCount < filteredPhotos.length && (
          <div className="show-more">
            <button className="show-more-button" onClick={handleShowMore}>
              Afficher la suite
            </button>
          </div>
        )}

        {/* Affichage conditionnel de la Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            photos={filteredPhotos}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
