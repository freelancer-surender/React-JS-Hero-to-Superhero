import React, { useRef } from "react";
import DependChild from "./DependChild";

function DependParent() {
  const childRef = useRef();

  return (
    <div>
      <DependChild ref={childRef} />
      <button className="refresh" onClick={() => childRef.current.refresh()}>Refresh</button>
    </div>
  );
}

export default DependParent;
