import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

function ForwardRefParent() {

  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.focus();
  };

  return (
    <div>
      {/* <input ref={myRef} /> */}
      <ForwardRefChild ref={myRef} />
      <button className="focus" onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default ForwardRefParent;
