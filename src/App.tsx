import { useState } from "react";
import "./App.css";
import AppColors from "./theme/AppColors";
import { useAppState } from "./state/AppState";
import useWindowWidth from "./hooks/useWindowWidth";
import { checkIfMobile } from "./utility/responsive";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { motion } from "framer-motion";
import { GLOBAL_colorChangeInterpolationDuration } from "./global/animations";

function App() {
  const lightModeState = useAppState((state) => state.lightMode);
  const isMobile: boolean = checkIfMobile();

  const backgroundColor = lightModeState
    ? AppColors.greenPrimary
    : AppColors.blackPrimary;

  return (
    <>
      <motion.div
        animate={{ backgroundColor }}
        transition={{
          duration: GLOBAL_colorChangeInterpolationDuration,
          ease: "easeInOut",
        }}
        className={"flex flex-col items-center relative"}
      >
        <Navbar />
        <Projects />
      </motion.div>
    </>
  );
}

export default App;
