import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link={"#"} Icon={FiGithub} />
      <SingleContactSocial link={"#"} Icon={FiTwitter} />
    </div>
  );
};

export default ContactSocial;
