import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-[calc(100%-3rem)] p-4 border-b-2 border-gray-600  flex items-center">
        <div className="title text-white flex-1 text-2xl font-extrabold ">
          CrypLet
        </div>
        <div className="flex ">
          <button className=" border border-black hover:border-white hover:border transition-all duration-200 px-3 py-2 text-xl rounded-lg m-2 hover:cursor-pointer active:bg-blue-400 bg-blue-700 hover:bg-black text-white">
            Buy / Sell
          </button>
          <button className=" border border-black hover:border-white active:bg-blue-400 px-3 text-xl rounded-lg m-2 hover:cursor-pointer transition-all duration-200 text-white">
            Send / Receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
