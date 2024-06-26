import { ImplCategory, ImplMarker } from "@/model";
import { create } from "zustand";

interface StoreProps {
  markers: ImplMarker[];
  categories: ImplCategory[];
  getMarkerById: (id: string) => ImplMarker | undefined;
  addMarker: (marker: Omit<ImplMarker, "id">) => void;
  updateMarker: (marker: ImplMarker) => boolean;
  deleteMarker: (id: string) => void;
  addCategory: (category: Omit<ImplCategory, "id">) => void;
  deleteCategory: (id: string) => void;
}

const defaultMarkers: ImplMarker[] = [
  {
    id: "1",
    title: "Coffee Shop 1",
    lat: 10.8016751,
    lng: 106.714055,
    companyId: "123",
  },
  {
    id: "2",
    title: "Coffee Shop 2",
    lat: 10.7930862,
    lng: 106.7007836,
    companyId: "123",
  },
  {
    id: "3",
    title: "Coffee Shop 3",
    lat: 10.801948,
    lng: 106.7099689,
    companyId: "123",
  },
  {
    id: "4",
    title: "Coffee Shop 4",
    lat: 10.7878873,
    lng: 106.7211247,
    companyId: "123",
  },

  {
    id: "5",
    title: "Clothes Shop 1",
    lat: 10.77901120762816,
    lng: 106.71175003051759,
    companyId: "124",
  },

  {
    id: "6",
    title: "Clothes Shop 2",
    lat: 10.81155552903164,
    lng: 106.73337936401369,
    companyId: "124",
  },

  {
    id: "7",
    title: "Clothes Shop 3",
    lat: 10.798824880061588,
    lng: 106.68102264404298,
    companyId: "124",
  },
];

const defaultCategories: ImplCategory[] = [
  {
    id: "123",
    name: "Coffee Shop",
    color: "red",
  },
  {
    id: "124",
    name: "Clothes Shop",
    color: "gray",
  },
];

export const useMarkerStore = create<StoreProps>((set, get) => ({
  markers: defaultMarkers || [],
  categories: defaultCategories || [],
  getMarkerById: (id) => {
    const markers = get().markers;
    return markers.find((marker) => marker.id === id);
  },
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
  updateMarker: (updatedMarker) => {
    const markers = get().markers;
    const foundMarker = markers.find(
      (marker) => marker.id === updatedMarker.id,
    );
    if (!foundMarker) return false;
    set({
      markers: [
        ...markers.map((marker) => {
          if (marker.id === updatedMarker.id) {
            return updatedMarker;
          }
          return marker;
        }),
      ],
    });
    return true;
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
    const filterMarkers = markers.map((item) => {
      if (item.companyId === id) {
        return { ...item, companyId: null };
      }
      return item;
    });

    set({ markers: filterMarkers, categories: filterCategories });
  },
}));
