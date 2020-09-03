import React from "react";

import "../assets/styles/CharacterList.css";

const CharacterList = ({ children }) => {
  return (
    <React.Fragment>
      <div className="list">{children}</div>
    </React.Fragment>
  );
};

export default CharacterList;
