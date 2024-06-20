import { ImplCategory, ImplMarker } from "@/model";
import { create } from "zustand";

interface StoreProps {
  markers: ImplMarker[];
  categories: ImplCategory[];
  addMarker: (marker: Omit<ImplMarker, "id">) => void;
  deleteMarker: (id: string) => void;
  addCategory: (category: Omit<ImplCategory, "id">) => void;
  deleteCategory: (id: string) => void;
}

const defaultMarkers: ImplMarker[] = [
  {
    id: "1",
    title: "Coffee Shop 1",
    lat: 10.8016751,
    long: 106.714055,
  },
  {
    id: "2",
    title: "Coffee Shop 2",
    lat: 10.7930862,
    long: 106.7007836,
  },
  {
    id: "3",
    title: "Coffee Shop 3",
    lat: 10.801948,
    long: 106.7099689,
  },
];

export const useMarkerStore = create<StoreProps>((set, get) => ({
  markers: defaultMarkers || [],
  categories: [],
  addMarker: (marker) => {
    const newId = window.crypto.randomUUID();
    const newMarker = {
      id: newId,
      ...marker,
    };

    set({
      markers: [...get().markers, newMarker],
    });
  },
  deleteMarker: (id) => {
    const markers = get().markers;
    const filterMarkers = markers.filter((item) => item.id !== id);

    set({ markers: filterMarkers });
  },
  addCategory: (category) => {
    const newId = window.crypto.randomUUID();
    const newCat = {
      id: newId,
      ...category,
    };

    set({
      categories: [...get().categories, newCat],
    });
  },
  deleteCategory: (id) => {
    const cats = get().categories;
    const filterCategories = cats.filter((item) => item.id !== id);

    const markers = get().markers;
    const filterMarkers = markers.map(item => {
      if(item.categoryId === id) {
        return {...item , categoryId: null}
      } 
      return item
    })

    set({ markers: filterMarkers, categories: filterCategories });
  },
}));
