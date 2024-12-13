import useWindowWidth from "../../hooks/useWindowWidth";
import { useAppState } from "../../state/AppState";
import AppColors from "../../theme/AppColors";
import { checkIfMobile } from "../../utility/responsive";

export function Navbar() {
  const lightModeState = useAppState((state) => state.lightMode);
  const toggleLightModeAction = useAppState((state) => state.toggleLightMode)
  const isMobile: boolean = checkIfMobile();

  const navBackdropColor = lightModeState
    ? AppColors.darkGreenAuxilary
    : AppColors.black;
  const navBackgroundColor = lightModeState
    ? AppColors.lightGreenSecondary
    : AppColors.greyTertiary;

  return (
    <>
      <nav className="relative w-full bg-red-50 flex justify-center">
        <div className="fixed">
          <div
            style={{ backgroundColor: navBackdropColor }}
            className={`fixed ${
              isMobile ? "" : "top-8"
            } mx-auto w-10/12 left-0 right-0  h-16 rounded-3xl bottom-4 `}
          ></div>
          <div
            style={{ backgroundColor: navBackgroundColor }}
            className={`fixed flex justify-evenly items-center ${
              isMobile ? "" : "top-6"
            } mx-auto w-10/12 left-3 right-0 bottom-6  h-16 rounded-3xl  `}
          >
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <div className="h-12 w-12 bg-orangeHighlight"></div>
            <button onClick={() => toggleLightModeAction()} className="h-12 w-12 bg-orangeHighlight"></button>
          </div>
        </div>
      </nav>
    </>
  );
}
