import React, { useEffect, useState } from "react";

const mockPostEndpoint = "https://dummyjson.com/users";

async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

const ImmsUsers = ({}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(mockPostEndpoint);
      console.log(data?.users);
      setUsers(data?.users);
    })();
  }, []);

  return (
    <div className="h-full w-full flex flex-col text-3xl text-blue-700 p-4 bg-white overflow-hidden">
      <h2 className="text-3xl text-blue-700 p-8 mb-5">IMMS USERS</h2>
      {Array.isArray(users) && users.length > 0 ? (
        <div className="flex overflow-auto">
          <table className="h-5/6 w-full table-auto">
            <thead>
              <tr>
                {Object.keys(users[0]).map((key, i) => (
                  <th
                    className="bg-pink-100 text-blue-600 capitalize p-2 text-sm border"
                    key={`gnd-users__th--${i}`}
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={`gnd-users__tr--${i}`}>
                  {Object.values({ ...user, password: "*********" }).map(
                    (value, i) => (
                      <td
                        className="bg-pink-100 text-black capitalize text-center p-1 hover:bg-yellow-100 text-sm border"
                        key={`gnd-users__td--${i}`}
                      >
                        {Array.isArray(value) ? (
                          value.length > 0 && (
                            <div className="h-30 w-30 flex inline-flex items-center overflow-scroll">
                              {value.map(
                                (v) =>
                                  v.includes("http") && (
                                    <img className="h-10" src={v} />
                                  )
                              )}
                            </div>
                          )
                        ) : value?.includes?.("http") ? (
                          <img className="h-10" src={value} />
                        ) : typeof value === "string" ? (
                          value
                        ) : (
                          JSON.stringify(value)
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>NO DATA</>
      )}
    </div>
  );
};

export default ImmsUsers;
