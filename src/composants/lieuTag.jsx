import React from 'react'
import "../css/lieuTag.css"
 function LieuTag(props) {
    const { selected } = props;
  return (
    <div className='blocInformation'>
    <div className='blocTitreLieu'>
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

    <div className="blocNomeImage">
      <p className='nomAppartement'>{selected.héberger.nom}</p>
      <div className="blocImgAppartement">
        {" "}
        <img
          src={selected.héberger.image}
          alt=""
          className="imgAppartement"
        />
      </div>
    </div>
  </div>
  )
}
export default LieuTag ;