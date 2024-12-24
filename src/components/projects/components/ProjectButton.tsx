import App from "../../../App";
import { useAppState } from "../../../state/AppState";
import AppColors from "../../../theme/AppColors";

export function ProjectButton({ buttonText }: { buttonText: string }) {
  const lightModeState = useAppState((state) => state.lightMode);

  const mainButtonBackgroundColor = lightModeState
    ? AppColors.blueTertiary
    : AppColors.white;

  const mainButtonTextColor = lightModeState
    ? AppColors.white
    : AppColors.black;

  const mainButtonShadowColor = lightModeState ? AppColors.darkBlueAuxilary : AppColors.darkGreyTertiary

  const splashBackgroundColor = lightModeState
    ? AppColors.lightBlueSecondary
    : AppColors.lightGreyTertiary;



  return (
    <>
      <div
        style={{ zIndex: 10 }}
        className="relative flex justify-center items-center w-full p-8 h-60"
      >
        <div style={{ backgroundColor: splashBackgroundColor, opacity: lightModeState ? 0.5 : 0.1 }} className="absolute w-52 h-52 bottom-3 rounded-full"></div>
        <div style={{ backgroundColor: splashBackgroundColor, opacity: lightModeState ? 0.8 : 0.5 }} className="absolute w-44 h-44 bottom-5 rounded-full"></div>
        <div
          style={{
            backgroundColor: mainButtonShadowColor,
            opacity: 0.50
          }}
          className="absolute w-36 h-36 bottom-[24px] rounded-full "
        >
        </div>
        <button
          style={{
            backgroundColor: mainButtonBackgroundColor,
            color: mainButtonTextColor,
          }}
          className="absolute w-36 h-36 text-3xl bottom-7  rounded-full flex justify-center items-center tracking-widest"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
