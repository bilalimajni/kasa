import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Jason from "../composants/jason.jsx";


const Appartement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selected = Jason.find((item) => item.id === id);

  if (!selected) {
    navigate('/error');
    return null;
  }

  return (
    <div>
      <div>
        <img src={selected.photos[0]} alt="" />
      </div>
      <div>
        <h2>{selected.title}</h2>
        <p>{selected.location}</p>
        <p>{selected.description}</p>
      </div>
      <div>{selected.héberger.nom}</div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
       
      </div>
      <div>
        <Link to="/">Retour</Link>
      </div>
    </div>
  );
}

export default Appartement;
