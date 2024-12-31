import { sub } from "framer-motion/client";
import { ProjectItemData } from "../../../models/projectItemData";
import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";
import { motion } from "framer-motion";

export function ProjectItem({
  projectItemData,
  index,
}: {
  projectItemData: ProjectItemData;
  index: number;
}) {
  const lightModeState = useAppState((state) => state.lightMode);

  const itemBackgroundColor = lightModeState
    ? AppColors.lightGreenSecondary
    : AppColors.greyTertiary;

  const itemBackdropColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.black;

  const headingTextColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.white;

  const subheadingTextColor = lightModeState
    ? AppColors.darkGreenSubheading
    : AppColors.lightGreySubheading;

  const sourceCodeTextColor = lightModeState
    ? AppColors.white
    : AppColors.orangeHighlight;

  return (
    <motion.div
      initial={{ y: 160, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeInOut",
          delay: index * 0.1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.75,
          ease: "circIn",
        },
      }}
      className="relative my-4"
    >
      <motion.div
        initial={{ x: -8, y: 8 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.75 + index * 0.25,
          damping: 8,
        }}
        style={{ backgroundColor: itemBackgroundColor, zIndex: 1 }}
        className="relative p-6 w-72 rounded-2xl"
      >
        <section className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col pb-4">
              {/* title */}
              <h1
                style={{ color: headingTextColor }}
                className="text-2xl font-bold"
              >
                {projectItemData.title.toUpperCase()}
              </h1>
              {/* subtitle */}
              <h3 style={{ color: subheadingTextColor }} className="text-base">
                {projectItemData.subtitle}
              </h3>
            </div>
            <div className="h-16 w-16 bg-orangeHighlight"></div>
          </div>

          {/* status */}
          {projectItemData.status !== null ? (
            <div>
              <h2
                style={{ color: headingTextColor }}
                className="text-lg font-bold"
              >
                {"Status:".toUpperCase()}
              </h2>
              <h3 style={{ color: subheadingTextColor }} className="text-base">
                {projectItemData.status}
              </h3>
            </div>
          ) : null}

          {/* information */}
          <h3 style={{ color: subheadingTextColor }} className="py-4">
            {projectItemData.information}
          </h3>

          {/* source code/link */}
          {projectItemData.codeLang !== null ? (
            <div className="flex justify-between">
              <a
                href={projectItemData!.sourceCodeLink!}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: sourceCodeTextColor }}
              >
                {"Source Code".toUpperCase()}
              </a>
              <h3 style={{ color: subheadingTextColor }}>
                {projectItemData.codeLang}
              </h3>
            </div>
          ) : null}

          {/* additional html */}
          {projectItemData.additionalContent}
        </section>
      </motion.div>
      {/* backdrop */}
      <div
        style={{ backgroundColor: itemBackdropColor, zIndex: 0 }}
        className="absolute w-full h-full -left-2 -bottom-2 rounded-2xl"
      ></div>
    </motion.div>
  );
}

// psuedo switch expression, pretty cool
// {(() => {
//   switch (this.state.color) {
//     case "red":   return "#FF0000";
//     case "green": return "#00FF00";
//     case "blue":  return "#0000FF";
//     default:      return "#FFFFFF";
//   }
// })()}
