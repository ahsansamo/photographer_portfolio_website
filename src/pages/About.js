import React, { useContext } from "react";

import WomanImg from "../img/about/woman.png";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";


const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
          className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur commodi quas temporibus assumenda magni
            </p>
            <Link to={"/portfolio"} className="btn">
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
