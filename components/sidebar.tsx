"use client";

import Link from "next/link";
import Image from "next/image";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/hi300.svg" height={200} width={200} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
           
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/hi100.svg" />
        <SidebarItem
          label="Leaderboards"
          href="/leaderboard"
          iconSrc="/hi150.svg"
        />
        
        <SidebarItem label="quests" href="/quests" iconSrc="/hi200.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/hi201.svg" />

        <SidebarItem
          label="Profile"
          href="/profile"
          iconSrc="/hi202.png"
        />
        <SidebarItem
          label="DuoLingo Math"
          href="/mathcourse"
          iconSrc="/math.svg"
        />
       
      </div>
      <div className="p-4 flex items-center">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={toggleProfileModal}
          >
            <UserButton afterSignOutUrl="/" />
            <span className="text-sm font-medium text-gray-400"></span>
          </div>
          {isProfileOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg p-8 shadow-md relative">
                <button
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={toggleProfileModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Content of the profile modal */}
                <p className="text-gray-800">
                  This is the profile modal content.
                </p>
              </div>
            </div>
          )}
        </ClerkLoaded>
      </div>
    </div>
  );
};
