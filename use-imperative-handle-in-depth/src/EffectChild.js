
import { useEffect, useState } from "react";

const EffectChild = ({isClicked}) => {

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (isClicked) {
      handleIncrease();
    }
  }, [isClicked]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="count">{count}</div>
    </>
  );
};

export default EffectChild;
