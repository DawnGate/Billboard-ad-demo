"use client";
import { useMarkerStore } from "@/hooks/useMarkerStore";

import { DataTable } from "@/components/DataTable";

import { columns } from "./columns";
import { Header } from "./header";

export const CategoryTable = () => {
  const categories = useMarkerStore((state) => state.categories);

  return (
    <>
      <Header />
      <div className="py-2">
        <DataTable columns={columns} data={categories} />
      </div>
    </>
  );
};
