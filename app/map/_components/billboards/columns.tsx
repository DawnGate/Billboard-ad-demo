"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { ImplBillBoard } from "@/model";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <div className="flex w-[200px] items-center gap-2">
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
        <div className="line-clamp-1 w-[200px]">
          <p>{location}</p>
        </div>
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
