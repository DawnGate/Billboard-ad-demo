"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { useMarkerStore } from "@/hooks/useMarkerStore";
import { MarkerWithInfoWindow } from "./MarkerWithInfoWindow";
import { MapComponent } from "./MapComponent";
import { UpdateCenterBySearchParams } from "./UpdateCenter";
import { LatLngExpression } from "leaflet";
import { positionHcm } from "@/lib/constants";

const Map = () => {
  const markers = useMarkerStore((state) => state.markers);

  const connections = markers
    .toSorted((a, b) => a.long - b.long)
    .map((marker) => [marker.lat, marker.long] as LatLngExpression);

  return (
    <MapContainer
      // preferCanvas={true}
      center={positionHcm}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <MarkerWithInfoWindow key={marker.id} marker={marker} />
      ))}
      <Polyline pathOptions={{ color: "blue" }} positions={connections} />
      <MapComponent />
      <UpdateCenterBySearchParams />
    </MapContainer>
  );
};

export default Map;
