import { create } from "zustand";

interface AppState {
    lightMode: boolean;

    toggleThemeMode: () => void;

}

export const useAppState = create<AppState>((set, get) => ({
    lightMode: true,

    toggleThemeMode() {
        set({ lightMode: !get().lightMode })
    }
}));

export default AppState;
