import React, { useContext, useEffect, useState } from "react";
import { PlanetsScore } from "../context/Planets";
import ResultContent from "../data/Result";
import BgResult from "../components/BgResult";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Result = () => {
  const navigate = useNavigate();
  const { planets, setPlanets } = useContext(PlanetsScore);
  const [selectedPlanet, setSelectedPlanet] = useState();

  const handlePlayAgain = () => {
    setPlanets({
      Funtopia_C78: 0,
      Moon: 0,
      BlackHole_K12: 0,
      Rulerterra_27FF: 0,
      Sun: 0,
    });
    navigate("/questions");
  };

  useEffect(() => {
    let max = 0;
    let selected = "";
    for (const key in planets) {
      if (planets[key] >= max) {
        max = planets[key];
        selected = key;
      }
    }
    setSelectedPlanet({
      img: ResultContent[selected].img,
      name: ResultContent[selected].name,
      text: ResultContent[selected].text,
      quote: ResultContent[selected].quote,
      color: ResultContent[selected].color,
    });
  }, []);

  return (
    <div className="relative bg-bgc text-white p-8 min-h-screen flex flex-col items-center">
      {selectedPlanet ? (
        <>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className=" relative z-20 flex flex-col gap-12 w-full"
          >
            <h2 className=" font-semibold text-5xl">You Are from:</h2>
            <div className=" flex flex-col md:flex-row gap-12 w-full items-center">
              <div className=" flex flex-col items-center w-full justify-center">
                <img
                  src={selectedPlanet.img}
                  alt="planetImg"
                  className=" w-2/3 max-w-xs"
                />
                <h3
                  style={{ color: selectedPlanet.color[2] }}
                  className={` font-medium text-5xl`}
                >
                  {selectedPlanet.name}
                </h3>
              </div>
              <div className=" max-w-md flex flex-col gap-12">
                <p className=" text-3xl">{selectedPlanet.text}</p>
                <p
                  style={{ color: selectedPlanet.color[2] }}
                  className={` text-2xl text-center `}
                >
                  {selectedPlanet.quote}
                </p>
              </div>
            </div>
            <div className=" w-full flex justify-center">
              <Button
                onClick={handlePlayAgain}
                content={"Play again"}
                className={" py-4 px-8 text-2xl rounded-md"}
              />
            </div>
          </motion.div>
          <BgResult color={selectedPlanet.color[2]} />
        </>
      ) : (
        <h2 className=" text-5xl font-bold p-8">Loading...</h2>
      )}
    </div>
  );
};

export default Result;
