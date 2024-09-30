"use client";

import Link from "next/link";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ showSidebar, toggleSidebar }: SidebarProps) {
  return (
    <>
      <div
        className={`desktop:hidden fixed right-0 top-0 z-40 h-full w-full transform bg-bordeux shadow-lg ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between border-b-2 border-b-background p-4">
          <Link href="/" className="flex w-fit items-center gap-4 outline-none">
            <AlchemySquareIcon className="h-12 w-12" />
            <p className="font-koulen text-[25px] text-background">
              Alchemy Conf
            </p>
          </Link>
          <div className="h-6 w-6 cursor-pointer" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFF5DA"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <ul className="space-y-8 p-8 text-center font-zilla_slab text-xl text-background">
          <li>
            <Link href="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/alchemy-2025" onClick={toggleSidebar}>
              Alchemy Conf 2025
            </Link>
          </li>
          <li>
            <Link href="/practical" onClick={toggleSidebar}>
              Practical
            </Link>
          </li>
        </ul>
      </div>

      {showSidebar && (
        <div
          className="bg-black fixed inset-0 z-30 bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
