"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useNewCategoryModal } from "@/hooks/useNewCategoryModal";

export const Header = () => {
  const newCategoryModal = useNewCategoryModal();

  const handleNewCategory = () => {
    newCategoryModal.onOpen();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Categories</h3>
        <Button
          size="icon"
          className="h-6 w-6"
          variant="default"
          onClick={handleNewCategory}
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
