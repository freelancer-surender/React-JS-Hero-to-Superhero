import { useState } from "react";
import Detail from "./Detail";

function Object() {

  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const person = {id: 123, name: "Harry", age: 15};

  return (
    <div className="container">

      <Detail firstCount={firstCount} person={person} />

      <button className="large" onClick={() => setFirstCount(firstCount + 1)}>Increment First Count</button>
      <button className="large" onClick={() => setSecondCount(secondCount + 1)}>Increment Second Count</button>
    
    </div>
  );

}

export default Object;
