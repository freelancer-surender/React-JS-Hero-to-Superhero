import { useState, useEffect, useCallback } from "react";

function Need() {

  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log("Increment function is getting recreated");
  }, [increment]);

  return (
    <div className="container">

      <h1>Count: {count}</h1>
      <h1>Other Count: {otherCount}</h1>

      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>

      <button onClick={increment}>Increment Count</button>
      
    </div>
  );
}

export default Need;
