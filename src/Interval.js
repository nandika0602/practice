import React, { useState, useEffect } from "react";
import Water from "./Water";
const Interval = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [actionType, setActionType] = useState();
  useEffect(() => {
    console.log("mounted");
    const a = setInterval(() => {
      console.log("setinterval");
      if (actionType === "increase" && waterLevel < 5) {
        console.log(waterLevel, "inc");
        // setWaterLevel(waterLevel + 1)
        setWaterLevel((prevWaterLevel) => prevWaterLevel + 1);
      }
      if (actionType === "decrease" && waterLevel > 0) {
        console.log(waterLevel, "dec");
        setWaterLevel((prevWaterLevel) => prevWaterLevel - 1);
      }
    }, 2000);

    return () => {
      console.log("unmounted", waterLevel, actionType);
      clearInterval(a);
    };
  }, [actionType, waterLevel]);

  return (
    <div>
      <h1>Water Counter: {waterLevel}</h1>
      <div id="bathtub">
        <Water waterLevel={waterLevel} />
      </div>
      <div id="buttons">
        <button
          className="btn"
          onClick={() => {
            setActionType("increase");
          }}
        >
          increaseWaterLevel
        </button>
        <button
          className="btn"
          onClick={() => {
            setActionType("decrease");
          }}
        >
          decreaseWaterLevel
        </button>
      </div>
    </div>
  );
};
export default Interval;
