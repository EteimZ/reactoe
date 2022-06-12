import "../App.css";

function Square(props) {
  return (
    <button className={props.win ? "win" : "square"} onClick={props.onClick}>
      {props.value ? props.value : "-"}
    </button>
  );
}

export default Square;
