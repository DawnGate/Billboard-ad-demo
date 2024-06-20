import { create } from "zustand";

interface StoreProps {
  id: string | null;
  open: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
}

export const useEditMarkerModal = create<StoreProps>((set) => ({
  id: null,
  open: false,
  onOpen: (id) => {
    set({ id, open: true });
  },
  onClose: () => {
    set({ open: false, id: null });
  },
}));
