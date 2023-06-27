import React, { useState } from 'react';
import '../css/about.css';

const About = ({ titre, texte }) => {
  const [estTexteVisible, setEstTexteVisible] = useState(false);

  const afficherTexte = () => {
    setEstTexteVisible(true);
  };

  const masquerTexte = () => {
    setEstTexteVisible(false);
  };

  return (
    <div className="onglet">
      <div className="onglet-titre">
        <h3>{titre}</h3>
        {!estTexteVisible && (
          <img src="flechebas.png" alt="fflechebas" onClick={afficherTexte} />
        )}
        {estTexteVisible && (
          <img src="lechehaut.png" alt="flechehaut" onClick={masquerTexte} className='.flechehigh' />
        )}
      </div>
      {estTexteVisible && (
        <div className="onglet-contenu">
          <p>{texte}</p>
        </div>
      )}
    </div>
  );
};

export default About;
