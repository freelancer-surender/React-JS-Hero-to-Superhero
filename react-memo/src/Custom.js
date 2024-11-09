import { useState } from "react";
import Person from './Person';

function Custom() {

  const [person, setPerson] = useState({ name: "Harry", age: 15 });

  return (
    <div className="container">

      <Person name={person.name} age={person.age} />

      <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
        Increment Age
      </button>
      
      <button onClick={() => setPerson({ ...person, name: 'Ron' })}>
        Update Name
      </button>

    </div>
  );
}

export default Custom;
