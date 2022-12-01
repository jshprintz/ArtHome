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
          imgSrc={"https://i.imgur.com/Wx6TugU.png"}
          imgSrcOld={"https://i.imgur.com/jI6tsjh.png"}
          imgAlt={"Myrtle Beach home design living room"}
          imgAltOld={"Old living room"}
        />
        <DesignCard
          imgSrc={"https://i.imgur.com/sGQhLjM.png"}
          imgSrcOld={"https://i.imgur.com/9wlE5BU.png"}
          imgAlt={"New modern kitchen"}
          imgAltOld={"Old kitchen"}
        />
      </div>
    </div>
  );
}
