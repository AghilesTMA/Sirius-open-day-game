import React, { useContext, useEffect, useState } from "react";
import { PlanetsScore } from "../context/Planets";
import ResultContent from "../data/Result";

const Result = () => {
  const { planets } = useContext(PlanetsScore);
  const [selectedPlanet, setSelectedPlanet] = useState();

  useEffect(() => {
    let max = 0;
    let selected = "";
    for (const key in planets) {
      if (planets[key] >= max) {
        max = planets[key];
        selected = key;
      }
    }
    setSelectedPlanet(selected);
  }, []);

  return (
    <div className="bg-bgc text-white p-8 min-h-screen flex flex-col items-center">
      {selectedPlanet ? (
        <div className=" flex flex-col gap-12 w-full">
          <h2 className=" font-semibold text-5xl">You Are from:</h2>
          <div className=" flex flex-col md:flex-row gap-12 w-full items-center">
            <div className=" flex flex-col items-center w-full justify-center">
              <img
                src={ResultContent[selectedPlanet].img}
                alt="planetImg"
                className=" w-2/3 max-w-xs"
              />
              <h3
                className={` font-medium text-5xl ${ResultContent[selectedPlanet].color[0]}`}
              >
                {ResultContent[selectedPlanet].name}
              </h3>
            </div>
            <div className=" max-w-md flex flex-col gap-12">
              <p className=" text-3xl">{ResultContent[selectedPlanet].text}</p>
              <p
                className={` text-2xl text-center ${ResultContent[selectedPlanet].color[0]}`}
              >
                {ResultContent[selectedPlanet].quote}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h2 className=" text-5xl font-bold p-8">Loading...</h2>
      )}
    </div>
  );
};

export default Result;
