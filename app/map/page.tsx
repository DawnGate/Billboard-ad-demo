import { Skeleton } from "@/components/ui/skeleton";

import dynamic from "next/dynamic";

import { ModalProvider } from "@/providers/ModalProvider";
import { SidebarContent } from "./_components/sidebar-content";
import { Header } from "./_components/Header";
import { SheetProvider } from "@/providers/SheetProvider";

const LazyMap = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-full w-full items-center justify-center">
      <p className="text-3xl font-bold text-white">Loading...</p>
    </Skeleton>
  ),
});

const HEADER_HEIGHT = 64;

const Page = () => {
  return (
    <>
      <Header height={HEADER_HEIGHT} />
      <div
        className="flex"
        style={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <SidebarContent />
        <LazyMap />
      </div>
      <ModalProvider />
      <SheetProvider />
    </>
  );
};

export default Page;
