import { useState, useEffect } from 'react';
import CategoryDescription from './categoryDescription';
import './gallery.css';

import dessinAnimaux from '../../assets/photos/dessin_tablette/dessin-animaux.jpg';
import dessinDragon from '../../assets/photos/dessin_tablette/dessin-dragon.jpg';
import dessinIndien from '../../assets/photos/dessin_tablette/dessin-indien.jpg';
import dessinJaponais from '../../assets/photos/dessin_tablette/dessin-japonais.jpg';
import dessinPierreCroix from '../../assets/photos/dessin_tablette/dessin-Pierre_Croix.jpg';
import dessinRobot from '../../assets/photos/dessin_tablette/dessin-robot.jpg';
import dessinVisage from '../../assets/photos/dessin_tablette/dessin-visage.jpg';
import floralBras from '../../assets/photos/floral/floral-bras.jpg';
import floralDos1 from '../../assets/photos/floral/floral-dos1.jpg';
import floralEpaule1 from '../../assets/photos/floral/floral-epaule1.jpg';
import floralEpaule2 from '../../assets/photos/floral/floral-epaule2.jpg';
import graphiqueInsecte from '../../assets/photos/graphique/graphique-insecte.jpg';
import graphiqueMasque from '../../assets/photos/graphique/graphique-masque.jpg';
import graphiqueRobot1 from '../../assets/photos/graphique/graphique-robot1.jpg';
import graphiqueRobot2 from '../../assets/photos/graphique/graphique-robot2.jpg';
import mangaAkira from '../../assets/photos/manga/manga-Akira.jpg';
import mangaDragonBall from '../../assets/photos/manga/manga-dragon-ball.jpg';
import mangaAlbator from '../../assets/photos/manga/manga-Albator.jpg';
import mangaDragon from '../../assets/photos/manga/manga-dragon.jpg';
import mangaGreatWave from '../../assets/photos/manga/manga-great-wave.jpg';
import mangaSaintSeiya from '../../assets/photos/manga/manga-saint-seiya.jpg';
import mangaVisage1 from '../../assets/photos/manga/manga-visage1.jpg';
import mangaVisage2 from '../../assets/photos/manga/manga-visage2.jpg';
import realismeCroix1 from '../../assets/photos/realisme/realisme-croix1.jpg';
import realismeJohnnyHallyday from '../../assets/photos/realisme/realisme-Johnny-Hallyday.jpg';
import realismeSamourai from '../../assets/photos/realisme/realisme-samourai.jpg';
import realismeSamuelLJackson from '../../assets/photos/realisme/realisme-Samuel-L-Jackson.jpg';
import realismeVisage from '../../assets/photos/realisme/realisme-visage.jpg';
import semiRealismeBonnet from '../../assets/photos/semi-realisme/semi-realisme-bonnet.jpg';
import semiRealismeCalaveras from '../../assets/photos/semi-realisme/semi-realisme-calaveras.jpg';
import semiRealismeElephant from '../../assets/photos/semi-realisme/semi-realisme-elephant.jpg';
import semiRealismeHedwige from '../../assets/photos/semi-realisme/semi-realisme-Hedwige.jpg';
import semiRealismeOurs from '../../assets/photos/semi-realisme/semi-realisme-ours.jpg';
import semiRealismeSpartiate from '../../assets/photos/semi-realisme/semi-realisme-spartiate.jpg';
import semiRealismeVisage from '../../assets/photos/semi-realisme/semi-realisme-visage.jpg';

import dessinErotica from '../../assets/photos/dessin_tablette/dessin-erotica.jpg';
import dessinSkateur from '../../assets/photos/dessin_tablette/dessin-skateur.jpg'; 
import dessinTaxiDriver from '../../assets/photos/dessin_tablette/dessin-taxidriver.jpg'; 

