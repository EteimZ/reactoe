import Square from "./Square";
import "../App.css";

function Board(props) {

  const Squares = [...Array(9).keys()].map((i) => (
    <Square
      value={props.squares[i]}
      key={i.toString()}
      onClick={() => {
        props.onClick(i);
      }}
    ></Square>
  ));

  return (
    <div>
      <div className="container">{Squares}</div>
    </div>
  );
}

export default Board;
