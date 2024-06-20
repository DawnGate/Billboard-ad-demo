"use client";

import { ImplMarker } from "@/model";
import { Marker, Popup } from "react-leaflet";

export const MarkerWithInfoWindow = ({ marker }: { marker: ImplMarker }) => {
  return (
    <Marker position={[marker.lat, marker.long]}>
      <Popup>
        <i>{marker.title}</i>.
      </Popup>
    </Marker>
  );
};
