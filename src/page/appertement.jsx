import React from "react";
import { useParams } from "react-router-dom";
import Jason from "../composants/jason.jsx";
import Carrouselle from "../composants/carrouselle.jsx";
import "../css/appartement.css";
import Eror from "../composants/eror.jsx";
import About from "../composants/about.jsx";

const Appartement = () => {
  const { id } = useParams();

  const selected = Jason.find((item) => item.id === id);

  if (!selected) {
    return <Eror />;
  }

  return (
    <div>
      <Carrouselle selected={selected} />

      <div>
        <h2>{selected.title}</h2>
        <p>{selected.location}</p>
        <div className="blocTag">
          {selected.tag.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>

      <div className="blocNomeImage">
        <p>{selected.héberger.nom}</p>
        <div className="blocNomeAppartement">
          <img
            src={selected.héberger.image}
            alt=""className="nomeAppartement"
            
          />
          <div>
            <About titre={selected.description} />
            <About texte={selected.équipements}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appartement;
