import React from 'react';
import { Link } from 'react-router-dom';
import Jason from './jason';
import '../css/cart.css';
import Eror from './eror';


function Cart() {
  if (!Jason || Jason.length === 0) {
    return <Eror />; // Renvoie le composant Error si Jason est vide ou non défini
  }

  return (
    <div className="bloccart">
      {Jason.map((item) => (
        item.title ? (
          <Link to={`/${encodeURIComponent(item.title)}`} key={item.id} className="cart">
            <img src={item.cover} alt={item.title} className="cover" />
            <p className="titleAppartement">{item.title}</p>
          </Link>
        ) : null
      ))}
    </div>
  );
}

export default Cart;
