"use client";

import { useEffect, useState } from "react";

import { NewCategoryModal } from "@/components/modals/NewCategoryModal";

import { NewMarkerModal } from "@/components/modals/NewMarkerModal";
import { EditMarkerModal } from "@/components/modals/EditMarkerModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <NewMarkerModal />
      <EditMarkerModal />
      <NewCategoryModal />
    </>
  );
};
