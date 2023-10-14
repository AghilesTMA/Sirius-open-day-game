import React from "react";
import laptop from "../assets/pc.png";
import iot from "../assets/iot.png";
import network from "../assets/network.png";
import circuit from "../assets/circuit.png";
import robot from "../assets/robot.png";

const BgQuestions = () => {
  return (
    <div className=" absolute w-screen h-screen top-0 left-0">
      <img
        src={network}
        alt="network"
        className=" absolute top-[10%] left-[10%] w-10 h-10"
      />
      <img
        src={laptop}
        alt="laptop"
        className=" absolute top-[5%] right-[10%] w-10 h-10"
      />
      <img
        src={iot}
        alt="iot"
        className=" absolute top-[25%] right-[30%] w-10 h-10"
      />
      <img
        src={robot}
        alt="robot"
        className=" absolute bottom-[5%] left-[15%] w-14 h-14"
      />
      <img
        src={circuit}
        alt="circuit"
        className=" absolute bottom-[15%] right-[5%] w-14 h-14"
      />
    </div>
  );
};

export default BgQuestions;
