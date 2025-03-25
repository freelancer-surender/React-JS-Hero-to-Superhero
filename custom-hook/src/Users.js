import useFetch from "./hooks/useFetch";

const Users = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useFetch(url);

  if (error)
    return (
      <div className="error">
        <p>Error: {error.message}</p>
      </div>
    );

  if (loading)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="items">
      <div className="heading">Users</div>
      {data?.map((item) => {
        return (
          <div className="item" key={item?.id}>
            <div className="name">{item?.name}</div>
            <div className="email">{item?.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
