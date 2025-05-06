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

  // isExpanded in this context is whether or not the section is expanded
  // main button shrinks when section is expanded
  const mainButtonSize: number = isExpanded ? 144 : 192;
  // in pixels
  const mainButtonTextSize: number = isExpanded ? 28 : 40;

  const mainButtonBackgroundColor = lightModeState
    ? AppColors.blueTertiary
    : AppColors.white;

  const mainButtonTextColor = lightModeState
    ? AppColors.white
    : AppColors.black;


  const splashBackgroundColor = lightModeState
    ? AppColors.lightBlueSecondary
    : AppColors.lightGreyTertiary;

  const buttonShadowColor = lightModeState ? AppColors.darkBlueAuxilary : AppColors.greyTertiary;

  return (
    <>
      <div className="relative flex justify-center items-center w-full p-8 h-60 my-8">
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
              height: mainButtonSize,
              width: mainButtonSize,
              fontSize: `${mainButtonTextSize}px`
            }}
            transition={{
              x: { ease: "backOut", duration: 1.0 },
              height: { ease: "backOut", duration: 0.8 },
              width: { ease: "backOut", duration: 0.4 },
              fontSize: { ease: "backOut", duration: 0.4 },
            }}
            onMouseEnter={() => setIsHovered(() => true)}
            onMouseLeave={() => setIsHovered(() => false)}
            onClick={onClick}
            style={{
              backgroundColor: mainButtonBackgroundColor,
              color: mainButtonTextColor,
              borderBottomWidth: isExpanded ? 0 : 8,
              borderColor: buttonShadowColor
              
            }}
            className="hover:brightness-125 absolute
           bottom-7 rounded-full flex
          justify-center items-center tracking-widest shadow-xl"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </>
  );
}
