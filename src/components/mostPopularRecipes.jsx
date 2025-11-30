import React from "react";
import popularIcon from "../assets/Frame4.png";
import pokkieIcon from "../assets/Vector3.png";
import container from "../assets/container.png";
const MostPopularRecipes = () => {
  return (
    <div className="MostPopularRecipes w-full h-full flex justify-center items-center">
      <div className="main w-[73vw] h-[87vh] rounded-[20px] scale-50 md:scale-75 xl:scale-100 bg-linear-to-r from-[#ff4c00] to-[#410000] flex flex-col justify-center items-center gap-2.5">
        <div className="inner w-[54vw] h-[68vh] flex flex-col items-center gap-2 ">
          <div className="btn flex justify-center items-center">
            <button className="bg-[#ffffff] rounded-full py-2 px-3">
              <div className="iconiText flex gap-2 justify-center items-center">
                <img className="w-5 h-4" src={popularIcon} alt="" />
                <p className="helvetica text-xs text-[#bc2025]">
                  Most Popular Recipes
                </p>
              </div>
            </button>
          </div>
          <div className="heading boldine-semi text-white flex flex-col items-center justify-between ">
            <h1 className="text-[6vw] font-thin text-center">
              FEATURD RECIPIES
            </h1>
            <p className="helvetica">
              These are the recipes families request over and over
            </p>
          </div>
          <div className="imageconatiner flex gap-8 ">
            <div className="imagesdiv w-[18vw] h-[38vh]  rounded-xl bg-white  ">
              <div className="blank bg-linear-to-b from-[#9e9e9e] to-[#00000000] h-2/3 rounded-xl overflow-hidden "></div>
              <div className="content  h-1/3  px-1 lg:px-6   flex flex-col gap-2 items-start">
                <p className="helvetica text-lg  font-bold tracking-tight  text-nowrap  scale-50 md:scale-75 xl:scale-100 text-start ">
                  Loaded Baked Potato Pizza
                </p>
                <div className="buttons text-sm flex items-center gap-3 scale-50 md:scale-75 xl:scale-100 ">
                  <button className="flex justify-center items-center gap-1 bg-[#eaeaea] py-1 px-2 lg:px-0  rounded-full">
                    <img src={pokkieIcon} alt="" className="w-2.5 h-2.5" />
                    <p className="scale-50 md:scale-75 xl:scale-100 text-nowrap ">
                      Recipe Included
                    </p>
                  </button>
                  <button className="text-white bg-[#bc2025] py-1 px-0 lg:px-2  rounded-full scale-50 md:scale-75 xl:scale-100 text-nowrap">
                    20 min
                  </button>
                </div>
                <div className="response">
                  <img className="scale-105" src={container} alt="" />
                </div>
              </div>
            </div>
            <div className="imagesdiv w-[18vw] h-[38vh]  rounded-xl bg-white  ">
              <div className="blank bg-linear-to-b from-[#9e9e9e] to-[#00000000] h-2/3 rounded-xl overflow-hidden "></div>
              <div className="content  h-1/3  px-1 lg:px-6   flex flex-col gap-2 items-start">
                <p className="helvetica text-lg  font-bold tracking-tight  text-nowrap  scale-50 md:scale-75 xl:scale-100 text-start ">
                  Cookies & Cream Pizza
                </p>
                <div className="buttons text-sm flex items-center gap-3 scale-50 md:scale-75 xl:scale-100 ">
                  <button className="flex justify-center items-center gap-1 bg-[#eaeaea] py-1 px-2 lg:px-0  rounded-full">
                    <img src={pokkieIcon} alt="" className="w-2.5 h-2.5" />
                    <p className="scale-50 md:scale-75 xl:scale-100 text-nowrap ">
                      Recipe Included
                    </p>
                  </button>
                  <button className="text-white bg-[#bc2025] py-1 px-0 lg:px-2  rounded-full scale-50 md:scale-75 xl:scale-100 text-nowrap">
                    15 min
                  </button>
                </div>
                <div className="response">
                  <img className="scale-105" src={container} alt="" />
                </div>
              </div>
            </div>
            <div className="imagesdiv w-[18vw] h-[38vh]  rounded-xl bg-white  ">
              <div className="blank bg-linear-to-b from-[#9e9e9e] to-[#00000000] h-2/3 rounded-xl overflow-hidden "></div>
              <div className="content  h-1/3  px-1 lg:px-6   flex flex-col gap-2 items-start">
                <p className="helvetica text-lg  font-bold tracking-tight  text-nowrap  scale-50 md:scale-75 xl:scale-100 text-start ">
                  Mac & Cheese Pizza
                </p>
                <div className="buttons text-sm flex items-center gap-3 scale-50 md:scale-75 xl:scale-100 ">
                  <button className="flex justify-center items-center gap-1 bg-[#eaeaea] py-1 px-2 lg:px-0  rounded-full">
                    <img src={pokkieIcon} alt="" className="w-2.5 h-2.5" />
                    <p className="scale-50 md:scale-75 xl:scale-100 text-nowrap ">
                      Recipe Included
                    </p>
                  </button>
                  <button className="text-white bg-[#bc2025] py-1 px-0 lg:px-2  rounded-full scale-50 md:scale-75 xl:scale-100 text-nowrap">
                    20 min
                  </button>
                </div>
                <div className="response">
                  <img className="scale-105" src={container} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button className="px-3 py-2 border text-white rounded-lg boldine-semi text-xl">
            PRE-ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MostPopularRecipes;
