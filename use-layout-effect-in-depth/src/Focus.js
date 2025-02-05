import React, { useLayoutEffect, useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default FocusInput;