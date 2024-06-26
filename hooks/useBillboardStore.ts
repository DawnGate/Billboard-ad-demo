import { create } from "zustand";

interface StoreProps {
  billBoardId: string | null;
  selectBillboard: (id: string | null) => void;
}

export const useBillboardStore = create<StoreProps>((set) => ({
  billBoardId: null,
  selectBillboard: (id) => {
    set({ billBoardId: id });
  },
}));
