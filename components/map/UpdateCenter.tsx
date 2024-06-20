"use client";

import { isNumeric } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export const UpdateCenterBySearchParams = () => {
  const searchParams = useSearchParams();

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

  if (!newCenter) {
    return;
  }

  return <UpdateCenter lat={newCenter[0]} long={newCenter[1]} />;
};

const UpdateCenter = ({ lat, long }: { lat: number; long: number }) => {
  const map = useMap();
  map.panTo([lat, long]);
  return null;
};
