import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils";

const routes = [
  { to: "ira-home", name: "ira home" },
  { to: "ira-products", name: "ira products" },
  { to: "gnd-home", name: "gnd home" },
  { to: "gnd-blog", name: "gnd blog" },
  { to: "imms-home", name: "imms home" },
  { to: "imms-users", name: "imms users" },
];

const SgaPortalHeader = ({ auth, onExit }) => {
  return (
    <div
      className={classNames(
        "h-1/6 w-full flex flex-row items-center border-b-2"
      )}
    >
      <h1 className="text-6xl text-bold p-5">HOST APP</h1>
      <>{auth ? "AUTH" : "NO AUTH"}</>
      {auth && (
        <div className="h-full w-full flex p-2 bg-red-100 items-end justify-around">
          <div className="w-full flex intems-center justify-between">
            <nav className="w-full h-full flex bg-red-100 p-5">
              <ul className="w-full flex flex-wrap items-end">
                {routes.map(({ to, name }, i) => (
                  <li key={`imms-nav-li--${i}`}>
                    <Link
                      className={classNames(
                        "h-10 p-2 m-2 border-2 uppercase hover:bg-red-300"
                      )}
                      to={to}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="text-xl m-2 rounded-md p-1 bg-white w-30 h-10 flex text-black text-sm items-center justify-around hover:bg-red-400 hover:text-white"
              onClick={onExit}
            >
              <span className="text-sm">LOG OFF</span>
              <img
                className="w-5"
                src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SgaPortalHeader;
