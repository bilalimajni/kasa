import React from "react";
import "../css/lieuTag.css";
import Stars from "./etoile";

function LieuTag(props) {
  const { selected } = props;
  return (
    <div className="blocInformation">
      <div className="blocTitreLieu">
        <h2 className="titleAppartemment">{selected.title}</h2>
        <p className="location">{selected.location}</p>
        <div className="blocTag">
          {selected.tag.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>

      <div className="blocStarsImage">
     
        <div className="blocNomeImage">
          <p className="nomAppartement">{selected.héberger.nom}</p>
          <div className="blocImgAppartement">
            <img
              src={selected.héberger.image}
              alt="imgAppartement"
              className="imgAppartement"
            />
          </div>
        </div>
           <Stars selected={selected} />
      </div>
    </div>
  );
}
export default LieuTag;
