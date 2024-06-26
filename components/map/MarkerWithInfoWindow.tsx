"use client";

import { ImplMarker } from "@/model";
import { Marker, Popup } from "react-leaflet";

import { EyeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useBillboardStore } from "@/hooks/useBillboardStore";

export const MarkerWithInfoWindow = ({ marker }: { marker: ImplMarker }) => {
  const selectBillboard = useBillboardStore((state) => state.selectBillboard);

  const handleClickDetail = () => {
    selectBillboard(marker.id);
  };

  return (
    <Marker position={[marker.lat, marker.lng]}>
      <Popup>
        <div>
          <div>
            <i>{marker.title}</i>.
          </div>
          <div className="mt-2 flex justify-center">
            <Button
              variant="outline"
              className="p-2"
              onClick={handleClickDetail}
            >
              <EyeIcon className="mr-2" />
              <p>Detail</p>
            </Button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
