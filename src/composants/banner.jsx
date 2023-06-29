import React from "react";
import "../css/banner.css";

function Banner({ imageUrl, text }) {
  return (
    <div>
      <div className="blocBanner">
        <img src={imageUrl} alt="img banner" className="imgBanner" />
        <p className="bannerText">{text}</p>
      </div>
      
    </div>
  );
}

export default Banner;
