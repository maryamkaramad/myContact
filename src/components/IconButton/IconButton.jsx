import React from "react";
import "./iconButton.scss";
const IconButton = ({ onClick, children }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div role={"button"} onClick={handleClick} className="IconButton">
      {children}
    </div>
  );
};

export default IconButton;
