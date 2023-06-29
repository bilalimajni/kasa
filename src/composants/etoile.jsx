import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = ({ count, total }) => {
  return (
    <div>
      {[...Array(total)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={index < count ? 'starred' : 'stargrey'}
        />
      ))}
    </div>
  );
};

export default Stars;
