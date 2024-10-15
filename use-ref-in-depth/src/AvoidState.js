import { useEffect, useRef, useState } from "react";

function AvoidState() {

    const unameRef = useRef("");
    const pwordRef = useRef("");

    // const [name, setName] = useState("");

    // const inputChange = (e) => {
    //   setName(e.target.value);
    // };

    // useEffect(() => {
    //   console.log("Re-render is happening");
    // }, [name]);

    const login = () => {
      console.log(unameRef.current.value);
      console.log(pwordRef.current.value);
    }

  return (
    <div>
      <div className="mt30">
        <label>Username</label>
        {/* <input type="text" onChange={(event) => inputChange(event)} /> */}
        <input type="text" ref={unameRef} />
      </div>

      <div className="mt30">
        <label>Password</label>
        <input type="password" ref={pwordRef} />
      </div>

      <div className="mt30">
        <button onClick={login}>Login</button>
      </div>

      {/* <div className="mt30">{name}</div> */}
    </div>
  );
}

export default AvoidState;
