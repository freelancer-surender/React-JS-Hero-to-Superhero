import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchData = async () => {
    console.log("Getting data from server");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  const update = () => {
    setIsUpdated(true);
  }

  useEffect(() => {
    fetchData();
  }, [isUpdated]);

  return (
    <div>
      <div className="heading">Users</div>
      {users?.map((user) => (
        <div key={user.id} className="user">
          {user.name}
        </div>
      ))}
      <div><button onClick={update}>Refresh</button></div>
    </div>
  );
}

export default App;
