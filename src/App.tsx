import { useState } from "react";
import "./App.css";
import AppColors from "./theme/AppColors";
import { useAppState } from "./state/AppState";
import useWindowWidth from "./hooks/useWindowWidth";
import { checkIfMobile } from "./utility/responsive";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";

function App() {
  const lightModeState = useAppState((state) => state.lightMode);
  const isMobile: boolean = checkIfMobile();

  const backgroundColor = lightModeState
    ? AppColors.greenPrimary
    : AppColors.blackPrimary;

  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor }}
        className="size-full flex flex-col  items-center relative"
      >
        <Navbar />
        <Projects />
      </div>
    </>
  );
}

export default App;
