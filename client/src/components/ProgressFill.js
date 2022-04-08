import { useState } from "react";

const ProgressFill = ({ percentage, color }) => {
  const style = {
    background: `linear-gradient(${100 - percentage}%, ${color} ${
      100 - percentage
    }%)`,
  };
  return <div className="habitBox" style={style}></div>;
};

export default ProgressFill;
