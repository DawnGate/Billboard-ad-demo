import { useMarkerStore } from "@/hooks/useMarkerStore";

import { Polyline } from "react-leaflet";

import { LatLngExpression } from "leaflet";

export const MapCategoryPolylines = () => {
  const markers = useMarkerStore((state) => state.markers);
  const categories = useMarkerStore((state) => state.categories);

  return categories.map((cat) => {
    const filterMarkers = markers.filter(
      (marker) => marker.categoryId === cat.id,
    ).sort((a,b) => a.long - b.long)

    const connections = filterMarkers.map(marker => [marker.lat, marker.long] as LatLngExpression)
    return <Polyline key={cat.id} pathOptions={{ color: cat.color }} positions={connections} />;
  });

};
