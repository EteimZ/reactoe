import "../App.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value ? props.value : "-"}
    </button>
  );
}

export default Square;
