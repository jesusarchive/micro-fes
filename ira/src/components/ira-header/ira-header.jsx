import React from "react";
import { classNames } from "../../../../host/src/utils";

const IraHeader = ({ selectedView, onViewChange }) => {
  return (
    <div className="h-50 w-full flex flex-row items-center border-b-2">
      <h1 className="text-6xl text-bold p-5">IRA APP</h1>
      <div className="h-full w-full flex p-2 bg-green-100 items-end">
        <button
          className={classNames(
            "h-10 p-2 m-2 border-2 uppercase hover:bg-green-300",
            selectedView === "home" && "bg-green-200"
          )}
          onClick={() => onViewChange("home")}
        >
          home
        </button>
        <button
          className={classNames(
            "h-10 p-2 m-2 border-2 uppercase hover:bg-green-300",
            selectedView === "products" && "bg-green-200"
          )}
          onClick={() => onViewChange("products")}
        >
          products
        </button>
      </div>
    </div>
  );
};

export default IraHeader;
