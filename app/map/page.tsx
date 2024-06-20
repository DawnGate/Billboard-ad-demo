import { Skeleton } from "@/components/ui/skeleton";

import { ListMarkerSidebar } from "./_components/sidebar-marker";

import dynamic from "next/dynamic";

import { ModalProvider } from "@/providers/ModalProvider";

const LazyMap = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-full w-full items-center justify-center">
      <p className="text-3xl font-bold text-white">Loading...</p>
    </Skeleton>
  ),
});

const Page = () => {
  return (
    <div className="h-screen w-screen">
      <LazyMap />
      <ListMarkerSidebar />
      <ModalProvider />
    </div>
  );
};

export default Page;
