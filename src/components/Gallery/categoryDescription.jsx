import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const categoryDescriptions = {
    realisme: "Reproduction fidèle d’images souvent tirées de la photographie jouant avec les ombrages représentant des portraits, animaux, paysages ou objets. Le mélange de réalisme et d’éléments stylisés offre la possibilité d’ajouts de touches abstraites ou artistiques créant un équilibre entre précision et imagination pour aboutir au semi-réalisme.",
    manga: "Inspiré de la bande dessinée japonaise, le style manga reprend les codes de ce vaste univers. Plus traditionnel et inspiré de la mythologie, l’art traditionnel japonais se caractérise par la représentation de motifs emblématiques de cette culture.",
    graphique: "Approche artistique moderne et utilisation de techniques de gravure, de jeux de contraste et d’aplats, donne à ce style la possibilité de jouer avec la composition visuelle donnant souvent l’apparence de croquis ou œuvres d’art contemporaine.",
    floral: "La symbolique des fleurs, mêlée à une composition harmonieuse, met en avant l’élégance et la finesse en jouant avec les différents styles visuels.",
    dessin: "Le dessin est une technique artistique essentielle, offrant une grande liberté d'expression à travers des lignes et des formes. Utilisé avec divers outils comme le crayon ou l'encre, il permet de capturer émotions et idées avec simplicité et précision.",
    TOUS: "",
};

const CategoryDescription = ({ selectedCategory }) => {
    const [showDescription, setShowDescription] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(selectedCategory);

    useEffect(() => {
        // D'abord, on cache l'ancienne description
        setShowDescription(false);

        // Attends la fin de la transition avant de changer le texte
        const hideTimeout = setTimeout(() => {
            setCurrentCategory(selectedCategory);

            // Puis, on affiche la nouvelle description après un petit délai
            const showTimeout = setTimeout(() => {
                setShowDescription(true);
            }, 50);

            return () => clearTimeout(showTimeout);
        }, 500); // Durée de la transition pour la disparition

        return () => clearTimeout(hideTimeout);
    }, [selectedCategory]);

    return (
        <p className={`category-description ${showDescription ? 'show' : ''}`}>
            {categoryDescriptions[currentCategory]}
        </p>
    );
};

CategoryDescription.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
};

export default CategoryDescription;