import React from "react";

const Child = React.memo(({ increment }) => {
  console.log("Child component re-rendered");
  return <button onClick={increment}>Increment Count</button>;
});

export default Child;
