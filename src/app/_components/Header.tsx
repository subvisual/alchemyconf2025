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

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className="fixed left-0 top-0 z-50 w-full select-none border-b-2 border-b-bordeux">
      <nav className="flex items-center justify-between bg-opacity-50 px-6 py-4 backdrop-blur-lg backdrop-filter tablet:px-20">
        <Link href="/" className="flex w-fit items-center gap-4 outline-none">
          <AlchemySquareIcon className="h-12 w-12" />
          <p className="hidden font-koulen text-[25px] text-dark-blue tablet:flex">
            Alchemy Conf
          </p>
        </Link>

        <ul className="hidden gap-6 font-zilla_slab text-[18px] font-medium text-dark-blue desktop:flex">
          <li
            className={`${
              pathname === "/about" && "-ml-0.5 font-semibold"
            } transition-all hover:text-bordeux`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathname === "/alchemy-2025" &&
              "-ml-0.5 font-semibold text-bordeux"
            } flex items-center gap-1 transition-all hover:text-bordeux`}
          >
            <Link href="/alchemy-2025">Alchemy Conf 2025</Link>
            <DropdownArrow width={12} height={6} />
          </li>
          <li
            className={`${
              pathname === "/practical" && "-ml-0.5 font-semibold text-bordeux"
            } transition-all hover:text-bordeux`}
          >
            <Link href="/practical">Practical</Link>
          </li>
          <li
            className={`${
              pathname === "/testing" && "-ml-0.5 font-semibold text-bordeux"
            } transition-all hover:text-bordeux`}
          >
            <Link href="/testing">Testing</Link>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <Button
            className="hidden bg-bordeux text-xl font-medium tablet:flex"
            text="Tickets"
            href="https://ti.to/subvisual/alchemy-conf-2025"
          />
          <Burguer
            className="h-6 w-6 hover:cursor-pointer desktop:hidden"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </header>
  );
}
