import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils";
import "./App.css";

//                    Todo
//########################################################
// Remove move buttons and replace it with an undo button.
// Notify players when there's a draw.
// Higlight winning squares
// Add CSS styling
//########################################################

function Game() {
  const [history, setHistory] = useState([{ squares : Array(9).fill(null) }]);
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
    setHistory(historyVal.concat([{ squares: squares}]));
    setStepNumber(historyVal.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(step) {
    setStepNumber(step);
    setXIsNext( (step % 2) == 0 );
  }

  
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((_, move) =>{
    const desc = move ? "Go to move #" + move : 'Reset';

    return (
      <li key={move}>
        <button onClick={() => { jumpTo(move)}}>
          {desc}
        </button>
        </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares}
        onClick={(i) => handleOnClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
