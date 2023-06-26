import React from 'react';
import "../css/nav.css";
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <nav className='navigation'>
    <img src="logoKasa.svg" alt="logo" />
    <div className='lienNav'>
     
      <Link to="/">
           <p className='lienAccueil'>Accueil</p>
      </Link >

    <Link to="/Apropos">
        <p className='lienAPropos'>A Propos</p>  
      </Link >
 
    </div>
    

    </nav>
   
  );
}

export default Nav;
