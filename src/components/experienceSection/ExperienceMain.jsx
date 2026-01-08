/* eslint-disable no-unused-vars */
import React from "react";
import ExperienceText from "./ExperienceText";
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "",
    type: "Freelance",
    duration: "Feb 2025 — Present",
    location: "",
    achievements: [],
    subExperiences: [
      {
        company: "SUN X — Global Research Consulting",
        duration: "Dec 2025 — Jan 2026",
        website: "https://www.sunx.consulting/",
        achievements: [
          "Built a responsive website using <b>HTML, CSS, and JavaScript</b>.",
          "Delivered a properly designed website and logo according to client requirements.",
        ],
      },
      {
        company: "Flickaroo — Job Board Platform",
        duration: "Mar 2025 — Present",
        website: "https://www.flickaroo.com.au/",
        achievements: [
          "Delivered <b>production-ready frontend modules</b> using <b>React, Redux, React Query</b>, and <b>Tailwind CSS</b>.",
          "Implemented <b>high-performance UI</b> features including infinite scrolling and debounced search inputs.",
          "Integrated robust form validation using <b>Zod</b> and <b>React Hook Form</b>.",
        ],
      },
      {
        company: "Koderooo — Business Website",
        duration: "Feb 2025 — Mar 2025",
        website: "https://koderooo.com.au",
        achievements: [
          "Built a responsive website using <b>HTML, CSS, and JavaScript</b> and migrated the project to <b>WordPress</b>.",
          "Ensured layout consistency, responsiveness, and performance during migration.",
        ],
      },
      {
        company: "Beedsheet — Ecommerce Website",
        duration: "Dec 2024 — Feb 2025",
        website: "",
        achievements: [
          "Built a responsive ecommerce frontend using <b>React</b> and <b>Tailwind CSS</b>.",
          "Implemented product search, filtering, and reusable UI components for a client-facing storefront.",
          "Delivered the project as a complete frontend solution for a short-term ecommerce initiative.",
        ],
      },
    ],
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
              <div key={index} className="flex flex-col gap-4">
                {/* Main Experience */}
                <SingleExperience
                  title={experience.title}
                  company={experience.company}
                  type={experience.type}
                  duration={experience.duration}
                  location={experience.location}
                  description={experience.description}
                  technologies={experience.technologies}
                  website={experience.website}
                  achievements={experience.achievements}
                  index={index}
                />
                {/* Sub-Experiences */}
                {experience.subExperiences && experience.subExperiences.length > 0 && (
                  <div className="ml-8 mt-2 flex flex-col gap-6">
                    {experience.subExperiences.map((subExp, subIndex) => (
                      <motion.div
                        key={subIndex}
                        variants={fadeIn("up", 0.2 + (index + subIndex + 1) * 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                          once: false,
                          amount: 0.2,
                        }}
                        className="relative pl-8 pb-4 border-l-2 border-cyan/20"
                      >
                        {/* Smaller timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-3 h-3 bg-cyan/60 rounded-full border-2 border-darkBrown"></div>
                        <div className="flex flex-col gap-2">
                          {/* Company and Duration */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            {subExp.website ? (
                              <a
                                href={subExp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg text-white font-semibold hover:text-cyan transition-all duration-500 cursor-pointer underline-offset-4 hover:underline"
                              >
                                {subExp.company}
                              </a>
                            ) : (
                              <span className="text-lg text-white font-semibold">
                                {subExp.company}
                              </span>
                            )}
                            <p className="text-cyan text-sm font-special">
                              {subExp.duration}
                            </p>
                          </div>
                          {/* Achievements */}
                          {subExp.achievements && subExp.achievements.length > 0 && (
                            <ul className="text-white mt-2 space-y-1.5 list-disc list-inside text-sm">
                              {subExp.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: achievement }}
                                />
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
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

