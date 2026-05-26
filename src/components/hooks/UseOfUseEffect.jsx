import { useState, useEffect } from "react";

const UseOfUseEffect = () => {
  const [timer, setTimer] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    console.log("use effect called");
    let interval = null;

    if (stopTimer) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      console.log("use effect unmounted or clean up");
      clearInterval(interval);
    };
  }, [stopTimer]);

  const handleStopTime = () => {
    setStopTimer((stopTimer) => !stopTimer);
  };

  return (
    <>
      <div>UseEffect : {timer}</div>
      <button
        onClick={handleStopTime}
        style={{ color: "red", backgroundColor: "lightgray" }}
      >
        {stopTimer ? "Start Timer" : "Stop Timer"}
      </button>
    </>
  );
};

export default UseOfUseEffect;
