import { motion } from "framer-motion";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useAppState } from "../../state/AppState";
import AppColors from "../../theme/AppColors";
import { checkIfMobile } from "../../utility/responsive";

export function Navbar() {
  const lightModeState = useAppState((state) => state.lightMode);
  const toggleLightModeAction = useAppState((state) => state.toggleLightMode);
  const isMobile: boolean = checkIfMobile();

  const navBackdropColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.black;
  const navBackgroundTransitionColor = lightModeState
    ? AppColors.lightBlueSecondary
    : AppColors.orangeHighlight;

  const navBackgroundColor = lightModeState
    ? AppColors.lightGreenSecondary
    : AppColors.greyTertiary;

  return (
    <>
      <nav style={{ zIndex: 999 }} className="relative flex justify-center">
        <div className="fixed">
          <motion.div
            animate={{
              backgroundColor: [
                navBackgroundColor,
                navBackgroundTransitionColor,
                navBackdropColor,
                navBackdropColor,
              ],
            }}
            transition={{
              duration: 1.0,
              times: [0.2, 0.33, 0.75, 1],
            }}
            style={{ backgroundColor: navBackdropColor }}
            className={`fixed ${
              isMobile ? "" : "top-8"
            } mx-auto w-10/12 left-0 right-0  h-16 rounded-2xl bottom-4 `}
          ></motion.div>
          <motion.div
            initial={{
              x: -6,
              y: 8,
            }}
            animate={{ x: 0, y: 0 }}
            transition={{
              type: "spring",
              delay: 0.25,
              damping: 8,
            }}
            style={{ backgroundColor: navBackgroundColor }}
            className={`fixed flex justify-evenly items-center ${
              isMobile ? "" : "top-6"
            } mx-auto w-10/12 left-3 right-0 bottom-6  h-16 rounded-2xl  `}
          >
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <button
              onClick={() => toggleLightModeAction()}
              className="h-12 w-12 bg-orangeHighlight"
            ></button>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
