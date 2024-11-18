import React from "react";

const Child = React.memo(({ user }) => {
  console.log("ChildComponent re-rendered");
  return <div>User Name: {user.name}</div>;
});

export default Child;
