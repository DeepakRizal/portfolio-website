/* eslint-disable no-unused-vars */
import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0,
      }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/images/profile_img.png"
        alt=""
        className="max-h-[350px] w-auto"
      />
      <div className="absolute -z-10 flex items-center justify-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
