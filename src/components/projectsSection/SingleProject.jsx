import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <div
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
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          } `}
        >
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SingleProject;
