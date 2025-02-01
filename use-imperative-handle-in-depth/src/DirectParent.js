
import { useState } from "react";
import DirectChild from "./DirectChild";

function DirectParent() {

  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="count">{count}</div>
      <DirectChild increase = {handleIncrease} />
    </div>
  );
}

export default DirectParent;
