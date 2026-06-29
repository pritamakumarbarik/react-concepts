import { useState, useDebugValue } from "react";

const UseOfUseDebugValue = () => {
  const [online, setOnline] = useState(false);
  useDebugValue(online ? "Online" : "Offline");
  return (
    <div>
      <button onClick={() => setOnline(!online)}>Set Online/Offline</button>
      UseOfUseDebugValue : {online ? "Online" : "Offline"}{" "}
    </div>
  );
};

export default UseOfUseDebugValue;
