import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link={"https://github.com/DeepakRizal"}
        Icon={FiGithub}
      />
      <SingleContactSocial
        link={"https://x.com/DeepakRiza1"}
        Icon={FiTwitter}
      />
    </div>
  );
};

export default ContactSocial;
