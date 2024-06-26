// import { useMarkerStore } from "@/hooks/useMarkerStore";

import { Polyline } from "react-leaflet";

import { LatLngExpression } from "leaflet";
import { mockBillboards, mockCompanies } from "@/model/mockData";

export const MapCategoryPolylines = () => {
  // const markers = useMarkerStore((state) => state.markers);
  // const categories = useMarkerStore((state) => state.categories);

  const billboards = mockBillboards;
  const companies = mockCompanies;

  return companies.map((company) => {
    const filterBillboards = billboards
      .filter((billboard) => billboard.booking?.company.id === company.id)
      .sort((a, b) => a.lng - b.lng);

    const connections = filterBillboards.map(
      (marker) => [marker.lat, marker.lng] as LatLngExpression,
    );
    return (
      <Polyline
        key={company.id}
        pathOptions={{ color: company.color }}
        positions={connections}
      />
    );
  });
};
