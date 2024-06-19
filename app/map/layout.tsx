import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container min-h-screen bg-neutral-200">{children}</main>
  );
};

export default Layout;
