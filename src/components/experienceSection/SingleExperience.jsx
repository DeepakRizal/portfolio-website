/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({
  title,
  company,
  type,
  duration,
  location,
  description,
  technologies,
  website,
  achievements,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      className="relative pl-8 pb-8 border-l-2 border-cyan/30 hover:border-cyan transition-all duration-500 group"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan rounded-full border-2 border-darkBrown group-hover:scale-125 transition-all duration-500"></div>

      <div className="flex flex-col gap-2">
        {/* Title and Type */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-2xl md:text-3xl text-orange font-bold">
            {title}
          </h3>
          {type && (
            <span className="text-sm px-3 py-1 bg-cyan/20 text-cyan rounded-full border border-cyan/50 w-fit">
              {type}
            </span>
          )}
        </div>

        {/* Company and Location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lightGrey">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white font-semibold hover:text-cyan transition-all duration-500 cursor-pointer underline-offset-4 hover:underline"
            >
              {company}
            </a>
          ) : (
            <span className="text-lg text-white font-semibold">{company}</span>
          )}
          {location && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{location}</span>
            </>
          )}
        </div>

        {/* Duration */}
        {duration && (
          <p className="text-cyan text-sm font-special">{duration}</p>
        )}

        {/* Description */}
        {description && (
          <p className="text-white mt-2 leading-relaxed">{description}</p>
        )}

        {/* Achievements/Bullet Points */}
        {achievements && achievements.length > 0 && (
          <ul className="text-white mt-3 space-y-2 list-disc list-inside">
            {achievements.map((achievement, achIndex) => (
              <li
                key={achIndex}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: achievement }}
              />
            ))}
          </ul>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 bg-darkGrey text-lightCyan rounded border border-cyan/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SingleExperience;

