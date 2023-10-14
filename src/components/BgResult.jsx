import React from "react";

const BgResult = ({ color }) => {
  return (
    <div className=" absolute w-screen  h-full top-0 left-0">
      <div
        style={{ backgroundColor: color }}
        className={` w-40 h-40 rounded-full opacity-30 absolute top-[50%] left-0 blur-xl `}
      ></div>
      <div
        style={{ backgroundColor: color }}
        className={` w-56 h-56 rounded-full opacity-30 absolute top-[35%] right-0 blur-xl `}
      ></div>
      <div
        style={{ backgroundColor: color }}
        className={` w-56 h-56 rounded-full opacity-30 absolute  bottom-[5%] right-0 blur-xl `}
      ></div>
    </div>
  );
};

export default BgResult;
