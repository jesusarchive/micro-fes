import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../../host/src/utils";

const IraHeader = ({}) => {
  const routes = [
    { to: "/", name: "home" },
    { to: "/products", name: "products" },
  ];
  return (
    <div className="w-full flex flex-row items-center border-b-2">
      <h1 className="text-6xl text-bold p-5">IRA APP</h1>

      <nav className="w-full h-full flex bg-green-100 p-5">
        <ul className="w-full flex flex-wrap items-end">
          {routes.map(({ to, name }) => (
            <li>
              <Link
                className={classNames(
                  "h-10 p-2 m-2 border-2 uppercase hover:bg-green-300"
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

export default IraHeader;
