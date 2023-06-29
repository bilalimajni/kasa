import React from "react";
import { useParams } from "react-router-dom";
import Jason from "../composants/jason.jsx";
import Carrouselle from "../composants/carrouselle.jsx";
import "../css/appartement.css";
import Eror from "../composants/eror.jsx";
import About from "../composants/about.jsx";
import LieuTag from "../composants/lieuTag.jsx";
import Nav from "../composants/nav.jsx";

const Appartement = () => {
  const { title } = useParams();

  const selected = Jason.find((item) => item.title === title);

  if (!selected) {
    return <Eror />;
  }

  return (
    <main>
      <Nav />
      <div>
        <Carrouselle selected={selected} />

        <LieuTag selected={selected} />
        <div className="blocDescriptionÉquipements">
          <About titre="Description" texte={selected.description} />
          <About titre="Équipements" texte={selected.équipements} />
        </div>
      </div>
    </main>
  );
};

export default Appartement;
