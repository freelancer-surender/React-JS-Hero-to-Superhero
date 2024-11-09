import React from 'react';

const Person = React.memo(
  ({ name, age }) => {

    console.log("Person component is re-rendered");

    return (
      <div>
        {name}, {age}
      </div>
    );

  }, (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
  }
);

export default Person;