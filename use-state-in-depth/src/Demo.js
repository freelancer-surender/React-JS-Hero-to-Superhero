import { useState } from "react";

function Demo() {
  // let count = 0;
  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("Harry");
  // const [lastName, setLastName] = useState("Potter");

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [user, setUser] = useState({
    id: 1, name: "Ron Weasley", age: 12
  });

  const someValue = () => {
    console.log("Big logic. Expensive calculation");
    return 10;
  }

  const [state, setState] = useState(() => (
    {
      count: someValue(),
      firstName: "Harry",
      lastName: "Potter"
    }
  ));

  // console.log(useState(0));

  const increase = () => {
    // count++;
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    setState({...state, count: state.count + 1});
    console.log("Count: ", state.count);
    console.log("First name: ", state.firstName);
  };

  const add = () => {
    // numbers.push(6);
    console.log(numbers);
    // setNumbers(numbers);
    setNumbers([...numbers, 6]);
  }

  const update = () => {
    // user.age = 20;
    // setUser(user);
    setUser({...user, age: 15});
  }

  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={add}>Add</button>
        <button onClick={update}>Update</button>
      </div>
      <div>
        {numbers.map((number, i) => (
          <span key={i}>{number}</span>
        ))}
      </div>
      <div>Age: {user.age}</div>
    </div>
  );
}

export default Demo;
