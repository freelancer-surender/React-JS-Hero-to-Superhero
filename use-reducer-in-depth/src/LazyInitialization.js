import React, { useReducer } from "react";

const complexCalculation = (initialValue) => {
  console.log("Running complex calculation...");
  let result = initialValue;
  for (let i = 0; i < 6000000000; i++) {
    result += 1;
  }
  console.log("Calculation done");
  return { count: result };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

function Lazy() {
  const [state, dispatch] = useReducer(reducer, 0, complexCalculation);

  return (
    <div className="wrapper">
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default Lazy;
