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
        <Link href="/">About Organizers</Link>
        <Link href="/">About Alchemy Conf</Link>
        <Link href="/">Code of Conduct</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Practical</p>
        <Link href="/">Schedule</Link>
        <Link href="/">Move</Link>
        <Link href="/">Eat</Link>
        <Link href="/">Party & Mingle</Link>
        <Link href="/">Sleep</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Alchemy Conf 2025</p>
        <Link href="/">Talks & Speakers</Link>
        <Link href="/">Workshops</Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Sponsors</p>
        <Link href="/">
          Sponsorship
          <br /> Prospectus
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-[18px]">
        <p className="pb-6 text-[20px] font-semibold">Follow us</p>
        <Link href="https://x.com/alchemy_conf">X</Link>
      </div>
    </footer>
  );
}
