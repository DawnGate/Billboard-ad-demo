import { create } from "zustand";

interface StoreProps {
  id: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
}

export const useEditMarkerModal = create<StoreProps>((set) => ({
  id: null,
  onOpen: (id) => {
    set({ id });
  },
  onClose: () => {
    set({ id: null });
  },
}));
