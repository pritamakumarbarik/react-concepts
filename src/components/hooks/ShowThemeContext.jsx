import {useContext} from "react";

import ThemeContext from "./UseOfUseContext";

const ShowThemeContext = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        ShowThemeContext
      </div>
    </>
  );
};

export default ShowThemeContext;
