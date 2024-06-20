"use client";
import { useMarkerStore } from "@/hooks/useMarkerStore";

import { DataTable } from "@/components/DataTable";

import { columns } from "./columns";
import { Header } from "./header";

export const MarkerTable = () => {
  const markers = useMarkerStore((state) => state.markers);

  return (
    <>
      <Header />
      <div className="py-2">
        <DataTable columns={columns} data={markers} />
      </div>
    </>
  );
};
