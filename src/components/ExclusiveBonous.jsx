import React from "react";
import bagIcon from "../assets/vector6.png";
import noteIcon from "../assets/vector7.png";
import pizzaIcon from "../assets/Frame.png";
import notesIcon from "../assets/Frame2.png";
import arrowIcon from "../assets/arrow.png";
const ExclusiveBonous = () => {
  return (
    <div className="ExclusiveBonous px-[11.5vw] py-[14vh]">
      <div className="inner flex flex-col items-center">
        <div className="button">
          <button className="bg-[#bc2025] text-sm helvetica px-3.5 py-3 rounded-full text-white">
            Preorder Offer
          </button>
        </div>
        <div className="heading boldine-semi text-white flex flex-col items-center justify-between ">
          <h1 className="text-8xl font-thin text-center text-black capitalize">
            Save Big & Get an
            <span className="text-[#bc2025]"> Exclusive Bonus</span>
          </h1>
        </div>
        <div className="box h-[33vh] w-full bg-[#ffdd20] py-7 px-4 rounded-2xl flex flex-col items-center mb-21 ">
          <div className="text helvetica"> Limited Preorder Price</div>
          <div className="prices flex">
            <div className="price1 boldine-semi text-[5vw]">$20.99</div>
            <div className="price2 flex flex-col items-center justify-center gap-2 px-2">
              <p className=" text-sm ">Regular price </p>
              <p className=" helvetica text-2xl text-[#494949]">$24.99</p>
            </div>
          </div>
          <div className="buttons py-3 h-full  border-t border-[#e55b0030] flex justify-center items-center gap-4 ">
            <buttons className="btn1 flex px-4 py-2.5 gap-3 justify-center items-center bg-[#e55b0012] rounded-full">
              <img className="w-4 h-4" src={bagIcon} alt="" />
              <p>Ships Mid-December</p>
            </buttons>
            <buttons className="btn2 flex px-4 py-2.5 gap-3 justify-center items-center bg-[#e55b0012] rounded-full">
              <img className="w-4 h-4" src={noteIcon} alt="" />
              <p>Perfect for Holidays!</p>
            </buttons>
          </div>
        </div>
        <div className="box2 h-[51vh] w-full border border-[#ffdd20] flex">
          <div className="section1 w-1/2">
            <div className="heading boldine-semi text-black flex flex-col  justify-between ">
              <h1 className="text-6xl font-thin  capitalize">
                The<span className="text-[#bc2025]"> Mini Naan Pizza </span>
                Night Planner
              </h1>
              <p className="helvetica text-lg">
                This downloadable PDF includes everything you need to prep for
                your first Pizza Party night:
              </p>
            </div>
            <div className="buttons flex py-9 helvetica text-xl gap-6">
              <button className="flex 1 p-3 rounded-xl border border-[#00000020]">
                <img src={pizzaIcon} alt="" />
                <p>Shopping List</p>
              </button>
              <button className="flex 2 p-3 rounded-xl border border-[#00000020]">
                <img className="" src={notesIcon} alt="" />
                <p>3 Sample Recipes</p>
              </button>
            </div>
            <div className="blackbutton text-white boldine-semi capitalize">
              <button className="bg-black py-4 px-7 rounded-lg text-xl tracking-wide flex gap-2.5 items-center justify-center">
                <p>Preorder Now and Get the Bonus Planner!</p>
                <img className="w-3 h-3.5" src={arrowIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="section2 w-1/2 ">
            <div className="imgcontainer pl-20 h-full w-full">
              <div className="image bg-[#ffdd20] rounded-xl h-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBonous;
