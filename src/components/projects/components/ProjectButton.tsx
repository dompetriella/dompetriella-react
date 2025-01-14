import { useState } from "react";
import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";
import { motion } from "framer-motion";
import useScreenWidth from "../../../hooks/useScreenWidth";

export function ProjectButton({
  buttonText,
  onClick,
  isExpanded,
  isLeft = true,
}: {
  buttonText: string;
  onClick: () => void;
  isExpanded: boolean;
  isLeft?: boolean;
}) {
  const lightModeState = useAppState((state) => state.lightMode);

  const [isHovered, setIsHovered] = useState(false);

  const screenWidth = useScreenWidth();

  const direction = isLeft ? -1 : 1;

  const mainButtonBackgroundColor = lightModeState
    ? AppColors.blueTertiary
    : AppColors.white;

  const mainButtonTextColor = lightModeState
    ? AppColors.white
    : AppColors.black;

  const splashBackgroundColor = lightModeState
    ? AppColors.lightBlueSecondary
    : AppColors.lightGreyTertiary;

  return (
    <>
      <div className="relative flex justify-center items-center w-60 p-8 h-60 my-8">
        {isExpanded ? (
          <div className="">
            <motion.div
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: 4,
                y: 240,
                x: (direction * screenWidth) / (isLeft ? 3.5 : 5),
                transition: {
                  ease: "backOut",
                  duration: 1.0,
                },
              }}
              style={{
                backgroundColor: splashBackgroundColor,
                opacity: lightModeState ? 0.5 : 0.1,
              }}
              className="absolute w-52 h-52 bottom-3 rounded-full"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: 3,
                x: (direction * screenWidth) / (isLeft ? 3.5 : 4.5),
                y: 120,
                transition: {
                  delay: 0,
                  ease: "backOut",
                  duration: 0.75,
                },
              }}
              style={{
                backgroundColor: splashBackgroundColor,
                opacity: lightModeState ? 0.8 : 0.5,
              }}
              className="absolute w-44 h-44 bottom-5 rounded-full"
            ></motion.div>
          </div>
        ) : null}
        <div className="flex justify-center items-center">
          <motion.button
            initial={{ x: 0 }}
            animate={{
              x: isExpanded ? (direction * screenWidth) / 4 : 0,
              transition: {
                ease: "backOut",
                duration: 1.0,
              },
            }}
            onMouseEnter={() => setIsHovered(() => true)}
            onMouseLeave={() => setIsHovered(() => false)}
            onClick={onClick}
            style={{
              backgroundColor: mainButtonBackgroundColor,
              color: mainButtonTextColor,
            }}
            className="hover:brightness-125 absolute w-36 h-36 
          text-3xl bottom-7 rounded-full flex 
          justify-center items-center tracking-widest"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </>
  );
}