const initialPhotos = [
    { id: 4, category: 'dessin', url: dessinAnimaux, alt: 'dessin d&apos;un crabe' },
    { id: 5, category: 'dessin', url: dessinDragon, alt: 'dessin d&apos;un dragon entouré de fleurs' },
    { id: 10, category: 'dessin', url: dessinIndien, alt: 'dessin tête de mort indien' },
    { id: 11, category: 'dessin', url: dessinJaponais, alt: 'dessin de carpes dans un style japonais' },
    { id: 12, category: 'dessin', url: dessinPierreCroix, alt: 'dessin d&apos;un homme crucifié' },
    { id: 13, category: 'dessin', url: dessinRobot, alt: 'dessin d&apos;un robot' },
    { id: 14, category: 'dessin', url: dessinVisage, alt: 'dessin d&apos;un homme qui fume' },
    { id: 44, category: 'dessin', url: dessinErotica, alt: 'dessin erotica en panavision' },
    { id: 45, category: 'dessin', url: dessinTaxiDriver, alt: 'dessin erotica en panavision' },
    { id: 46, category: 'dessin', url: dessinSkateur, alt: 'dessin erotica en panavision' },
    { id: 15, category: 'floral', url: floralBras, alt: 'fleur tatouée sur un avant bras' },
    { id: 16, category: 'floral', url: floralDos1, alt: 'fleur tatouée sur le dos d&apos;une femme' },
    { id: 19, category: 'floral', url: floralEpaule1, alt: 'fleur tatouée sur l&apos;épaule d&apos;une femme' },
    { id: 20, category: 'floral', url: floralEpaule2, alt: 'rose tatouée sur l&apos;épaule d&apos;une femme' },
    { id: 24, category: 'graphique', url: graphiqueRobot2, alt: 'robot tatoué sur un mollet photo en couleur' },
    { id: 23, category: 'graphique', url: graphiqueRobot1, alt: 'robot tatoué sur un mollet photo en noir et blanc' },
    { id: 21, category: 'graphique', url: graphiqueInsecte, alt: 'dessin d&apos;un insecte' },
    { id: 22, category: 'graphique', url: graphiqueMasque, alt: 'dessin d&apos;un masque à gaz sur une tête de mort' },
    { id: 28, category: 'manga', url: mangaGreatWave, alt: 'Great Wave d&aposHokusai tatouée sur un mollet' },
    { id: 27, category: 'manga', url: mangaDragon, alt: 'tatouage d&apos;un dragon style manga sur le dos' },
    { id: 47, category: 'manga', url: mangaSaintSeiya, alt: 'tatouage Saint Seiya' },
    { id: 29, category: 'manga', url: mangaDragonBall, alt: 'dessin dragon ball' },
    { id: 25, category: 'manga', url: mangaAkira, alt: 'dessin d&apos;un homme style manga' },
    { id: 26, category: 'manga', url: mangaAlbator, alt: 'tatouage Albator' },
    { id: 30, category: 'manga', url: mangaVisage1, alt: 'tatouage style manga visage de femme dans un champ' },
    { id: 31, category: 'manga', url: mangaVisage2, alt: 'tatouage style manga visage de femme' },
    { id: 201, category: 'realisme', url: semiRealismeElephant, alt: 'tatouage elephant sur l&aposomoplate' },
    { id: 202, category: 'realisme', url: semiRealismeSpartiate, alt: 'tatouage d&aposun spartiate et de Poséidon' },
    { id: 203, category: 'realisme', url: semiRealismeCalaveras, alt: 'tatouage calaveras style mexicain' },
    { id: 204, category: 'realisme', url: realismeCroix1, alt: 'tatouage d&aposune croix sur le dos' },
    { id: 205, category: 'realisme', url: realismeSamourai, alt: 'samourai au japon médiéval' },
    { id: 206, category: 'realisme', url: realismeSamuelLJackson, alt: 'tatouage réalisme de Samuel L. Jackson' },
    { id: 207, category: 'realisme', url: semiRealismeBonnet, alt: 'tatouage d&aposun bonnet' },
    { id: 208, category: 'realisme', url: semiRealismeHedwige, alt: 'tatouage de Hedwige la chouette d&aposHarry Potter' },
    { id: 209, category: 'realisme', url: realismeVisage, alt: 'tatouage visage d&aposenfant' },
    { id: 210, category: 'realisme', url: semiRealismeOurs, alt: 'tatouage d&aposun ours sur l&aposépaule d&aposun homme' },
    { id: 211, category: 'realisme', url: semiRealismeVisage, alt: 'tatouage d&aposun masque de visage' },
    { id: 212, category: 'realisme', url: realismeJohnnyHallyday, alt: 'tatouage Johnny Hallyday sur un mollet' },
];

