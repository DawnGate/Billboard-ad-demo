"use client";

import { BillboardDetailSheet } from "@/components/sheets/BillboardDetailSheet";
import { useEffect, useState } from "react";

export const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <BillboardDetailSheet />
    </>
  );
};
