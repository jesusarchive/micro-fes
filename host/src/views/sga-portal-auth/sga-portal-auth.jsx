import React from "react";

const SgaPortalAuth = ({ onAuth }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-black">
      <div className="h-96 w-3/6 border-2 flex flex-col justify-around p-3">
        <h1 className="text-xl text-bold p-2">LOGIN</h1>
        <form className="flex flex-col p-2" action="">
          <input className="border-2 p-2" type="text" placeholder="User" />
          <input
            className="border-2 p-2 mt-2"
            type="password"
            placeholder="Password"
          />
          <button
            className="text-red-200 bg-black p-2 mt-5"
            type="submit"
            onClick={onAuth}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default SgaPortalAuth;
