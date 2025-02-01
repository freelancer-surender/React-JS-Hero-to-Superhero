
import { useState } from "react";
import EffectChild from "./EffectChild";

function EffectParent() {  

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    });
  }

  return (
    <div>
      <EffectChild isClicked={isClicked} />
      <button className="increase" onClick={handleClick}>Increase</button>
    </div>
  );

}

export default EffectParent;
