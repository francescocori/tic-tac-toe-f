import React, { useState } from "react";

export function calculateWinner(cells) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return {
        winner: cells[a],
        winCombinations: winCombinations[i],
      };
    }
  }
  if (cells.every((cell) => cell != null) && { winner: null } === null) {
    console.log("tie");
  }
  return {
    winner: null,
    winCombinations: null,
  };
}
