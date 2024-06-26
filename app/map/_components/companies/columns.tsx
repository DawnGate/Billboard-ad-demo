"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { ImplCompany } from "@/model";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<ImplCompany>[] = [
  {
    accessorKey: "selects",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="p-1">
          <Checkbox />
        </div>
      );
    },
  },
  {
    accessorKey: "index",
    header: "Index",
    cell: ({ row }) => {
      return (
        <div>
          <p>{row.index + 1}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex w-[250px] items-center gap-2">
          <p>Name</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="ml-auto w-fit px-1"
          >
            <ArrowUpDown size={14} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const name = row.original.name;
      return (
        <div className="line-clamp-2 w-[250px]">
          <p>{name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "shortName",
    header: "Short Code",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => {
      const color = row.original.color;

      return (
        <div className="w-10 h-6 rounded-md" style={{
          background: color
        }}></div>
      );
    },
  },
];
