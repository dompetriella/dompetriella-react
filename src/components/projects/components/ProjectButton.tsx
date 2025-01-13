import { useState } from "react";
import App from "../../../App";
import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";
import { motion } from "framer-motion";

export function ProjectButton({
  buttonText,
  onClick,
  isExpanded,
}: {
  buttonText: string;
  onClick: () => void;
  isExpanded: boolean;
}) {
  const lightModeState = useAppState((state) => state.lightMode);
  const [isHovered, setIsHovered] = useState(false);

  const mainButtonBackgroundColor = lightModeState
    ? AppColors.blueTertiary
    : AppColors.white;

  const mainButtonTextColor = lightModeState
    ? AppColors.white
    : AppColors.black;

  const mainButtonShadowColor = lightModeState
    ? AppColors.darkBlueAuxilary
    : AppColors.darkGreyTertiary;

  const splashBackgroundColor = lightModeState
    ? AppColors.lightBlueSecondary
    : AppColors.lightGreyTertiary;

  return (
    <>
      <div className="relative flex justify-center items-center w-60 p-8 h-60 my-8">
        {isExpanded ? (
          <div className="relative flex justify-center items-center w-60 h-60 my-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 5 }}
              style={{
                backgroundColor: splashBackgroundColor,
                opacity: lightModeState ? 0.5 : 0.1,
              }}
              className="absolute w-52 h-52 bottom-3 rounded-full"
            ></motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 2.5 }}
              style={{
                backgroundColor: splashBackgroundColor,
                opacity: lightModeState ? 0.8 : 0.5,
              }}
              className="absolute w-44 h-44 bottom-5 rounded-full"
            ></motion.div>
          </div>
        ) : null}
        <div className="flex justify-center items-center">
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, bottom: 28 }}
              animate={{ opacity: 0.5, bottom: 20 }}
              style={{
                backgroundColor: mainButtonShadowColor,
              }}
              className="absolute w-36 h-36 rounded-full "
            ></motion.div>
          ) : null}
          <button
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
          </button>
        </div>
      </div>
    </>
  );
}
