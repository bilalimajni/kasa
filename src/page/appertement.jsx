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
  const { id} = useParams();

  const selected = Jason.find((item) => item.id === id);

  if (!selected) {
    return <Eror />;
  }

  const renderContent = () => {
    if (!selected.photos) {
      return <Eror />;
    }

    return (
      <>
        <Carrouselle selected={selected} />

        <LieuTag selected={selected} />
        <div className="blocDescriptionÉquipements">
          <About titre="Description" texte={selected.description} />
          <About titre="Équipements" texte={selected.équipements} />
        </div>
      </>
    );
  };

  return (
    <main>
      <Nav />
      <div>{renderContent()}</div>
    </main>
  );
};

export default Appartement;
