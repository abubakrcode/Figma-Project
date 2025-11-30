import React from "react";
import facebook from "../assets/Facebook.png";
import tiktok from "../assets/TikTok.png";
import insta from "../assets/instagram.png";
const Waitlist = () => {
  return (
    <div className="Waitlist h-[60vh] w-full bg-[#bc2025] px-[11vw] py-[7vh]">
      <div className="box h-[33vh] w-full bg-[#ffdd20] py-7 px-4 rounded-2xl flex flex-col   ">
        <div className="heading boldine-semi     ">
          <h1 className="text-7xl   text-black capitalize pb-2">
            Join the Waitlist
          </h1>
          <p className="helvetica text-lg ">
            Be the first to know when we launch! Join the waitlist for launch{" "}
            <br />
            updates (and maybe a sneak peek at a fan-favorite recipe).
          </p>
        </div>
        <div className="email pt-3">
          <div className="dialouge w-[35vw] h-[7vh] bg-white p-2 pl-5 rounded-xl flex items-center justify-between ">
            <p className=" helvetica text-[#a3a3a3]">Email</p>
            <button className="bg-black px-4 py-1  text-lg tracking-widest text-white boldine-semi">
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>
      <div className="box h-[33vh] w-full  py-7 px-4 rounded-2xl flex text-[#ffffff80]">
        <div className="box1 w-1/2"></div>
        <div className="box2 w-1/2 flex">
          <div className="cont flex flex-col gap-2 w-1/2">
            <h3 className="text-xl text-white">Quick Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>What’s Inside</p>
          </div>
          <div className="cont flex flex-col gap-2 w-1/2">
            <h3 className="text-xl text-white pb-6">Social Media</h3>
            <div className="icons flex gap-7">
              <img src={facebook} alt="" />
              <img src={tiktok} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
