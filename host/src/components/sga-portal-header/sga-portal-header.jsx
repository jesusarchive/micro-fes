import React from "react";
import { classNames } from "../../utils";

const appsViewsMock = [
  { id: "ira-home", name: "ira home" },
  { id: "ira-products", name: "ira products" },
  { id: "gnd-home", name: "gnd home" },
  { id: "gnd-blog", name: "gnd blog" },
  { id: "imms-home", name: "imms home" },
  { id: "imms-users", name: "imms users" },
];

const SgaPortalHeader = ({ auth, selectedView, onViewChange, onExit }) => {
  return (
    <div
      className={classNames(
        "h-50 w-full flex flex-row items-center border-b-2"
      )}
    >
      <h1 className="text-6xl text-bold p-5">HOST APP</h1>
      {auth && (
        <div className="h-full w-full flex p-2 bg-red-100 items-end justify-around">
          <div className="w-full flex intems-center justify-between">
            <nav>
              {appsViewsMock.map(({ id, name }) => (
                <button
                  className={classNames(
                    "h-10 p-2 m-2 border-2 uppercase hover:bg-red-300",
                    selectedView === id && "bg-red-200"
                  )}
                  onClick={() => onViewChange(id)}
                >
                  {name}
                </button>
              ))}
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
