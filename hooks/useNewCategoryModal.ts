import { create } from "zustand";

interface StoreProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewCategoryModal = create<StoreProps>((set) => ({
  open: false,
  onOpen: () => {
    set({ open: true });
  },
  onClose: () => {
    set({ open: false });
  },
}));
