import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m a passionate software developer dedicated to building efficient and
        user-friendly web applications. I enjoy turning ideas into functional,
        clean, and scalable solutions. Constantly learning and evolving, I
        strive to write quality code and create meaningful projects.
      </p>
      <Link
        to="projects"
        smooth={true}
        spy={true}
        duration={500}
        offset={-100}
        className="border border-orange rounded-full py-2 px-4 text-lg items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
