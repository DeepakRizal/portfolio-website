/* eslint-disable no-unused-vars */
import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, description, icon: Icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0,
      }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        {description && (
          <p
            className={`text-white text-sm mt-2 mb-3 leading-relaxed sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {description}
          </p>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          } `}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white flex items-center justify-center bg-darkGrey/30">
        {Icon ? (
          <Icon className="text-8xl text-cyan hover:text-orange transition-all duration-500" />
        ) : (
          <>
            <div className="w-full h-full bg-cyan opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block"></div>
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProject;
