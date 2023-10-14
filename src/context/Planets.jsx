import React, { useState } from "react";
import { createContext } from "react";

const initialPlanetsScore = {
  Funtopia_C78: 0,
  Moon: 0,
  BlackHole_K12: 0,
  Rulerterra_27FF: 0,
  Sun: 0,
};
const PlanetsScore = createContext({...initialPlanetsScore});

const Planets = ({ children }) => {
  const [planets, setPlanets] = useState({ ...initialPlanetsScore });
  return (
    <PlanetsScore.Provider value={{ planets, setPlanets }}>
      {children}
    </PlanetsScore.Provider>
  );
};

export default Planets;
export {PlanetsScore}
