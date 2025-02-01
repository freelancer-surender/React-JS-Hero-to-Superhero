import { forwardRef } from "react";

const ForwardRefChild = forwardRef((props, inputRef) => {
  return <input ref={inputRef} />;
});

export default ForwardRefChild;
