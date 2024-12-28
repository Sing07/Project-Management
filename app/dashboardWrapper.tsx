'use client'

import React, { useEffect } from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

     useEffect(() => {
         if (isDarkMode) {
             document.documentElement.classList.add("dark");
         } else {
             document.documentElement.classList.remove("dark");
         }
     });

    return (
        <div className="flex min-h-screen w-full bg-gray-50">
            <Sidebar />
            <main className={`flex w-full flex-col bg-gray-50 md:pl-64 ${isSidebarCollapsed ? "" : "md:pl-64"} `}>
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default function DashboardWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    );
}