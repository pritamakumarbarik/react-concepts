import { useState, useDeferredValue } from "react";

const UseOfUseDefferedValue = () => {
  const [query, setQuery] = useState("");
  const defferedQuery = useDeferredValue(query);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>UseOfUseDefferedValue : {defferedQuery}</div>
    </>
  );
};

export default UseOfUseDefferedValue;
