import React from "react";
import "./style.css";

const Cell = ({ onClick, value, isWinnerCell }) => {
  return (
    <button
      className={`cell ${isWinnerCell ? "isActive" : ""}  `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
