import { useReducer } from "react";
import "./App.scss";

const initialState = {
  number: 0,
  lastAction: "",
  whenLastClicked: "",
  timeClicked: 0,
};

const reducer = (theState, action) => {
  const obj = {};
  obj.whenLastClicked = String(new Date());
  obj.timesClicked = theState.timesClicked + 1;
  switch (action.type) {
    case "down":
      obj.number = theState.number - 1;
      obj.lastAction = "decrement";
      break;
    case "up":
      obj.number = theState.number + 1;
      obj.lastAction = "increment";
      break;
    case "reset":
      obj.number = 0;
      obj.lastAction = "reset";
      break;
  }
  return obj;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer</h1>
      <div>Number: {state.number}</div>
      <div>Last action: {state.lastAction}</div>
      <div className="when">When last clicked: {state.whenLastClicked}</div>
      <div className="timesClicked">Times clicked: {state.timesClicked}</div>
      <div className="buttonArea">
        <button onClick={() => dispatch({ type: "down" })}>-</button>
        <button onClick={() => dispatch({ type: "up" })}>+</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
