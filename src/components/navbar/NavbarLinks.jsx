import React from "react";
import { Link } from "react-scroll";

const links = [
  {
    link: "About me",
    section: "about",
    isExternal: false,
  },
  {
    link: "Skills",
    section: "skills",
    isExternal: false,
  },
  {
    link: "Experience",
    section: "experience",
    isExternal: false,
  },
  {
    link: "Projects",
    section: "projects",
    isExternal: false,
  },
  {
    link: "Resume",
    section: "https://drive.google.com/file/d/1rM1_iCbvdFyCdUA_4KC4pc2QGHd4BBBq/view?usp=sharing",
    isExternal: true,
  },
  {
    link: "Contact",
    section: "contact",
    isExternal: false,
  },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            {link.isExternal ? (
              <a
                href={link.section}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-cyan text-white transition-all duration-500"
              >
                {link.link}
              </a>
            ) : (
              <Link
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-100}
                className="cursor-pointer hover:text-cyan text-white transition-all duration-500"
              >
                {link.link}
              </Link>
            )}
            <div className="mx-auto bg-cyan w-0 h-[1px] group-hover:w-full transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
