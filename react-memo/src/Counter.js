import React from "react";

const Counter = React.memo(({ count }) => {

  console.log("Counter component is re-rendered");

  return <h2>Count: {count}</h2>;
  
});

export default Counter;
