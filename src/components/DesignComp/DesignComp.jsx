import React from "react";
import DesignCard from "../DesignCard/DesignCard";
import "./DesignComp.css";

export default function DesignComp() {
  return (
    <div id="design-containor">
      <div id="design-card-containor">
        <DesignCard
          imgSrc={"https://i.imgur.com/JW1aUiy.png"}
          imgSrcOld={"https://i.imgur.com/OHkfaNd.jpg"}
          imgAlt={"Kitchen with stained cabinets and new countertop"}
          imgAltOld={"Old kitchen"}
        />
        <DesignCard
          imgSrc={"https://i.imgur.com/3RsWuJO.png"}
          imgAlt={"Nook"}
        />
        <DesignCard
          imgSrc={"https://i.imgur.com/DKypIiQ.png"}
          imgAlt={"Hallway Table"}
        />
      </div>
    </div>
  );
}
