import { useContext } from "react";
import MessageContext from "../MessageContext";

function LevelThree() {
  const message = useContext(MessageContext);
  return <div className="third context">{message}</div>;
}

export default LevelThree;
