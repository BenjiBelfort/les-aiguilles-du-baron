import { useState, useEffect } from "react";
import "./mentionsLegalesModal.css";

const MentionsLegalesModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Bouton d’ouverture */}
      <button onClick={() => setIsOpen(true)} className="mentions-button">
        Mentions légales.
      </button>

      {/* Modale */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="modal-close-button"
              aria-label="Fermer la modale"
            >
              &times;
            </button>

            <h2>Mentions légales</h2>

            <section>
              <h3>Éditeur du site :</h3>
              <p>
                Les Aiguilles du Baron - Atelier de Tatouage<br />
                Adresse : 5 rue du Général Roussel - 90000 BELFORT<br />
                Responsable de la publication : Jean-Philippe GAUTHERON<br />
                Développement web : Benjamin TISSERAND<br />
                Tél : 03 63 14 69 99
              </p>
            </section>

            <section>
              <h3>Hébergement :</h3>
              <p>
                OVH<br />
                2 rue Kellermann - 59100 Roubaix - France
              </p>
            </section>

            <section>
              <h3>Propriété intellectuelle :</h3>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, photos, illustrations) sont protégés par le droit d’auteur.
                Toute reproduction ou utilisation sans autorisation préalable est interdite.
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default MentionsLegalesModal;
