import React from "react";
import Astronaut from "../assets/Astronaut";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" bg-bgc min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className=" w-full flex flex-col md:flex-row justify-between items-center gap-2 text-white"
      >
        <div className="hidden md:flex w-full p-8 items-start gap-4 flex-col">
          <h1 className=" font-bold text-3xl">
            Are you ready to know which planet you belong to ?
          </h1>
          <p className=" opacity-50">
            Hello we welcome you here to have some fun during our event
            hopefully you enjoy it ! This is a series of quizzes you are going
            to answer some question in order to know which planet you belong to
            {` ;)`}
          </p>
          <Link to={"/questions"}>
            <Button
              content={"Travel Now"}
              className={" py-4 px-12  text-xl rounded-md cursor-pointer"}
            />
          </Link>
        </div>
        <h2 className=" md:hidden text-4xl p-2 font-bold">
          where are you from ya bnadem :
        </h2>
        <div className=" w-full max-w-lg">
          <Astronaut />
        </div>
        <Link className=" md:hidden" to={"/questions"}>
          <Button
            content={"Go now"}
            className={"py-4 px-12  text-xl rounded-md cursor-pointer mb-2"}
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
