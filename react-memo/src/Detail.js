import React from "react";

const Detail = React.memo(({ firstCount, person }) => {

  console.log("Detail component is re-rendered");

  return (
    <div>
      <h2>First Count: {firstCount}</h2>
    </div>
  );

});

export default Detail;
