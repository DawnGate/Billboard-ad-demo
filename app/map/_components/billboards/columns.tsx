"use client";

import { ReactNode } from "react";

import { ArrowUpDown } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { ImplBillBoard } from "@/model";
import { Badge } from "@/components/ui/badge";

import { useBillboardStore } from "@/hooks/useBillboardStore";

const LocationCell = ({
  children,
  billboardId,
}: {
  children: ReactNode;
  billboardId: string;
}) => {
  const selectBillboard = useBillboardStore((state) => state.selectBillboard);
  const handleClick = () => {
    selectBillboard(billboardId);
  };
  return (
    <Button variant="link" className="cursor-pointer" onClick={handleClick}>
      {children}
    </Button>
  );
};

export const columns: ColumnDef<ImplBillBoard>[] = [
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
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location = row.original.location;
      return (
        <LocationCell billboardId={row.original.id}>
          <div className="line-clamp-1 w-[200px]">
            <p>{location}</p>
          </div>
        </LocationCell>
      );
    },
  },
  {
    accessorKey: "booking",
    header: "Status",
    cell: ({ row }) => {
      const booking = row.original.booking;

      let content;

      if (booking) {
        content = (
          <Badge className="bg-green-500 text-white hover:bg-green-500">
            Booking
          </Badge>
        );
      } else {
        content = <Badge variant="secondary">Available</Badge>;
      }

      return <div>{content}</div>;
    },
  },
  {
    accessorKey: "cost",
    header: ({ column }) => {
      return (
        <div className="flex w-20 items-center gap-2">
          <p>Cost</p>
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
      const cost = row.original.cost;

      return (
        <div className="w-20">
          <p>{cost} $</p>
        </div>
      );
    },
  },
  {
    accessorKey: "discount",
    header: ({ column }) => {
      return (
        <div className="flex w-20 items-center gap-2">
          <p>Discount</p>
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
      const discount = Math.round(row.original.discount * 100);

      return (
        <div className="w-20">
          {!!discount && (
            <p className="font-medium text-destructive">-{discount}%</p>
          )}
        </div>
      );
    },
  },
];
