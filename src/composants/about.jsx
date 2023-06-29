import React, { useState } from 'react';
import '../css/about.css';

const About = ({ titre, texte, classeSupplementaire }) => { // Ajoutez la prop "classeSupplementaire"
  const [estTexteVisible, setEstTexteVisible] = useState(false);

  const toggleTexteVisible = () => {
    setEstTexteVisible(!estTexteVisible);
  };

  return (
    <div className={`onglet ${classeSupplementaire}`}> {/* Utilisez la prop "classeSupplementaire" dans la classe */}
      <div className="titre-onglet" onClick={toggleTexteVisible}>
        <h3>{titre}</h3>
        <img src={estTexteVisible ? "flechehigh.png" : "flechelow.png"} alt="fleche" />
      </div>
      {estTexteVisible && (
        <div className="contenu-onglet">
          {Array.isArray(texte) ? (
            texte.map((equipment, index) => <p key={index}>{equipment}</p>)
          ) : (
            <p className='textContenu'>{texte}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default About;
