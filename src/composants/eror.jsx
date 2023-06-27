import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eror.css';

function Eror() {
  return (
    <>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={`/`} >
           <p>Retourner sur la page d’accueil</p>
          </Link>
    </>
  );
}

export default Eror;
