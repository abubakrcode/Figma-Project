import React from "react";
import shoppingBagLogo from "../assets/shopping bag.svg";
const Navbar = () => {
  return (
    <div className="navbar text-nowrap w-full flex justify-center items-center helvetica ">
      <nav className=" h-[11.3vh] w-[85vw] bg-black rounded-xl my-3 flex items-center justify-center ">
        <ul className="pl-100 text-white  flex justify-between">
          <div className="group1 flex justify-center items-center gap-5 opacity-60">
            <li>Home</li>
            <li>About</li>
            <li>What’s Inside</li>
            <li>How It Works</li>
            <li>FAQ</li>
          </div>
          <li className=" pl-100 right-0 flex flex-col items-end p-0 justify-center">
            <div className="notification h-6 w-6 absolute ">
              <span className="bg-[#ffcc25] mt-[-17px] mx-[7px] font-bold text-sm h-full w-full rounded-full flex justify-center items-center text-black">
                2
              </span>
            </div>
            <img src={shoppingBagLogo} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
