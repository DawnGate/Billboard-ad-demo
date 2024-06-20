"use client";

import { useEffect, useState } from "react";

import { ChevronsLeftIcon, ChevronsRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContentWithoutClose,
  SheetHeader,
} from "@/components/ui/sheet";
import { MarkerTable } from "../table-marker/MarkerTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryTable } from "../table-category/CategoryTable";

export const ListMarkerSidebar = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        size="icon"
        variant="outline"
        className="z-sidebar fixed right-1 top-1"
        onClick={handleOpen}
      >
        <ChevronsLeftIcon />
      </Button>
      <Sheet open={open} onOpenChange={handleToggle}>
        <SheetContentWithoutClose side="right" className="z-sidebar">
          <SheetHeader>
            <div className="h-[24px]" />
          </SheetHeader>
          <Tabs defaultValue="markers">
            <TabsList>
              <TabsTrigger value="markers">Markers</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>
            <TabsContent value="markers">
              <MarkerTable />
            </TabsContent>
            <TabsContent value="categories">
              <CategoryTable />
            </TabsContent>
          </Tabs>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-4"
            onClick={handleClose}
          >
            <ChevronsRightIcon />
            <span className="sr-only">Close</span>
          </Button>
        </SheetContentWithoutClose>
      </Sheet>
    </>
  );
};
