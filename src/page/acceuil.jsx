import React from "react";
import Nav from "../composants/nav";
import Cart from "../composants/cart"
import Banner from "../composants/banner"

 function Acceuil() {
  return (
    <main>
      <Nav />
      <Banner
        imageUrl="bannerAccueil.jpeg"
        text="Chez vous, partout et ailleurs"
      />

      <Cart />
    </main>
  );
}
export default Acceuil ;