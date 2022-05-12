import React from "react";
import "./style.css";
import Cell from "../Cell";

const Board = ({ cells, onClick, calculateWinnerResult }) => {
  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          isWinnerCell={
            calculateWinnerResult.winner &&
            calculateWinnerResult.winCombinations.includes(index)
          }
          value={cell}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
