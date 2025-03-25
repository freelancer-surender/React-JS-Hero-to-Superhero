import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const Home = () => {
  const inputRef = useRef("");
  const { saveData, getData } = useLocalStorage("country");

  const save = () => {
    saveData(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="home">
      <input className="homeText" type="text" ref={inputRef} />
      <button className="homeBtn" onClick={save}>Store</button>
    </div>
  );
};

export default Home;
