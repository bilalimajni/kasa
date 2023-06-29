import React from 'react';
import { Link } from 'react-router-dom';
import '../css/eror.css';
import Nav from './nav';

function Eror() {
  return (
    <>
    <main>
      <Nav/>
      <h1 className='text'>404</h1>
      <p className='messageError'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={`/`} >
           <p className='lienHome'>Retourner sur la page d’accueil</p>
          </Link>
    </main>
      
    </>
  );
}

export default Eror;
