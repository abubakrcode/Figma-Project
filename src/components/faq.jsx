import React from "react";
import crossIcon from "../assets/vector90.png";
const Faq = () => {
  return (
    <div className="faq px-[11vw] py-[5vh] flex flex-col gap-16">
      <div className="heading boldine-semi text-white    ">
        <h1 className="text-8xl   text-black capitalize">
          Frequently
          <span className="text-[#bc2025]"> Asked Questions </span>
        </h1>
      </div>
      <div className="questions flex flex-col gap-9">
        <div className="question1  flex justify-between border-b border-black">
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="helvetica text-2xl">
              Do I need a pizza oven to make these recipes?
            </h3>
            <p>Nope! Every recipe is designed for a standard home oven.</p>
          </div>
          <div className="icon">
            <img src={crossIcon} alt="" />
          </div>
        </div>
        <div className="question2 flex justify-between border-b border-black">
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="helvetica text-2xl">
              Are the ingredients easy to find?
            </h3>
          </div>
          <div className="icon">
            <img className="rotate-45" src={crossIcon} alt="" />
          </div>
        </div>
        <div className="question3 flex justify-between border-b border-black">
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="helvetica text-2xl">
              Is this deck family-friendly?
            </h3>
          </div>
          <div className="icon">
            <img className="rotate-45" src={crossIcon} alt="" />
          </div>
        </div>
        <div className="question4 flex justify-between border-b border-black">
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="helvetica text-2xl">Can I give this as a gift?</h3>
          </div>
          <div className="icon">
            <img className="rotate-45" src={crossIcon} alt="" />
          </div>
        </div>
        <div className="question5 flex justify-between border-b border-black">
          <div className="flex flex-col gap-5 pb-8">
            <h3 className="helvetica text-2xl">
              What if I’m not a confident cook?
            </h3>
          </div>
          <div className="icon">
            <img className="rotate-45" src={crossIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
