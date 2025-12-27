import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { HiDocumentDownload } from "react-icons/hi";

const ContactMeRight = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1rM1_iCbvdFyCdUA_4KC4pc2QGHd4BBBq/view?usp=sharing";

  const handleResumeDownload = () => {
    window.open(resumeLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/images/email-image.png"
        alt="Contact Me"
        className="max-w-[300px]"
      />
      <button
        onClick={handleResumeDownload}
        className="px-6 py-3 rounded-full text-lg font-bold text-white border-2 border-orange bg-gradient-to-r from-orange to-cyan hover:from-cyan hover:to-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow flex items-center gap-2"
      >
        <HiDocumentDownload className="text-xl" />
        Download Resume
      </button>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
