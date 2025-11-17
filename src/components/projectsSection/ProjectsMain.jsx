/* eslint-disable no-unused-vars */
import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiGooglechrome } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

const projects = [
  {
    name: "Ecommerce Product Page",
    year: "2024",
    align: "right",
    image: "/images/website-img-4.jpg",
    link: "https://deepakrizal.github.io/Ecommerce-product-page-frontend/",
    description: "A responsive ecommerce product page built with React, featuring modern UI/UX design and interactive product showcase.",
  },
  {
    name: "Chrome Tabs Time Tracker Extension",
    year: "2025",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/DeepakRizal/chrome-tabs-time-tracker-extension",
    description: "A Chrome extension built with JavaScript and Chrome Extension Storage API. Features React Charts with pie chart visualization to display time spent on each browser tab. Tracks browsing habits and provides insights into tab usage patterns.",
    icon: SiGooglechrome,
  },
  {
    name: "Organise Download Folder",
    year: "2025",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://github.com/DeepakRizal/Organise-download-folder",
    description: "A Node.js CLI tool that automatically organizes your Downloads folder. Categorizes files into Documents, Images, Videos, Music, Archives, Apps, Code, and Fonts, and moves them to structured folders on your D drive. Personal file organization made easy!",
    icon: FaTerminal,
  },
  {
    name: "Notes App",
    year: "2025",
    align: "left",
    image: "/images/website-img-1.jpg",
    link: "https://deepakrizal.github.io/Notes-app/",
  },
  {
    name: "Real Estate web app",
    year: "2023",
    align: "right",
    image: "/images/website-img-2.webp",
    link: "https://github.com/DeepakRizal/estate-app",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0,
        }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              image={item.image}
              align={item.align}
              link={item.link}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
