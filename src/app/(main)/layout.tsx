"use client";

import { ReactNode } from "react";

import NavigationBar from "@/components/modules/navigation-bar";
import { navigationLinksStudent } from "@/lib/const/navigation-links";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-background flex flex-col md:flex-row">
      <div className="border-r border-b md:w-12 md:min-h-screen md:border-b-0">
        <NavigationBar links={navigationLinksStudent} />
      </div>
      <div className="pl-10 pr-10 pt-5 w-full">{children}</div>
    </main>
  );
};

export default Layout;
