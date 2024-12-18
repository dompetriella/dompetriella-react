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
        style={{
          backgroundColor: mainButtonBackgroundColor,
          color: mainButtonTextColor,
        }}
        className="w-32 h-32 text-2xl bg-red-500 rounded-full flex justify-center items-center tracking-widest"
      >
        {buttonText}
      </div>
    </>
  );
}
