import React from 'react';
import { Link } from 'react-router-dom';
import Jason from './jason';
import '../css/cart.css';

function Cart() {
  return (
    <div className="bloccart">
      {Jason.map((item) => (
        <Link to={`/${item.id}`} key={item.id} className="cart">
          <img src={item.cover} alt={item.title} className="cover" />
          <p className="titleAppartement">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Cart;
