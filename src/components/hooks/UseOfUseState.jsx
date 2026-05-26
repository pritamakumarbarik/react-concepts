import { useState } from "react";
const UseOfUseState = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <section id="center">
        <div>{count}</div>
        <button onClick={handleCount}>Increase Count : {count}</button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};

export default UseOfUseState;
