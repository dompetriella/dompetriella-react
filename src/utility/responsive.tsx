import useWindowWidth from "../hooks/useScreenWidth";

export function checkIfMobile(): boolean {
  return useWindowWidth() < 480;
}
