import React, { useState } from 'react';
import '../css/carouselle.css';

function Carrousel(props) {
  const { selected } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const passerALImageSuivante = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selected.photos.length);
  };

  const passerALImagePrecedente = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selected.photos.length - 1 : prevIndex - 1
    );
  };

  if (selected.photos.length === 1) {
    return <img src={selected.photos[0]} alt="" className='imageAppartement' />;
  }

  return (
    <div className='blocImageAppartement'>
      <img src={selected.photos[currentIndex]} alt="" className='imageAppartement' />
      <div className='blocCarouselleDroite'>
        <img src="flechedroite.png" alt="" onClick={passerALImageSuivante} />
      </div>
      <div className='blocCarousellegauche'>
        <img src="flechegauche.png" alt="" onClick={passerALImagePrecedente} />
      </div>
      <div className='compteur'>{currentIndex + 1} / {selected.photos.length}</div>
    </div>
  );
}

export default Carrousel;
