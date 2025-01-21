import React, { useReducer } from "react";

const initialState = { count: 0, history: []};

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      }
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      }
    case "reset":
      return {
        count: 0,
        history: [...state.history, 0],
      }
    case "set":
      return {
        count: action.value,
        history: [...state.history, action.value],
      }
    default:
      return state;
  }
}

function Need() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="wrapper">
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'set', value: 10})}>Set to 10</button>
      <p>History: {state.history.join(", ")}</p>
    </div>
  );
}

export default Need;
