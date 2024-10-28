import { useContext } from "react";
import LevelTwo from "./LevelTwo";
import MessageContext from "../MessageContext";

function LevelOne() {
  
  const [message, setMessage] = useContext(MessageContext);
  const update = () => {
    setMessage("Thank you so much!");
  };

  return (
    <div className="first context">
      <div className="title">Second Level</div>
      <LevelTwo />
      <button onClick={update}>Update</button>
    </div>
  );
}

export default LevelOne;
