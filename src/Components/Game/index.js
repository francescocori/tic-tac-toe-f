import React, { useState } from "react";
import "./style.css";
import Board from "../Board";
import { calculateWinner } from "../../logic";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const calculateWinnerResult = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinnerResult.winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board
        cells={board}
        calculateWinnerResult={calculateWinnerResult}
        onClick={handleClick}
      />
      <div>
        <p className="next-player">
          {"Next Player: " + (xIsNext ? "X" : " O")}
        </p>
        <button
          className="re-start-btn"
          onClick={() => setBoard(Array(9).fill(null))}
        >
          Re-Start
        </button>
        {calculateWinnerResult.winner && (
          <div className="modal-overlay">
            <div className="winner-message">{`The winner is : ${calculateWinnerResult.winner}`}</div>
            <button onClick={() => setBoard(Array(9).fill(null))}>Start</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
