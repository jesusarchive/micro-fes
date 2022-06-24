import React from "react";

const SgaPortalHeader = ({ auth, onExit }) => {
  return (
    <header className="h-40 w-full p-4 flex justify-around items-center border-2">
      <h1 className="text-5xl font-bold">SGA PORTAL</h1>
      {auth && (
        <div className="w-30 h-30 flex flex-col items-center">
          <button
            className="text-white text-xl m-2 rounded-md p-1 bg-white w-10 h-10"
            onClick={onExit}
          >
            <img
              className="w-5"
              src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default SgaPortalHeader;
