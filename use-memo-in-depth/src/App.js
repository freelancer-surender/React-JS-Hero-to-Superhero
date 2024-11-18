import { useState } from "react";
import Need from "./Need";
import Parent from "./Parent";

function App() {

  const [loopCount, setLoopCount] = useState(3000000000);

  const increase = () => {
    setLoopCount(loopCount + 1);
  }

  return (
    <div className="container">
      {/* <Need num={loopCount} />
      <button onClick={increase}>Increase loop count</button> */}
      <Parent />
    </div>
  );

}

export default App;
