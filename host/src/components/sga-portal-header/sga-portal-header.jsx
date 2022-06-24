import React from "react";

const SgaPortalHeader = ({ auth, onExit }) => {
  return (
    <header className="h-1/7 w-full p-4 flex justify-between items-center border border-2">
      <h1 className="text-5xl font-bold">SGA PORTAL</h1>
      {auth && (
        <div className="w-30 h-30 flex flex-row items-center">
          <div className="h-20 w-20 flex justify-center items-center">
            <img
              className="h-full w-full rounded-full"
              src="https://c.tenor.com/vjiifjWIHs4AAAAM/pingu-penguin.gif"
              alt="pingu"
            />
          </div>
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
      )}
    </header>
  );
};

export default SgaPortalHeader;
