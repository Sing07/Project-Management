"use client";

import { Briefcase, Home, Icon, LockIcon, LucideIcon, Search, Settings, Settings2, User, Users } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import Link from "next/link";
import { isatty } from "tty";

export default function Sidebar() {
    const [showProjects, setShowProjects] = React.useState(true);
    const [showPriority, setShowPriority] = React.useState(true);

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
  `;

    return (
        <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        List
                    </div>
                </div>
                {/* team */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                    <div>
                        <h3 className="text-md font-bold tracking-wide">
                            Sing TEAM
                        </h3>
                        <div className="mt-1 flex items-start gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>
                {/* navbar links */}
                <nav className="z-10 w-full">
                    <SidebarLink icon={Home} label="Home" href="/" />
                    <SidebarLink
                        icon={Briefcase}
                        label="Timeline"
                        href="/timeline"
                    />
                    <SidebarLink icon={Search} label="Search" href="/search" />
                    <SidebarLink
                        icon={Settings2}
                        label="Settings"
                        href="/settings"
                    />
                    <SidebarLink icon={User} label="User" href="/user" />
                    <SidebarLink icon={Users} label="Users" href="/users" />
                </nav>
            </div>
        </div>
    );
}

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    // isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive =
        pathName === href || (pathName === "/" && href === "/dashboard");
    const screenwidth = window.innerWidth;

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    return (
        <Link href={href} className="w-full">
            <div
                className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
                    isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
                } justify-start px-8 py-3`}
            >
                {isActive && (
                    <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
                )}
                <Icon className="h-6 w-6 text-gray-800" />
                <span className={`font-medium text-gray-800 dark:text-gray-100`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};
