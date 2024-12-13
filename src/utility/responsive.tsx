import useWindowWidth from "../hooks/useWindowWidth";

export function checkIfMobile(): boolean {
    return useWindowWidth() < 480;
}