const categories = [
    { key: 'TOUS', label: 'Toutes les catégories' },
    { key: 'realisme', label: 'Réalisme, Semi-réalisme' },
    { key: 'manga', label: 'Manga, Japonais' },
    { key: 'graphique', label: 'Graphique' },
    { key: 'dessin', label: 'Dessins & Projets' },
    { key: 'floral', label: 'Floral' }
];

const shufflePhotos = (photosArray) => {
    return photosArray
        .map(photo => ({ ...photo, sortKey: Math.random() }))
        .sort((a, b) => a.sortKey - b.sortKey);
};

const Gallery = () => {
    const [photos] = useState(initialPhotos);
    const [selectedCategory, setSelectedCategory] = useState('TOUS');
    const [showDescription, setShowDescription] = useState(true);
    const [showGallery, setShowGallery] = useState(true);
    const [resetGallery, setResetGallery] = useState(false);
    const [visiblePhotosCount, setVisiblePhotosCount] = useState(10); // Nouvel état pour limiter le nombre d'images affichées

    useEffect(() => {
        if (selectedCategory === 'TOUS') {
            setShowDescription(false);
            setTimeout(() => setShowGallery(true), 500);
            setResetGallery(false);
            setVisiblePhotosCount(10); // Réinitialiser à 10 images lors du changement de catégorie
        } else {
            setShowGallery(false);
            setTimeout(() => {
                setShowDescription(true);
            }, 0);
            setResetGallery(true);
        }
    }, [selectedCategory]);

    useEffect(() => {
        if (showDescription) {
            setTimeout(() => {
                if (resetGallery) {
                    setResetGallery(false);
                    setShowGallery(true);
                }
            }, 500);
        }
    }, [showDescription, resetGallery]);

    const filteredPhotos = selectedCategory === 'TOUS'
        ? shufflePhotos(photos)
        : photos.filter(photo => photo.category === selectedCategory);

    const handleShowMore = () => {
        setVisiblePhotosCount((prevCount) => prevCount + 10); // Afficher 10 images supplémentaires
    };

    return (
        <section id='Gallery'>
            <div>
                <h3>galerie</h3>
                <div className="filters">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            className={`filter-button ${selectedCategory === category.key ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.key)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className={`category-description-container ${showDescription ? 'fade-in' : 'fade-out'}`}>
                    <CategoryDescription selectedCategory={selectedCategory} />
                </div>

                <div className={`gallery-container ${showGallery ? 'fade-in' : 'fade-out'}`}>
                    {filteredPhotos.slice(0, selectedCategory === 'TOUS' ? visiblePhotosCount : filteredPhotos.length).map((photo) => (
                        <img
                            key={photo.id}
                            src={photo.url}
                            alt={photo.alt}
                            className="photo-thumbnail"
                        />
                    ))}
                </div>
                <div className="show-more">
                {selectedCategory === 'TOUS' && visiblePhotosCount < filteredPhotos.length && (
                    <button className="show-more-button" onClick={handleShowMore}>
                        Afficher la suite
                    </button>
                )}
                </div>
            </div>
        </section>
    );
}

export default Gallery;