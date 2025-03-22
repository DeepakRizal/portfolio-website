import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradiant from "./HeroGradiant";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex sm:flex-col md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
