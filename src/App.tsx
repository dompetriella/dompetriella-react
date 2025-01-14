import "./App.css";
import AppColors from "./theme/AppColors";
import { useAppState } from "./state/AppState";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/projects/Projects";
import { motion } from "framer-motion";
import { GLOBAL_colorChangeInterpolationDuration } from "./global/animations";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const lightModeState = useAppState((state) => state.lightMode);
  const isMobile: boolean = useIsMobile();

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
        <div className="pt-24"></div>
        <Projects />
        <div className="pb-24"></div>
      </motion.div>
    </>
  );
}

export default App;
