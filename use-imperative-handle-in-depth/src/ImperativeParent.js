import { useRef } from "react";
import ImperativeChild from "./ImperativeChild";

function ImperativeParent() {

  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.increase();
  };

  return (
    <div>
      <ImperativeChild ref={childRef} />
      <button className="increase" onClick={handleClick}>Increase</button>
    </div>
  );
}

export default ImperativeParent;
