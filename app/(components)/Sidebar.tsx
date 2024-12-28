"use client";

import { Icon, LockIcon, LucideIcon, Search, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
    const [showProjects, setShowProjects] = React.useState(true);
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = `fixed flex flex-col h-full justify-between shadow-xl transition-all duration-300 h-full z-40 overflow-y-auto bg-white w-64 `;
    return (
        <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
                    <div className="text-xl font-bold text-gray-800">List</div>
                </div>
                {/* team */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                    <div className="ml-2 mr-5 hidden m-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block">
                        <div>
                            <h3 className="text-md font-bold tracking-wide">
                                SING TEAM
                            </h3>
                            <div className="mt-1 flex items-start gap-2">
                                <LockIcon className="mt-[0.1rem] h-3 w-3 to-gray-500" />
                                <p className="text-xs to-gray-500">Private</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive =
        pathName === href || (pathName === "/" && href === "/dashboard");
    const screenwidth = window.innerWidth;
};
