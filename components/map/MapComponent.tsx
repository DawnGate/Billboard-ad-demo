"use client";

import { useMapEvents } from "react-leaflet";

export const MapComponent = () => {
  const mapEvent = useMapEvents({
    click: () => {
      mapEvent.locate();
    },
    locationfound: (location) => {
      console.log("location found:", location);
    },
  });
  return null;
};
