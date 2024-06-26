"use client";

import { useBillboardStore } from "@/hooks/useBillboardStore";
import { isNumeric } from "@/lib/utils";
import { mockBillboards } from "@/model/mockData";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export const UpdateCenterBySearchParams = () => {
  const searchParams = useSearchParams();

  const billboardId = useBillboardStore((state) => state.billBoardId);

  const [newCenter, setNewCenter] = useState<[number, number] | null>(null);

  const position = searchParams.get("position");

  useEffect(() => {
    // check position valid
    if (!position) return;
    const [lat, long] = position.split(",").map((item) => Number(item));
    if (!isNumeric(lat) || !isNumeric(long)) return;
    setNewCenter([lat, long]);
    // update map
  }, [position]);

  useEffect(() => {
    if (billboardId) {
      const foundBillboard = mockBillboards.find(
        (billboard) => billboard.id === billboardId,
      );
      if (!foundBillboard) return;
      setNewCenter([foundBillboard.lat, foundBillboard.lng]);
    }
  }, [billboardId]);

  if (!newCenter) {
    return;
  }

  return <UpdateCenter lat={newCenter[0]} long={newCenter[1]} />;
};

const UpdateCenter = ({ lat, long }: { lat: number; long: number }) => {
  const map = useMap();
  map.flyTo([lat, long], 15);
  return null;
};
