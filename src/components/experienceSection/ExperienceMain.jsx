/* eslint-disable no-unused-vars */
import React from "react";
import ExperienceText from "./ExperienceText";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Flickaroo",
    type: "Freelance",
    duration: "June 2025 - November 2025",
    location: "Remote",
    description: "Worked on the frontend development of Flickaroo, Australia's next-generation job platform. Initially built with React and TypeScript, then migrated the entire application to Next.js for improved performance and SEO. Implemented API calls using React Query and axios, managed application state with Redux, and ensured data validation using Zod validation library.",
    technologies: ["React", "TypeScript", "Next.js", "React Query", "axios", "Zod", "Redux"],
    website: "https://www.flickaroo.com.au/",
  },
  {
    title: "Frontend Developer",
    company: "Bedsheet Website",
    type: "Freelance",
    duration: "March 2024 - May 2024",
    location: "Remote",
    description: "Built a complete responsive bedsheet e-commerce website for a local client using React and TypeScript. Implemented state management with Context API, handled routing with react-router-dom, and integrated API calls using axios. Ensured full responsiveness across all devices.",
    technologies: ["React", "TypeScript", "react-router-dom", "Context API", "axios", "Tailwind CSS"],
  },
];

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0,
        }}
      >
        <ExperienceText />
      </motion.div>

      <div className="max-w-[900px] mx-auto mt-12 mb-20">
        {experiences.length > 0 ? (
          <div className="flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <SingleExperience
                key={index}
                title={experience.title}
                company={experience.company}
                type={experience.type}
                duration={experience.duration}
                location={experience.location}
                description={experience.description}
                technologies={experience.technologies}
                website={experience.website}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0,
            }}
            className="text-center py-12 px-4 border border-cyan/30 rounded-lg bg-darkGrey/20"
          >
            <p className="text-lightGrey text-lg">
              Experience details will be added here
            </p>
            <p className="text-grey text-sm mt-2">
              Update the experiences array in ExperienceMain.jsx
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceMain;

