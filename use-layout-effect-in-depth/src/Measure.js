import React, { useLayoutEffect, useRef, useState } from "react";

function Measure() {
  const boxRef = useRef();
  const [boxHeight, setBoxHeight] = useState(0);

  useLayoutEffect(() => {
    const height = boxRef.current.getBoundingClientRect().height;
    setBoxHeight(height);
  }, []);

  return (
    <div>
      <div className="box w500" ref={boxRef}>
        Measure me!
      </div>
      <p>The box's height is {boxHeight}px.</p>
      <div
        className="newBox w500"
        style={{
          height: `${boxHeight + 100}px`,
        }}
      >
        New Box
      </div>
    </div>
  );
}

export default Measure;
