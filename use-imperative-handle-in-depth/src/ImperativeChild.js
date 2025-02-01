import { forwardRef, useImperativeHandle, useState } from "react";

const ImperativeChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  useImperativeHandle(ref, () => ({
    increase
  }));

  return <div className="count">{count}</div>;
});

export default ImperativeChild;
