import React, { useState } from "react";

function Need() {
  const [state, setState] = useState({
    count: 0,
    history: [],
  });

  const increment = () => {
    setState({
      count: state.count + 1,
      history: [...state.history, state.count + 1],
    });
  };

  const decrement = () => {
    setState({
      count: state.count - 1,
      history: [...state.history, state.count - 1],
    });
  };

  const reset = () => {
    setState({ count: 0, history: [...state.history, 0] });
  };

  const setSpecificValue = (value) => {
    setState({ count: value, history: [...state.history, value] });
  };

  return (
    <div className="wrapper">
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setSpecificValue(10)}>Set to 10</button>
      <p>History: {state.history.join(", ")}</p>
    </div>
  );
}

export default Need;
