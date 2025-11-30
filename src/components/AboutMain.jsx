import React from "react";

const AboutMain = () => {
  return (
    <div className="main py-8 px-12 flex flex-col items-center justify-center">
      <div className=" text-center text-[6vw] heading w-full flex justify-center items-center">
        <h2 className="boldine">
          THE STORY BEHIND <span className="text-red-600">THE DECK</span>
        </h2>
      </div>
      <div className="mainContainer w-[80vw] flex flex-col justify-center items-center helvetiva ">
        <div className="imgContainer flex py-10 ">
          <div className="w-[23vw] h-[45vh] bg-[#9B9B9B] rounded-3xl border-2 border-red-600 rotate-357 "></div>
          <div
            className="w-[23vw] h-[45vh] bg-[#9B9B9B] rounded-2xl border-2 border-red-600 rotate-6"
            z-10
          ></div>
        </div>
        <div className="text-lg w-[95vh] helvetica py-10 scale-50 md:scale-75 xl:scale-100 ">
          <p className="text-center pb-4">
            Created by viral food creator Jennifer Abernathy, the Pizza Party
            Card Deck was inspired by family pizza nights that turned into
            weekly traditions. Jennifer wanted to make it easy for
            anyone—whether you're a seasoned home cook or just love good food—to
            create fun, delicious pizzas without the fuss.
          </p>
          <p className="text-center ">
            Every deck includes hand-crafted pizza recipes that range from
            comforting classics to globally inspired favorites. Pull a card,
            shop for your ingredients, and make pizza night something everyone
            looks forward to.
          </p>
        </div>
        <div className="flex justify-around gap-[5vw] helvetica scale-50 md:scale-75 xl:scale-100">
          <div className="flex flex-col items-center justify-center">
            <p className=" font-bold text-[#BC2025] text-4xl">45</p>{" "}
            <p className="text-[#6b6b6b]">Recipes Created</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className=" font-bold text-[#BC2025] text-4xl">100+</p>{" "}
            <p className="text-[#6b6b6b]">Taste Tests</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="a font-bold text-[#BC2025] text-4xl">∞</p>
            <p className="text-[#6b6b6b]">Family Smiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
