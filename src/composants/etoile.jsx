import React from 'react';
import { FaStar } from 'react-icons/fa';
import "../css/lieuTag.css"

const Stars = (props) => {
  const { selected } = props;

  const generateStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= selected.note ? 'orange' : 'grey';
      stars.push(
        <span key={i.toString()} className={`housing_page_header_hoster_ratings_star housing_page_header_hoster_ratings_star_${starColor}`}>
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='housing_page_header_hoster_ratings'>
      {generateStars()}
    </div>
  );
};

export default Stars;
