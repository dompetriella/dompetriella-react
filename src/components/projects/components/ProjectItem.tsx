import { sub } from "framer-motion/client";
import { ProjectItemData } from "../../../models/projectItemData";
import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";

export function ProjectItem({
  projectItemData,
}: {
  projectItemData: ProjectItemData;
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
    <div className="relative m-8">
      <div
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
            <div className="h-16 w-16 ml-4 bg-orangeHighlight"></div>
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
              <h3 style={{ color: sourceCodeTextColor }}>
                {"Source Code".toUpperCase()}
              </h3>
              <h3 style={{ color: subheadingTextColor }}>Coding Lang</h3>
            </div>
          ) : null}

          {/* additional html */}
          {projectItemData.additionalContent}
        </section>
      </div>
      <div
        style={{ backgroundColor: itemBackdropColor, zIndex: 0 }}
        className="absolute w-full h-full -left-2 -bottom-2 rounded-2xl"
      ></div>
    </div>
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
