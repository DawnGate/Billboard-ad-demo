import { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="bg-neutral-200">{children}</main>
      <Toaster />
    </>
  );
};

export default Layout;
