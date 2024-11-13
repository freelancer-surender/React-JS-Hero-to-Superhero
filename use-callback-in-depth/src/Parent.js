import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div className="container">

      <h1>Count: {count}</h1>
      <h1>Other Count: {otherCount}</h1>

      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>

      <Child increment={increment} />
      
    </div>
  );
}

export default Parent;
