// import { useMarkerStore } from "@/hooks/useMarkerStore";

import { mockBillboards } from "@/model/mockData";
import { MarkerWithInfoWindow } from "./MarkerWithInfoWindow";

export const MapMarkers = () => {
  // const markers = useMarkerStore((state) => state.markers);

  const markers = mockBillboards.map(billboard => ({
    id: billboard.id,
    title: billboard.name,
    lat: billboard.lat,
    lng: billboard.lng,
    companyId: billboard.booking ? billboard.booking.company.id : null
  }))

  return markers.map((marker) => (
    <MarkerWithInfoWindow key={marker.id} marker={marker} />
  ));
};
