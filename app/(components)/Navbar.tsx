import { Menu, Search, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import { setIsSidebarCollapsed } from "@/state";

export default function Navbar() {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 ">
            {/* Search Bar */}
            <div className="flex items-center gap-8">
                {!isSidebarCollapsed ? null : (
                    <button
                        onClick={() =>
                            dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
                        }
                    >
                      <Menu className="h-8 w-8" />
                    </button>
                )}
                <div className="relative flex h-min w-[200px]">
                    <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer" />
                    <input
                        className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none "
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-end">
                <Link
                    href="/settings"
                    className="h-min w-min rounded p-2 hover:bg-gray-100"
                >
                    <Settings className="h-6 w-6 cursor-pointer" />
                </Link>
            </div>
        </div>
    );
}