import { useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Harry");

  // const user = { name: username };

  const user = useMemo(() => ({name: username}), [username]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setUsername("Ron")}>Change Name</button>
      <Child user={user} />
    </div>
  );
}

export default Parent;
