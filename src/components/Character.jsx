import React from "react";

import "../assets/styles/Character.css";

const Character = ({ name, image }) => {
  return (
    <div className="character">
      <div className="character-image">
        <img src={image} alt="" />
      </div>
      <div className="character-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Character;
