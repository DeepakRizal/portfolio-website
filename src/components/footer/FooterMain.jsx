import React from "react";

const links = [
  {
    link: "About me",
    section: "about",
  },
  {
    link: "Skills",
    section: "skills",
  },
  {
    link: "Projects",
    section: "projects",
  },
  {
    link: "Contact",
    section: "contact",
  },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[2px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl">Deepak Rizal</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className="hover:text-white transition-all duration-500"
                  href="#"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Abdelrahman | All Rights Reserved
      </p>
    </div>
  );
};

export default FooterMain;
