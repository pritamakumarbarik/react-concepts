import { useState, useCallback, memo } from "react";

const ExpensiveButton = memo(({ onClick, label }) => {
  console.log("Rendering button - ", label);
  return <button onClick={onClick}>{label}</button>;
});

const UseOfUseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Count: {count}</h2>

      {/* Because we used useCallback, 'incrementCount' stays exactly the same.
        The memoized ExpensiveButton sees the exact same prop and DOES NOT re-render.
      */}
      <ExpensiveButton onClick={incrementCount} label="Add +1" />

      <hr style={{ margin: "20px 0" }} />

      <p>Type here to trigger a Parent re-render:</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default UseOfUseCallback;
