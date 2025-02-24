"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import Button from "./Button";
import OpenTabIcon from "@/assets/icons/icon_open_tab";

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ showSidebar, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showSidebar);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSidebar]);

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-40 h-full w-full transform bg-dark-blue shadow-lg transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } desktop:hidden`}
        aria-hidden={!showSidebar}
      >
        <div className="flex items-center justify-between p-4">
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
        <ul className="flex min-h-screen flex-col items-center space-y-10 bg-bordeux bg-opacity-30 bg-gradient-to-br from-bordeux via-dark-blue to-dark-blue p-8 text-center font-alegreya_sans text-xl text-background">
          <li
            className={`${pathname === "/about" ? "-ml-0.5 font-semibold" : ""} transition-all hover:font-semibold`}
          >
            <Link href="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li
            className={`${pathname === "/speakers" ? "-ml-0.5 font-semibold" : ""} transition-all hover:font-semibold`}
          >
            <Link href="/speakers" onClick={toggleSidebar}>
              Speakers
            </Link>
          </li>
          <li
            className={`${pathname === "/schedule" ? "-ml-0.5 font-semibold" : ""} transition-all hover:font-semibold`}
          >
            <Link href="/schedule" onClick={toggleSidebar}>
              Schedule
            </Link>
          </li>
          <li className={`${pathname === "/practical" ? "-ml-0.5 font-semibold" : ""} transition-all hover:font-semibold`}>
            <div className="flex items-center justify-center gap-1" onClick={toggleSidebar}>
            <Link href="https://subvisual.notion.site/alchemy-conf-hotel-discounts" target="_blank" rel="noreferrer noopener">
              Practical
            </Link>
            <OpenTabIcon color="#FFF5DA" sidebar={true} className="scale-[0.75]"/>
            </div>
          </li>
          <li>
            <Button
              className="text-center"
              text="Get Tickets"
              href="https://membrz.club/alchemyconf/events"
            />
          </li>
        </ul>
      </div>
      {showSidebar && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
