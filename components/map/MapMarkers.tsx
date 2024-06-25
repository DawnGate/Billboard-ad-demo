import { useMarkerStore } from "@/hooks/useMarkerStore";

import { MarkerWithInfoWindow } from "./MarkerWithInfoWindow";

export const MapMarkers = () => {
  const markers = useMarkerStore((state) => state.markers);

  return markers.map((marker) => (
    <MarkerWithInfoWindow key={marker.id} marker={marker} />
  ));
};
