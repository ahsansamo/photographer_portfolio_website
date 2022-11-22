import React, { useContext } from "react";

import { ImFacebook, ImLinkedin, ImInstagram } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/ahsan.ali5643/" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ahsan-ali6/" target="_blank">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ahsanali5643/" target="_blank">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
