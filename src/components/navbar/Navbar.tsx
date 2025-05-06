import { motion } from "framer-motion";
import { useAppState } from "../../state/AppState";
import AppColors from "../../theme/AppColors";
import useScreenWidth from "../../hooks/useScreenWidth";

export function Navbar() {
  const lightModeState = useAppState((state) => state.lightMode);
  const toggleLightModeAction = useAppState((state) => state.toggleLightMode);
  const screenWidthState = useScreenWidth();
  const isMobile: boolean = screenWidthState < 768;

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
    <nav style={{ zIndex: 999 }} className="relative flex justify-center">
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
        className={`fixed mx-auto w-10/12 left-0 right-0  h-16 rounded-2xl top-6 `}
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
        className={`fixed flex justify-evenly items-center 
    
         mx-auto w-10/12 left-3 right-0 top-4  h-16 rounded-2xl  `}
      >
        <div className="flex w-full justify-between items-center px-4">
          <button
            onClick={() => toggleLightModeAction()}
            className="h-12 w-12 bg-orangeHighlight"
          ></button>

          <div className="flex items-center">
            <h1>Light Mode</h1>
            <div className="w-4"></div>
            <button
              onClick={() => toggleLightModeAction()}
              className="h-12 w-12 bg-orangeHighlight"
            ></button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
