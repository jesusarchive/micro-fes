import React from "react";
import { classNames } from "../../../../host/src/utils";

const GndHeader = ({ selectedView, onViewChange }) => {
  return (
    <div className="h-50 w-full flex flex-row items-center border-b-2">
      <h1 className="text-6xl text-bold p-5">GND APP</h1>
      <div className="h-full w-full flex p-2 bg-blue-100 items-end">
        <button
          className={classNames(
            "h-10 p-2 m-2 border-2 uppercase hover:bg-blue-300",
            selectedView === "home" && "bg-blue-200"
          )}
          onClick={() => onViewChange("home")}
        >
          home
        </button>
        <button
          className={classNames(
            "h-10 p-2 m-2 border-2 uppercase hover:bg-blue-300",
            selectedView === "blog" && "bg-blue-200"
          )}
          onClick={() => onViewChange("blog")}
        >
          blog
        </button>
      </div>
    </div>
  );
};

export default GndHeader;
