import React, { useState } from "react";

function Need() {
  
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setHistory([...history, count + 1]);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setHistory([...history, count - 1]);
  };

  const reset = () => {
    setCount(0);
    setHistory([...history, 0]);
  };

  const setSpecificValue = (value) => {
    setCount(value);
    setHistory([...history, value]);
  };

  return (
    <div className="wrapper">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setSpecificValue(10)}>Set to 10</button>
      <p>History: {history.join(", ")}</p>
    </div>
  );
}

export default Need;
