import React from "react";
import { classNames } from "../../../../host/src/utils";

const ImmsHeader = ({ selectedView, onViewChange }) => {
  return (
    <div className="h-50 w-full flex flex-row items-center border-b-2">
      <h1 className="text-6xl text-bold p-5">IMMS APP</h1>
      <div className="h-full w-full flex p-2 bg-red-100 items-end">
        <button
          className={classNames(
            "h-10 p-2 m-2 border-2 uppercase hover:bg-red-300",
            selectedView === "home" && "bg-red-200"
          )}
          onClick={() => onViewChange("home")}
        >
          home
        </button>
      </div>
    </div>
  );
};

export default ImmsHeader;
