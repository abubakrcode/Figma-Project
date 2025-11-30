import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import AboutMain from "./components/AboutMain";
import WhatsIn from "./components/WhatsIn";
import MostPopularRecipes from "./components/mostPopularRecipes";
import HowWorks from "./components/HowWorks";
import ExclusiveBonous from "./components/ExclusiveBonous";
import Community from "./components/community";
import Faq from "./components/faq";
import Waitlist from "./components/Waitlist";
function App() {
  return (
    <>
      <div className="HomePage h-screen w-screen bg-[#bc2025]">
        <Navbar />
        <Main />
      </div>
      <div className="AboutPage min-h-screen w-screen bg-white">
        <AboutMain />
      </div>
      <div className="whatsInside h-screen w-screen bg-[#fff7ea]">
        <WhatsIn />
      </div>
      <div className="whatsInside h-screen w-screen bg-[#ffffff]">
        <MostPopularRecipes />
      </div>
      <div className="whatsInside h-screen w-screen bg-[#ffffff]">
        <HowWorks />
      </div>
      <div className="whatsInside min-h-screen w-screen bg-[#fff7e9]">
        <ExclusiveBonous />
      </div>
      <div className="whatsInside h-screen w-screen bg-[#ffffff]">
        <Community />
      </div>
      <div className="whatsInside h-screen w-screen bg-[#ffffff]">
        <Faq />
      </div>
      <div className="whatsInside h-screen w-screen">
        <Waitlist />
      </div>
    </>
  );
}

export default App;
