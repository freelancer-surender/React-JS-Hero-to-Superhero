import { useEffect, useState } from "react";

function Dependencies() {

  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState(["India", "USA", "Pakistan"]);
  const [user, setUser] = useState({ id: 1, name: "Harry", age: 15 });

  const increase = () => {
    setCount(count + 1);
  };

  const showContent = () => {
    setShow(true);
  };

  const addCountry = () => {
    countries.push("Germany");
    setCountries([...countries]);
  };

  const changeUser = () => {
    user.age = 17;
    setUser({...user});
  };

  useEffect(() => {
    console.log("UseEffect is triggered");
  }, [count, show, countries, user]);

  return (
    <>
      <div className="mb50">
        <button onClick={increase}>Increase</button>
        <button onClick={showContent}>Show</button>
        <button onClick={addCountry}>Add Country</button>
        <button onClick={changeUser}>Change User</button>
      </div>

      <div className="mt50">The count is {count}</div>

      {show ? <div className="mt50">This content is shown</div> : null}

      <div className="mt50">
        {countries.map((country, index) => (
          <div key={index}>{country}</div>
        ))}
      </div>

      <div className="mt50">
        {user.name}'s age is {user.age}
      </div>
    </>
  );
}

export default Dependencies;
