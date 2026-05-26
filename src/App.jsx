import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
/* import UserOfUseState from "./components/UseOfUseState"; */
import UseOfUseEffect from "./components/hooks/UseOfUseEffect";
import UseOfUseContext from "./components/hooks/UseOfUseContext";
import UseOfUseDefferedValue from "./components/hooks/UseOfUseDefferedValue";

function App() {
  return (
    <>
      <section id="center">
        {/* <UserOfUseState /> */}
        {/* <UseOfUseEffect /> */}
        {/* <UseOfUseContext /> */}
        <UseOfUseDefferedValue />
      </section>
    </>
  );
}

export default App;
