"use client";

import SideBar from "@/app/components/SideBar";
import { ReactNode } from "react";



export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full flex">
      <SideBar/>
      <main className="py-6 md:py-10 lg:pl-72 ">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}