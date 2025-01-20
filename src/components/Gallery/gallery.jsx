import { useState, useEffect } from 'react';
import CategoryDescription from './categoryDescription';
import reservedBadge from '../../assets/reza-vert.png';
import inProgressBadge from '../../assets/en-cours.png';

import photosData from '../../data/photos.json';

import './gallery.css';

const categories = [
    { key: 'realisme', label: 'Réalisme / Semi-réalisme' },
    { key: 'manga', label: 'Manga / Japonais' },
    { key: 'graphique', label: 'Sketch / Graphique / Lettrage' },
    { key: 'trash', label: 'Trash Polka / Pop Culture' },
    { key: 'floral', label: 'Floral / Fine line' },
    { key: 'atelier', label: "Vie de l'Atelier" }
];

const shufflePhotos = (photosArray) => {
    return photosArray
        .map(photo => ({ ...photo, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey);
};

const sortById = (photosArray) => {
    return [...photosArray].sort((a, b) => a.id - b.id);
};

const Gallery = () => {
    const [photos, setPhotos] = useState([]); // Photos chargées depuis le JSON
    const [selectedCategory, setSelectedCategory] = useState(null); // Pas de catégorie sélectionnée au départ
    const [visiblePhotosCount, setVisiblePhotosCount] = useState(10); // Limite initiale pour les photos visibles

    useEffect(() => {
        // Charger les photos au chargement initial de la page
        setPhotos(shufflePhotos(photosData));
    }, []);

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);

        // Si une catégorie est sélectionnée, afficher toutes les photos de cette catégorie
        if (category) {
            setVisiblePhotosCount(Infinity); // Pas de limite
        } else {
            setVisiblePhotosCount(10); // Réinitialiser à 10 photos visibles pour la vue "TOUS"
        }
    };

    const filteredPhotos = selectedCategory
        ? sortById(photos.filter(photo => photo.category === selectedCategory)) // Trier par id si une catégorie est sélectionnée
        : photos; // Toutes les photos mélangées si aucune catégorie sélectionnée

    const handleShowMore = () => {
        setVisiblePhotosCount((prevCount) => prevCount + 10);
    };

    return (
        <section id="Gallery">
            <div>
                <h3>galerie</h3>
                <div className="filters">
                    {categories.map((category) => (
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
                    {filteredPhotos.slice(0, visiblePhotosCount).map((photo) => (
                        <div key={photo.id} className="photo-wrapper">
                            {/* Affiche le badge si un statut est défini */}
                            {photo.status && (
                                <img
                                    src={photo.status === "reserved" ? reservedBadge : inProgressBadge}
                                    alt={photo.status === "reserved" ? "Réservé" : "En cours"}
                                    className="badge"
                                />
                            )}
                            {/* Image principale */}
                            <img
                                src={photo.url}
                                alt={photo.alt}
                                className="photo-thumbnail"
                                loading="lazy"
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
            </div>
        </section>
    );
};

export default Gallery;
