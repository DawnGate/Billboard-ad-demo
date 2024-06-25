"use client";

import { useMapEvents } from "react-leaflet";

export const MapComponent = () => {
  const mapEvent = useMapEvents({
    click: (e) => {
      console.log(e.latlng)
      mapEvent.locate();
    },
    locationfound: (location) => {
      console.log("location found:", location);
    },
  });
  return null;
};
