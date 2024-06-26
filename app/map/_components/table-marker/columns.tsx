"use client";

import { EditIcon, EyeIcon, MoreHorizontal, TrashIcon } from "lucide-react";

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

import { ImplMarker } from "@/model";
import Link from "next/link";
import { useEditMarkerModal } from "@/hooks/useEditMarkerModal";

export const columns: ColumnDef<ImplMarker>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <Link
          href={`/map?position=${data.lat},${data.lng}`}
          className="cursor-pointer text-sky-500 underline-offset-2 hover:underline"
        >
          {row.original.title}
        </Link>
      );
    },
  },
  // {
  //   accessorKey: "lat",
  //   header: "Latitude",
  // },
  // {
  //   accessorKey: "long",
  //   header: "Longitude",
  // },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <CellActions data={row.original} />;
    },
  },
];

const CellActions = ({ data }: { data: ImplMarker }) => {
  const markerStore = useMarkerStore();
  const editMarkerModal = useEditMarkerModal();

  const onDelete = () => {
    markerStore.deleteMarker(data.id);
    toast.success(`Deleted marker with title: ${data.title}`);
  };

  const onView = () => {
    console.log("View detail information of the current pointer");
    // router.push(`/map?position=${data.lat},${data.long}`);
  };

  const onEdit = () => {
    editMarkerModal.onOpen(data.id);
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
          onClick={onView}
          className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
        >
          View&nbsp;
          <EyeIcon size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onEdit}
          className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
        >
          Edit&nbsp;
          <EditIcon size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDelete}
          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
        >
          Delete&nbsp;
          <TrashIcon size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
