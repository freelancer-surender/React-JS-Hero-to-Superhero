import { useEffect } from "react";

function Child() {
  let count = 0;
  useEffect(() => {
    let myInterval = setInterval(() => {
      count++;
      console.log("Count is ", count);
    },1000);
    return () => {
      console.log("Component is destroyed");
      if (myInterval) {
        clearInterval(myInterval);
      }
    }
  }, []);
  return <div className="child">Child Component</div>;
}

export default Child;
