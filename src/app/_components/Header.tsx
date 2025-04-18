"use client";

import { useState } from "react";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Burguer from "@/assets/icons/burguer";
import Sidebar from "./Sidebar";

export default function Header() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  const getNavLinkClass = (path: string) => 
    `tablet:py-7 transition-all text-center w-full h-full block ${
      pathname === path
        ? "bg-bordeux text-background border-transparent"
        : pathname === "/" 
          ? "border-transparent hover:bg-bordeux hover:text-background"  
          : "border-transparent hover:bg-gradient-to-t from-bordeux/15 to-background/0"
    }`;

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className="fixed left-0 top-0 z-50 w-full select-none border-b-2 border-b-bordeux bg-opacity-50 px-6 py-4 tablet:py-0 backdrop-blur-lg backdrop-filter tablet:px-24 desktop:px-52">
      <div className="">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="flex w-fit items-center gap-4 outline-none"
            >
              <AlchemySquareIcon className="h-12 w-12" />
              <p className="hidden font-koulen text-[25px] text-bordeux tablet:flex">
                Alchemy Conf
              </p>
            </Link>
            <ul className="hidden font-alegreya_sans text-center text-xl font-medium leading-[30px] text-dark-blue desktop:flex">
              <li>
                <div className="w-[140px]">
                  <Link 
                    href="/about" 
                    className={`text-center ${getNavLinkClass("/about")}`}
                >
                  About
                </Link>
                </div>
              </li>
              <li>
                <div className="w-[140px]">
                  <Link 
                    href="/speakers" 
                    className={`${getNavLinkClass("/speakers")}`}
                  >
                    Speakers
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 tablet:py-4 tablet:gap-8">
            <Button
              text="Get Tickets"
              href="https://membrz.club/alchemyconf/events/alchemy-conference-2025"
            />
            <Burguer
              className="h-6 w-6 hover:cursor-pointer desktop:hidden"
              onClick={toggleSidebar}
            />
          </div>
        </nav>
      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </header>
  );
}
