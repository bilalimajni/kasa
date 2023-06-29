import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Acceuil from './page/acceuil';
import Footer from './composants/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appartement from './page/appertement';
import Eror from './composants/eror';
import Apropos from './page/apropos';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Acceuil/>
          <Footer />
        </>} />
        <Route path="/Apropos" element={<>
         
         <Apropos/>
         <Footer/>
        </>} />

        <Route path="/:title" element={
  <>
    <Appartement />
    <Footer />
  </>
} />


        <Route path="/*" element={<>
          <Eror/>
        </>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
