import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";

export function ProjectItem() {
  const lightModeState = useAppState((state) => state.lightMode);

  const itemBackgroundColor = lightModeState
    ? AppColors.lightGreenSecondary
    : AppColors.greyTertiary;

  const itemBackdropColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.black;

    const headingTextColor = lightModeState ? AppColors.darkGreenAuxilary : AppColors.white
    const subheadingTextColor = lightModeState ? AppColors.blueGreenTertiary : AppColors.lightBlackSecondary
  
    return (
    <div className="relative m-8">
      <div
        style={{ backgroundColor: itemBackgroundColor, zIndex: 1 }}
        className="relative p-6 w-72 rounded-2xl"
      >
        <section className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col pb-4">
              <h1 style={{ color: headingTextColor}} className="text-2xl font-bold">Title</h1>
              <h3 style={{ color: subheadingTextColor}} className="text-lg">Subtitle</h3>
            </div>
            <div className="h-16 w-16 ml-4 bg-orangeHighlight"></div>
          </div>
          <div>
            <h2 className="text-xl">Status</h2>
            <h3>Project Status</h3>
          </div>
          <h3 className="py-4">Information about project</h3>
          <div className="flex justify-between">
            <h3>Source Code</h3>
            <h3>Coding Lang</h3>
          </div>
        </section>
      </div>
      <div
        style={{ backgroundColor: itemBackdropColor, zIndex: 0 }}
        className="absolute w-full h-full -left-2 -bottom-2 rounded-2xl"
      ></div>
    </div>
  );
}
