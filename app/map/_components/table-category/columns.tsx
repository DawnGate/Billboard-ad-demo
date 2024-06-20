"use client";

import { MoreHorizontal, TrashIcon } from "lucide-react";

import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";

import { useMarkerStore } from "@/hooks/useMarkerStore";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ImplCategory } from "@/model";

export const columns: ColumnDef<ImplCategory>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => {
      return (
        <div
          className="h-[24px] w-[100px] rounded-md"
          style={{ backgroundColor: row.original.color }}
        ></div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <CellActions data={row.original} />;
    },
  },
];

const CellActions = ({ data }: { data: ImplCategory }) => {
  const markerStore = useMarkerStore();
  const onDelete = () => {
    markerStore.deleteCategory(data.id);
    toast.success(`Deleted category with name: ${data.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-menu">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={onDelete}
          className="hover:bg-destructive hover:text-destructive-foreground cursor-pointer"
        >
          Delete&nbsp;
          <TrashIcon size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
