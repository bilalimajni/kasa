import React from 'react';
import "../css/nav.css";


import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navigation">
      <img src="logoKasa.svg" alt="logo" className="imgNav" />
      <div className="lienNav">
        <NavLink exact="true" to="/" className="lienAccueil">Accueil</NavLink>
        <NavLink to="/Apropos" className="lienAPropos">A Propos</NavLink>
      </div>
    </nav>
  );
}



export default Nav;
