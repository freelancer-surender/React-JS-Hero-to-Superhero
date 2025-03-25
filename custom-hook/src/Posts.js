import useFetch from "./hooks/useFetch";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

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
      <div className="heading">Posts</div>
      {data?.map((item) => {
        return (
          <div className="item" key={item?.id}>
            <div className="title">{item?.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
