"use client";

import { useEffect, useState } from "react";

import {
  ChevronsRightIcon,
  ChevronsLeftIcon,
  CalendarIcon,
  BriefcaseBusinessIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

import { BillboardsTab } from "../billboards";

export const SidebarContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [tabValue, setTabValue] = useState("Billboards");

  const [open, setOpen] = useState(true);

  const handleChangeOpen = () => {
    setOpen((open) => !open);
  };

  const handleChangeTabValue = (tabValue: string) => {
    setTabValue(tabValue);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="h-full w-4" />;
  }

  return (
    <div
      className="w-6 flex-shrink-0 transition-all"
      style={{
        width: open ? 500 : 24,
        maxWidth: "50vw",
      }}
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute right-0 m-1 flex justify-end">
          <Button size="icon" className="h-4 w-4" onClick={handleChangeOpen}>
            {!open ? (
              <ChevronsRightIcon size={10} />
            ) : (
              <ChevronsLeftIcon size={10} />
            )}
          </Button>
        </div>
        {open && (
          <>
            <Tabs
              defaultValue={tabValue}
              onValueChange={handleChangeTabValue}
              className={cn("p-1 transition-opacity delay-100")}
            >
              <TabsList>
                <TabsTrigger value="Billboards">
                  <div className="flex items-center gap-1">
                    <CalendarIcon size={16} />
                    <p>Billboards</p>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="Companies">
                  <div className="flex items-center gap-1">
                    <BriefcaseBusinessIcon size={16} />
                    <p>Companies</p>
                  </div>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <BillboardsTab />
          </>
        )}
      </div>
    </div>
  );
};
