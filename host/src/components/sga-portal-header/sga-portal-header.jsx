import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { classNames } from "../../utils";
import SgaPortalButton from "../sga-portal-button";

const routes = [
  { to: "ira-home", name: "ira home" },
  { to: "ira-products", name: "ira products" },
  { to: "gnd-home", name: "gnd home" },
  { to: "gnd-blog", name: "gnd blog" },
  { to: "imms-home", name: "imms home" },
  { to: "imms-users", name: "imms users" },
];

const SgaPortalHeader = ({ auth, onExit }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    onExit();
    navigate("/login");
  };
  return (
    <div
      className={classNames(
        "h-1/6 w-full flex flex-row items-center border-b-2",
        !auth && "justify-center"
      )}
    >
      <Link to="/">
        <h1 className="text-6xl text-bold p-5">HOST APP</h1>
      </Link>

      <div className="w-full h-full bg-red-100 flex items-center">
        <nav className="w-full h-full flex bg-red-100 p-5">
          {auth ? (
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
          ) : null}
        </nav>

        <div className="w-1/6 h-full flex flex-col items-center justify-center p-2 self-end">
          <div
            className={classNames(
              "bg-red-100 text-red-400 text-bold text-xl flex flex-col justify-center items-center p-2",
              auth && "text-green-300"
            )}
          >
            <h2 className="text-black">STATUS:</h2>

            {JSON.stringify({ auth })}
          </div>

          {auth && (
            <SgaPortalButton onClick={handleLogout}>
              <div className="w-20 h-full flex items-center justify-between invert hover:invert-0">
                <span className="text-xs">LOG OFF</span>
                <img
                  className="w-4 saturate-200"
                  src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
                />
              </div>
            </SgaPortalButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default SgaPortalHeader;
