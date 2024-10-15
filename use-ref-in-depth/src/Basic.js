import { useRef } from "react";

function Basic() {

  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const focusInput = () => {
    // console.log(inputRef.current);
    inputRef.current.focus();
    btnRef.current.style.color = "red";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput} ref={btnRef} >Focus</button>
    </div>
  );
}

export default Basic;
