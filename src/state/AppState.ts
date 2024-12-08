import { create } from "zustand";
import { ThemeMode } from "../models/ThemeMode";

interface AppState {
    lightMode: boolean;

    toggleThemeMode: () => void;

}

const useAppState = create<AppState>((set, get) => ({
    lightMode: true,

    toggleThemeMode() {
        set({ lightMode: !get().lightMode })
    }
}));

export default AppState;
