import Link from "next/link";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";

export default function Footer() {
  return (
    <footer className="z-50 flex w-full justify-between bg-bordeux p-20 pr-32 font-zilla_slab text-background">
      <Link href="/" className="flex h-fit gap-4 outline-none">
        <AlchemySquareIcon className="h-12 w-12" />
        <p className="font-koulen text-[25px]">Alchemy Conf</p>
      </Link>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">About</p>
        <Link href="/about">About Organizers</Link>
        <Link href="/about">About Alchemy Conf</Link>
        <Link href="/about">Code of Conduct</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Practical</p>
        <Link href="/under-construction">Schedule</Link>
        <Link href="/practical/move">Move</Link>
        <Link href="/under-construction">Eat</Link>
        <Link href="/under-construction">Party & Mingle</Link>
        <Link href="/practical/sleep">Sleep</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Alchemy Conf 2025</p>
        <Link href="/under-construction">Talks & Speakers</Link>
        <Link href="/under-construction">Workshops</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Sponsors</p>
        <Link href="/under-construction">
          Sponsorship
          <br /> Prospectus
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Follow us</p>
        <Link href="https://x.com/alchemy_conf" target="_blank">
          X
        </Link>
      </div>
    </footer>
  );
}
