import React from "react";
import questionIcon from "../assets/grou.png";
import starIcon from "../assets/frame5.png";
import clockIcon from "../assets/group3.png";
const HowWorks = () => {
  return (
    <div className="HowWorks px-[11vw] py-[6vh] flex flex-col gap-16">
      <div className="heading boldine-semi text-white flex flex-col items-center justify-between ">
        <h1 className="text-[6vw] font-thin text-center text-black capitalize">
          How It <span className="text-[#bc2025]">Works</span>
        </h1>
      </div>
      <div className="cards flex justify-between ">
        <div className="card1 w-[23vw] border h-[60vh] rounded-xl overflow-hidden">
          <div className="cardContent1 h-2/3 bg-[#ffdd20] "></div>
          <div className="helvetica cardContent2 h-1/3 bg-[#bc2025]  flex flex-col justify-between gap-4  pb-2 items-center relative">
            <div className="btns absolute -top-5">
              <button className="bg-[#ffdd20] text-black w-15 h-15 rounded-full boldine text-3xl  ">
                1
              </button>
            </div>
            <button className=" text-black w-15 h-15 rounded-full boldine font-bold text-xl "></button>
            <div className="text px-6 flex justify-center items-center">
              <p className="text-white  text-xl ">Shuffle the deck</p>
            </div>
            <div className="btn flex justify-center items-center ">
              <button className="flex justify-center items-center text-white gap-1 border border-[#ffffff30] py-1 px-2 rounded-full">
                <img src={questionIcon} alt="" /> <p>5 seconds!</p>
              </button>
            </div>
          </div>
        </div>
        <div className="card2 w-[23vw] border h-[60vh] rounded-xl overflow-hidden">
          <div className="cardContent1 h-2/3 bg-[#ffdd20] "></div>
          <div className="helvetica cardContent2 h-1/3 bg-[#bc2025]  flex flex-col justify-between gap-4  pb-2 items-center relative">
            <div className="btns absolute -top-5">
              <button className="bg-[#ffdd20] text-black w-15 h-15 rounded-full boldine text-3xl  ">
                2
              </button>
            </div>
            <button className=" text-black w-15 h-15 rounded-full boldine font-bold text-xl "></button>
            <div className="text px-6 flex justify-center items-center">
              <p className="text-white text-xl flex items-center justify-center ">
                Pick a card (or let everyone
                <br />
                pick their favorite).
              </p>
            </div>
            <div className="btn flex justify-center items-center ">
              <button className="flex justify-center items-center text-white gap-1 border border-[#ffffff30] py-1 px-2 rounded-full">
                <img src={starIcon} alt="" /> <p>Everyone decides!</p>
              </button>
            </div>
          </div>
        </div>
        <div className="card3 w-[23vw] border h-[60vh] rounded-xl overflow-hidden">
          <div className="cardContent1 h-2/3 bg-[#ffdd20] "></div>
          <div className="helvetica cardContent2 h-1/3 bg-[#bc2025]  flex flex-col justify-between gap-4  pb-2 items-center relative">
            <div className="btns absolute -top-5">
              <button className="bg-[#ffdd20] text-black w-15 h-15 rounded-full boldine  text-3xl  ">
                3
              </button>
            </div>
            <button className=" text-black w-15 h-15 rounded-full boldine font-bold text-xl "></button>
            <div className="text px-6 flex justify-center items-center">
              <p className="text-white  text-xl ">
                Bake your pizza and enjoy a fun, interactive meal!
              </p>
            </div>
            <div className="btn flex justify-center items-center ">
              <button className="flex justify-center items-center text-white gap-1 border border-[#ffffff30] py-1 px-2 rounded-full">
                <img src={clockIcon} alt="" /> <p>~15 minutes</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
