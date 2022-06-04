import { useState } from "react";
import Square from "./components/Square";
import { calculateWinner } from "./utils";
import "./App.css";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleOnclick(i) {
    const squaresClone = squares.slice();
    if (calculateWinner(squaresClone) || squares[i]) {
      return;
    }
    squaresClone[i] = xIsNext ? "X" : "O";
    setSquares(squaresClone);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const Squares = [...Array(9).keys()].map((i) => (
    <Square
      value={squares[i]}
      key={i.toString()}
      onClick={() => {
        handleOnclick(i);
      }}
    ></Square>
  ));

  return (
    <div>
      <div className="status"> {status} </div>
      <div className="container">{Squares}</div>
    </div>
  );
}

export default Board;
