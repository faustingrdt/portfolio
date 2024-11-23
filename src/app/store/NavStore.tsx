import { create } from "zustand";

interface BearState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useNavStore = create<BearState>()((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useNavStore;
