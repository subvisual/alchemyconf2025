import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import Button from "./Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 mb-[80px] w-full select-none border-b-2 border-b-bordeux">
      <nav className="flex items-center justify-between bg-opacity-50 px-20 py-4 backdrop-blur-lg backdrop-filter">
        <Link href="/" className="flex w-fit items-center gap-4 outline-none">
          <AlchemySquareIcon className="h-12 w-12" />
          <p className="text-dark-blue font-koulen text-[25px]">Alchemy Conf</p>
        </Link>
        <ul className="flex space-x-10 font-zilla_slab text-[18px]">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/alchemy-2025">Alchemy Conf 2025</Link>
          </li>
          <li>
            <Link href="/practical">Practical</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
        </ul>
        <Button
          text="Tickets"
          href="https://ti.to/subvisual/alchemy-conf-2025"
        />
      </nav>
    </header>
  );
}
