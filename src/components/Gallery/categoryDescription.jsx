import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const categoryDescriptions = {
    realismeSemiRealisme: "Reproduction fidèle d’images souvent tirées de la photographie jouant avec les ombrages représentant des portraits, animaux, paysages ou objets. Le mélange de réalisme et d’éléments stylisés offre la possibilité d’ajouts de touches abstraites ou artistiques créant un équilibre entre précision et imagination pour aboutir au semi-réalisme.",
    mangaPopCulture: "Les tatouages de style manga se caractérisent par des traits dynamiques, des expressions exagérées capturant l'essence des personnages emblématiques de la BD japonaise. Plus largement le style pop culture est inspiré des univers provenant des différents arts visuels et sonores des 20éme et 21éme siècles, tels la BD, le cinéma, la musique, l'actualité, ce qui permet de créer des oeuvres de tatouage contemporaines faisant echo à nos influences en jouant avec les graphismes utilisés dans ces domaines culturels",
    sketchGraphiqueTrashPolka: "En tatouage le sketch est un style reprenant les codes du dessin, dans un esprit croquis vous retrouverez les coups de crayons, hachures, les coups de pinceaux, taches de peinture... Le graphique a une approche également artistique, laissant libre cours a la création par le biais des techniques de peinture contemporaines et dessin pouvant parfois inclure des éléments géométriques... Le trash polka est un type de tatouage qui combine des éléments réalistes et abstraits. Principalement en rouge et noir, ce style se distingue par des motifs dynamiques qui peuvent inclure des portraits, des éléments graphiques, des lettres et des textures variées.",
    traditionnel: "Rubrique comprenant les styles de tatouages traditionnels reprenant les codes graphiques hérités d'époques, cultures et endroits du monde différents, vous trouverez du japonais, du 'trad' américain, du maori...",
    floralFineline: "Le style de tatouage floral est polyvalent, il peut être adapté à une variété de préférences et signications personnelles. Les fleurs ont chacunes une symbolique et en fonction de leur design faire appel à des styles graphiques variés. Dans cette rubrique vous trouverez les tatouages floraux plutôt minimalistes en fineline ainsi que d'autres thèmes toujours en fineline.",
    atelier: "Rubrique dédiée à la vie courante de l'Atelier et ses diverses activités : expo d'art, troc, brocante, dans un esprit de convivialité et d'entraide.",
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