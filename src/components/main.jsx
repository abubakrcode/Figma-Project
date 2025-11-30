import React from "react";
import arrowIcon from "../assets/Vector.png";

const Main = () => {
  return (
    <div className="container text-nowrap">
      <div className="Main flex flex-col justify-center items-center w-full h-[27vh] text-white boldine-semi  ">
        <div className="heading">
          <h2 className=" text-[6vw] font-thin ">SHUFFLE. PICK. BAKE. PIZZA</h2>
          <h2 className=" text-[6vw]  text-center  ">
            NIGHT JUST GOT FUN AGAIN.
          </h2>
        </div>
      </div>
      <div className="paragraph scale-50 md:scale-100 flex flex-col justify-center items-center helvetica  text-gray-300   ">
        <p>
          The Pizza Party Card Deck turns dinner into a game. With more then 40
          fun and flavourful pizza recipes, each
        </p>
        <p>
          card is a new pizza adveture for families, friends, or cuzy nights in.
        </p>
      </div>
      <div className="icon md:pt-[8.1vh] pt-[4vh] flex">
        <div className="w-[66vw]  "></div>
        <img className="scale-50 md:scale-100" src={arrowIcon} alt="" />
      </div>
      <div className="flex">
        <div className="w-[70vw]"></div>
        <div className="card w-80 h-42 bg-[#ffda00] rounded-xl scale-50 md:scale-100 md:mt-[5.4vh] mt-[2vh] py-4 px-2">
          <div className="inline p-1 heading helvetica text-sm  border border-black rounded-xl ">
            <span className=" font-bold  ">Ships Mid-December . </span>
            <span> Limited First Edition</span>
          </div>
          <div className="boldine-semi text-4xl p-1">20.99$</div>
          <button className="btn bg-black px-2 py-3 text-white boldine font-thin tracking-wide text-xl rounded-xl w-40">
            PRE-ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
