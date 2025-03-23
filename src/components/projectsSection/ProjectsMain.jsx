/* eslint-disable no-unused-vars */
import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Notes App",
    year: "2025",
    align: "right",
    image: "/public/images/website-img-1.jpg",
    link: "https://deepakrizal.github.io/Notes-app/",
  },
  {
    name: "Real Estate web app",
    year: "2023",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/DeepakRizal/estate-app",
  },
  {
    name: "Ecommerce product page",
    year: "2024",
    align: "right",
    image: "/images/website-img-4.jpg",
    link: "https://deepakrizal.github.io/Ecommerce-product-page-frontend/",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
