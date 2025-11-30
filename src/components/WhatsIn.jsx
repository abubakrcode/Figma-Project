import React from "react";
import pizzaIcon from "../assets/frame.png";
import tickIcon from "../assets/Vector2.png";
import tipsIcon from "../assets/frame2.png";
import bookIcon from "../assets/Group.png";
import ingredientsIcon from "../assets/Group1.png";
const WhatsIn = () => {
  return (
    <div className="main flex  justify-center items-center">
      <div className=" flex inner h-[90vh] w-[90vw] ">
        <div className="w-1/2 h-full "></div>
        <div className="w-1/2 h-full p-[10vh]">
          <div className="btn">
            <button className="flex gap-1 items-center text-white bg-[#BC2025] p-2 rounded-3xl">
              <img
                className="w-4 h-4 rotate-270 invert"
                src={pizzaIcon}
                alt=""
              />{" "}
              What’s Inside
            </button>
          </div>
          <div className="heading boldine-semi ">
            <h1 className="text-[6vw] font-thin leading-none ">
              EACH <span className="text-[#bc2025]">DESK</span> <br /> INCLUDES
            </h1>
          </div>
          <div className="tags flex flex-col gap-4 scale-50 md:scale-75 xl:scale-100">
            <div className="tag1 border border-[#00000020] w-[36vw] h-[12vh] rounded-xl flex items-center justify-between p-4">
              <div className="iconicText flex justify-center items-center gap-4">
                <img src={pizzaIcon} alt="" />{" "}
                <p className="helvetica text-[1.25vw] ">
                  45 unique pizza recipes <br />
                  (including 5 desserts)
                </p>
              </div>
              <div className="icon w-7 h-7 rounded-full bg-[#bc2025] flex justify-center items-center">
                <img src={tickIcon} alt="" />
              </div>
            </div>
            <div className="tag2 border border-[#00000020] w-[36vw] h-[12vh] rounded-xl flex items-center justify-between p-4">
              <div className="iconicText flex justify-center items-center gap-4">
                <img src={tipsIcon} alt="" />{" "}
                <p className="helvetica text-[1.25vw]">
                  Tips, tricks, and Notes sections for
                  <br />
                  perfect results every time
                </p>
              </div>
              <div className="icon w-7 h-7 rounded-full bg-[#bc2025] flex justify-center items-center">
                <img src={tickIcon} alt="" />
              </div>
            </div>
            <div className="tag3 border border-[#00000020] w-[36vw] h-[12vh] rounded-xl flex items-center justify-between p-4">
              <div className="iconicText flex justify-center items-center gap-4">
                <img src={bookIcon} alt="" />{" "}
                <p className="helvetica text-[1.25vw]">
                  Easy-to-follow steps and
                  <br />
                  simple ingredients
                </p>
              </div>
              <div className="icon w-7 h-7 rounded-full bg-[#bc2025] flex justify-center items-center">
                <img src={tickIcon} alt="" />
              </div>
            </div>
            <div className="tag4 border border-[#00000020] w-[36vw] h-[12vh] rounded-xl flex items-center justify-between p-4">
              <div className="iconicText flex justify-center items-center gap-4">
                <img src={ingredientsIcon} alt="" />{" "}
                <p className="helvetica text-[1.25vw]">
                  Endless ways to customize your
                  <br />
                  pizza night
                </p>
              </div>
              <div className="icon w-7 h-7 rounded-full bg-[#bc2025] flex justify-center items-center">
                <img src={tickIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIn;
