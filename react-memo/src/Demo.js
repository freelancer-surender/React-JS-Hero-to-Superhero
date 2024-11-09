import { useState } from "react";
import Counter from "./Counter";

function Demo() {

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  return (
    <div className="container">
      
      <Counter count={count} />
      
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input 
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)} 
        placeholder="Type something..."
      />
    </div>
  );
}

export default Demo;
