import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Nav from './composants/nav';
import Cart from './composants/cart';
import Footer from './composants/footer';
import Banner from './composants/banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appartement from './page/appertement';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Nav />
          <Banner />
          <Cart />
          <Footer />
        </>} />
        <Route path="/Apropos" element={<>
          <Nav />
          <div>Hello world!</div>
        </>} />
        <Route path="/:id" element={<>
          <Nav />
          <div>Hello world!</div>
          <Appartement />
        </>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
