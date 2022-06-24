import React from "react";

const mockPostEndpoint = "https://dummyjson.com/users";

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

const ImmsUsers = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(mockPostEndpoint);
      console.log(data?.posts);
      setPosts(data?.posts);
    })();
  }, []);
  return (
    <div className="container">
      {users.map((user) => (
        <div>{JSON.stringify(user)}</div>
      ))}
    </div>
  );
};

export default ImmsUsers;
