import { create } from "zustand";

interface AppState {
    lightMode: boolean;

    toggleLightMode: () => void;

}

export const useAppState = create<AppState>((set, get) => ({
    lightMode: true,

    toggleLightMode() {
        set({ lightMode: !get().lightMode })
    }
}));

export default AppState;
