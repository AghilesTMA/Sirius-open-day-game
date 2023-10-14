import React, { useContext, useState } from "react";
import { PlanetsScore } from "../context/Planets";
import ProgressBar from "../components/ProgressBar";
import QA from "../data/QA";
import { useNavigate } from "react-router-dom";
import BgQuestions from "../components/BgQuestions";
import { motion } from "framer-motion";

const Questions = () => {
  const navigate = useNavigate();
  const { setPlanets } = useContext(PlanetsScore);
  const [step, setStep] = useState(0);

  const handleClick = (ans) => {
    setPlanets((prev) => ({ ...prev, [ans.type]: prev[ans.type] + 1 }));

    if (step === 11) {
      navigate("/result");
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="relative z-20 bg-bgc p-8 h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className=" relative z-20 flex w-full flex-col h-4/6 justify-between gap-4 text-white"
      >
        <ProgressBar step={step} />
        <h2 className=" font-medium  text-3xl">Question {step + 1}</h2>
        <p className=" text-2xl text-center">{QA[step].question}</p>
        <ul className=" flex flex-col gap-4 w-full md:grid md:grid-cols-4">
          {QA[step].answers.map((ans, idx) => (
            <li
              onClick={() => handleClick(ans)}
              key={idx}
              style={{
                backgroundImage:
                  "radial-gradient(556.54% 76.35% at 19.06% 71.23%, rgba(140, 58, 235, 0.80) 0%, #4B5AF2 100%)",
              }}
              className=" p-2 rounded-md cursor-pointer text-center md:col-span-2 md:text-xl"
            >
              {ans.text}
            </li>
          ))}
        </ul>
      </motion.div>
      <BgQuestions />
    </div>
  );
};

export default Questions;
