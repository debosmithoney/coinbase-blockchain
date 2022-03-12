import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../assets/codeAssets/static/coins";
const Portfolio = () => {
  return (
    <div className="wrapper flex flex-1 justify-center ">
      <div className="content w-full max-w-5xl  px-6 py-4 ">
        <div className="portfolioTable mt-3 border border-gray-500 text-white">
          <div className="tableitem py-3 px-5">
            <div className="title text-2xl font-bold mb-4">Your Assests</div>
            <div className="border-b border-gray-500 " />
            <div className="w-full">
              <div className="tableitem py-3 px-5">
                <div className="tablerow w-full flex justify-between">
                  <h1 style={{ flex: 3 }}>Name</h1>
                  <h1 style={{ flex: 2 }}>Price</h1>
                  <h1 style={{ flex: 2 }}>Change</h1>
                  <h1 style={{ flex: 1 }}>Trade</h1>
                  <div style={{ flex: 0 }}>
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className=" mt-3 border-b border-gray-500 " />
              </div>
            </div>
            <div>
              {coins.map((coin) => (
                <>
                  <h1>{coin.name}</h1>
                  <div className=" mt-3 border-b border-gray-500 " />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
