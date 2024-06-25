"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, TileLayer } from "react-leaflet";
import { MapComponent } from "./MapComponent";
import { UpdateCenterBySearchParams } from "./UpdateCenter";

import { positionHcm } from "@/lib/constants";
import { MapMarkers } from "./MapMarkers";
import { MapCategoryPolylines } from "./MapCategoryPolylines";

const Map = () => {
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
      <MapMarkers />
      <MapCategoryPolylines />
      <MapComponent />
      <UpdateCenterBySearchParams />
    </MapContainer>
  );
};

export default Map;
