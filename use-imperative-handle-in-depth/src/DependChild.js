import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";

const DependChild = forwardRef((props, ref) => {
  const divRef = useRef();
  const [status, setStatus] = useState("Off");

  const computedStatus = `${status}line`;

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => {
        divRef.current.innerText = computedStatus;
      },
    }),
    [computedStatus]
  );

  return (
    <div>
      <div ref={divRef} className="message">Offline</div>
      <button className="offline" onClick={() => setStatus("Off")}>Offline</button>
      <button className="online" onClick={() => setStatus("On")}>Online</button>
    </div>
  );
});

export default DependChild;
