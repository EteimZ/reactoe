import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils";
import "./App.css";


function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleOnClick(i) {
    const historyVal = history.slice(0, stepNumber + 1);
    const current = historyVal[historyVal.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyVal.concat([{ squares: squares }]));
    setStepNumber(historyVal.length);
    setXIsNext(!xIsNext);
  }

  function redo(step) {
    let val = step == -1 ? 0 : step;
    setStepNumber(val);
    setXIsNext(val % 2 == 0);
  }

  function reset() {
    setStepNumber(0);
    setXIsNext(true);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner[0];
  } else if (stepNumber == 9) {
    status = "Game draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <Board
        squares={current.squares}
        onClick={(i) => handleOnClick(i)}
        win={winner ? winner.slice(1) : null}
      />
      <div className="game-info">
        <button className="btn" onClick={() => redo(stepNumber - 1)}>
          Redo
        </button>
        <button className="btn" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Game;
