import { useState } from "react";
import SecondLevel from "./SecondLevel";

function FirstLevel() {
  const [message, setMessage] = useState("Please subscribe and support");

  const update = () => {
    setMessage("Thank you so much!");
  };

  return (
    <div className="first">
      <div className="title">Second Level</div>
      <SecondLevel message={message} />
      <button onClick={update}>Update</button>
    </div>
  );
}

export default FirstLevel;
