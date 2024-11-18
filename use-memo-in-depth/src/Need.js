import { useMemo, useState } from "react";

function Need({ num }) {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const expensiveCalc = () => {
    console.log("Expensive calculation........");
    let tempCount = 0;
    for (let i = 0; i <= num; i++) {
      tempCount++;
    }
    return tempCount;
  }

  const memoizedCalc = useMemo(expensiveCalc, [num]);

  return (
    <div className="container">
      <div className="mb30">Count is {count}</div>
      {/* <div className="mb30">Result is {expensiveCalc()}</div> */}
      <div className="mb30">Result is {memoizedCalc}</div>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Need;
