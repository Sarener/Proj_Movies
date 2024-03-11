import React from "react";
import "./menuButton.scss";

export const MenuButtonAdaptive = ({ isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu-button
        ${isActive === true ? "active" : ""}
        ${isActive === false ? "unactive" : ""}
      `}
    >
      <span></span>
    </button>
  );
};
