import { createContext } from "react";
import ShowThemeContext from "./ShowThemeContext";

const ThemeContext = createContext("light");

const UseOfUseEffect = () => {
  return (
    <ThemeContext.Provider value={ThemeContext._currentValue}>
      <ShowThemeContext />
    </ThemeContext.Provider>
  );
};

export default UseOfUseEffect;
