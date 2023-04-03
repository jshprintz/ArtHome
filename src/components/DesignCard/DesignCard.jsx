import React from "react";
import "./DesignCard.css";

export default function DesignCard({ imgAlt, imgSrc, imgAltOld, imgSrcOld }) {
  return (
    <div id="design-card">
      <img className="design-img" src={imgSrc} alt={imgAlt} />
      <div id="image-overlay">
        <img className="design-img" src={imgSrcOld} alt={imgAltOld} />
      </div>
    </div>
  );
}
