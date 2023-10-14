import React from "react";
import { motion } from "framer-motion";
import Astronaut from "../assets/AstronautImg.png";

const Progress = {
  1: "w-1/12",
  2: "w-2/12",
  3: "w-3/12",
  4: "w-4/12",
  5: "w-5/12",
  6: "w-6/12",
  7: "w-7/12",
  8: "w-8/12",
  9: "w-9/12",
  10: "w-10/12",
  11: "w-11/12",
  12: "w-full",
};

const ProgressBar = ({ step }) => {
  return (
    <div className=" w-full bg-white h-1 rounded-full">
      <motion.div
        layout
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={` rounded-full  bg-primary-purple ${
          Progress[step + 1]
        } w- h-1`}
      ></motion.div>
      <motion.div
        layout
        animate={{rotate:step%2===0?10:-10}}
        transition={{duration:0.4,ease:"easeIn"}}
        style={{ left: `${(step * 100) / 12}%`}}
        className=" absolute w-12 top-[-29.92px]"
      >
        <img src={Astronaut} alt="AstronautImg" className=" w-full" />
      </motion.div>
    </div>
  );
};

export default ProgressBar;
