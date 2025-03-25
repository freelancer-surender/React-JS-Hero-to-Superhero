import React from "react";

const Fetch = () => {
  const fetchData = async () => {
    try {
      let response = await fetch("https://invalid.com/data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={fetchData}>Fetch</button>;
};

export default Fetch;
