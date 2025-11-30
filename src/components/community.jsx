import React from "react";
import instaIcon from "../assets/vector5.png";
const Community = () => {
  return (
    <div className="community py-[6vh] px-[11vw] ">
      <div className="inner flex flex-col items-center">
        <div className="button">
          <button className="bg-[#bc2025] text-sm helvetica px-3.5 py-3 rounded-full text-white">
            Community
          </button>
        </div>
        <div className="heading boldine-semi text-white flex flex-col items-center justify-between pt-7 ">
          <h1 className="text-8xl tracking-tight text-center text-black capitalize">
            Join the
            <span className="text-[#bc2025]"> Pizza Party </span>Online
          </h1>
        </div>
        <div className="blackbutton text-white boldine-semi capitalize pt-8">
          <button className="bg-black py-4 px-7 rounded-lg text-xl tracking-wide flex gap-2.5 items-center justify-center">
            <img className="w-3 h-3.5" src={instaIcon} alt="" />
            <p>Follow Us</p>
          </button>
        </div>
        <div className="imgcontainers pt-13 flex ">
          <div className="images w-[20vw] h-[56vh] bg-[#a4a4a4]  flex justify-center items-center ">
            <img className="h-7 w-7" src={instaIcon} alt="" />
          </div>
          <div className="images w-[20vw] h-[56vh] "></div>
          <div className="images w-[20vw] h-[56vh] "></div>
          <div className="images w-[20vw] h-[56vh] "></div>
        </div>
      </div>
    </div>
  );
};

export default Community;
