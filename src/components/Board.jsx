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
      win={props.win ? (props.win.includes(i) ? true : false) : false}
    ></Square>
  ));

  return <div className="container">{Squares}</div>;
}

export default Board;
