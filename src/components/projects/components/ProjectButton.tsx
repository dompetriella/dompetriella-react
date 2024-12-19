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

  return (
    <>
      <div
        style={{ zIndex: 10 }}
        className="relative flex justify-center items-center w-full p-8 h-60"
      >
        <div className="absolute w-52 h-52 bottom-3 bg-red-600 rounded-full"></div>
        <div className="absolute w-44 h-44 bottom-5 bg-black rounded-full"></div>
        <button
          style={{
            backgroundColor: mainButtonBackgroundColor,
            color: mainButtonTextColor,
          }}
          className="absolute w-36 h-36 text-2xl bottom-7  rounded-full flex justify-center items-center tracking-widest"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
