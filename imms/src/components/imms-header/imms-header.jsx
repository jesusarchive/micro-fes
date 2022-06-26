import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../../host/src/utils";

const ImmsHeader = ({}) => {
  const routes = [
    { to: "/", name: "home" },
    { to: "/users", name: "users" },
  ];
  return (
    <div className="w-full flex flex-row items-center border-b-2">
      <h1 className="text-6xl text-bold p-5">IMMS APP</h1>

      <nav className="w-full h-full flex bg-yellow-100 p-5">
        <ul className="w-full flex flex-wrap items-end">
          {routes.map(({ to, name }, i) => (
            <li key={`imms-nav-li--${i}`}>
              <Link
                className={classNames(
                  "h-10 p-2 m-2 border-2 uppercase hover:bg-yellow-300"
                )}
                to={to}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ImmsHeader;
