import { motion } from "framer-motion";
import AppColors from "../../theme/AppColors";
import { useAppState } from "../../state/AppState";

export default function Showcase() {
  const lightModeState = useAppState((state) => state.lightMode);

  const itemBackgroundColor = lightModeState
    ? AppColors.lightGreenSecondary
    : AppColors.greyTertiary;

  const itemBackdropColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.black;

  return (
    <div className="w-full">
      <div className="relative">
        <motion.div
          initial={{ x: -8, y: 8 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            delay: 0.75 + 1 * 0.25,
            damping: 8,
          }}
          style={{ backgroundColor: itemBackgroundColor, zIndex: 1 }}
          className="relative p-6 rounded-2xl"
        ></motion.div>
        {/* backdrop */}
        <div
          style={{ backgroundColor: itemBackdropColor, zIndex: 0 }}
          className="absolute w-full h-full -left-2 -bottom-2 rounded-2xl"
        ></div>
      </div>
    </div>
  );
}
