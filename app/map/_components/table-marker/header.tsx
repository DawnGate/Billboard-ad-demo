"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useNewMarkerModal } from "@/hooks/useNewMarkerModal";

export const Header = () => {
  const newMarkerModal = useNewMarkerModal();

  const handleNewMarker = () => {
    newMarkerModal.onOpen();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Markers</h3>
        <Button
          size="icon"
          className="h-6 w-6"
          variant="default"
          onClick={handleNewMarker}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
