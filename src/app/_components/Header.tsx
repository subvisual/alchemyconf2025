"use client";

import { useState } from "react";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownArrow from "@/assets/icons/dropdown_arrow";
import Burguer from "@/assets/icons/burguer";
import Sidebar from "./Sidebar";

export default function Header() {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className="fixed left-0 top-0 z-50 w-full select-none border-b border-b-bordeux bg-opacity-50 px-6 py-4 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto max-w-[1440px]">
        <nav className="flex items-center justify-between tablet:px-20">
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

            <ul className="hidden gap-6 font-alegreya_sans text-xl font-medium leading-[30px] text-dark-blue desktop:flex">
              <li
                className={`${
                  pathname === "/about" && "-ml-0.5 font-semibold text-bordeux"
                } transition-all hover:text-bordeux`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`${
                  pathname === "/alchemy-2025" &&
                  "-ml-0.5 font-semibold text-bordeux"
                } flex items-center gap-1 transition-all hover:text-bordeux`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/alchemy-2025">Alchemy Conf 2025</Link>
                <DropdownArrow
                  width={12}
                  height={6}
                  color={isHovered ? "#7D1D3F" : "#003049"}
                />
              </li>
              <li
                className={`${
                  pathname === "/practical" &&
                  "-ml-0.5 font-semibold text-bordeux"
                } flex items-center gap-1 transition-all hover:text-bordeux`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/practical">Practical</Link>
                <DropdownArrow
                  width={12}
                  height={6}
                  color={isHovered ? "#7D1D3F" : "#003049"}
                />
              </li>{" "}
            </ul>
          </div>

          <div className="flex items-center gap-4 tablet:gap-8">
            <Button
              text="Get Tickets"
              href="https://ti.to/subvisual/alchemy-conf-2025"
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
