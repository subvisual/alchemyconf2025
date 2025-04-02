"use client";

import Link from "next/link";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import FooterBlob from "@/assets/icons/footer_blob";
import FooterBlobMobile from "@/assets/icons/footer_blob_mobile";
import SubvisualIcon from "@/assets/icons/subvisual_icon";
import { DISCORD_LINK, PRACTICAL_GUIDE_LINK } from "../_constants/links";
const navigationLinks = {
  about: {
    title: "ABOUT",
    links: [
      { href: "/about#conference", label: "About Alchemy Conf" },
      { href: PRACTICAL_GUIDE_LINK, label: "Practical Guide", external: true },
      { href: "/about#code-of-conduct", label: "Code of Conduct" },
    ],
  },
  schedule: {
    title: "SCHEDULE",
    links: [
      { href: "/schedule/workshops", label: "Workshops" },
      { href: "/schedule/talks", label: "Talks" },
    ],
  },
  sponsors: {
    title: "SPONSORS",
    links: [{ href: "/sponsorship.pdf", label: "Sponsorship\nProspectus" }],
  },
  social: {
    title: "FOLLOW US",
    links: [
      { href: "https://x.com/alchemy_conf", label: "X", external: true },
      { href: "https://bsky.app/profile/alchemyconf.com", label: "Bluesky", external: true },
      { href: DISCORD_LINK, label: "Discord", external: true },
    ],
  },
};

type NavigationSectionProps = {
  title: string;
  links: Array<{ href: string; label: string; external?: boolean }>;
};

const NavigationSection = ({ title, links }: NavigationSectionProps) => (
  <div className="flex w-fit flex-col gap-2">
    <h2 className="pb-1 font-koulen tablet:pb-6">{title}</h2>
    {links.map(({ href, label, external }) => (
      <Link
        key={href}
        href={href}
        target={external ? "_blank" : undefined}
        className="hover:underline"
      >
        {label}
      </Link>
    ))}
  </div>
);

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-[calc(50%-70px)] -z-10 -translate-x-1/2 transform">
        <FooterBlob className="hidden w-full max-w-[1440px] tablet:block" />
        <FooterBlobMobile className="flex tablet:hidden" />
      </div>

      <footer className="z-50 mx-auto flex max-w-[1440px] flex-col justify-around bg-none p-10 pb-8 font-alegreya_sans text-lg font-light text-background tablet:flex-row tablet:p-20 tablet:pb-8 tablet:text-xl desktop:pb-2">
        <Link
          href="/"
          className="mb-4 flex h-fit translate-y-[-10px] items-center gap-4 pr-12 outline-none hover:opacity-80 tablet:mb-0"
        >
          <AlchemySquareIcon className="h-[48px] w-[48px] flex-shrink-0" />
          <span className="text-nowrap font-koulen text-[25px]">
            Alchemy Conf
          </span>
        </Link>

        <nav className="flex flex-col gap-8 tablet:flex-row tablet:gap-24">
          {Object.values(navigationLinks).map((section) => (
            <NavigationSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </nav>
      </footer>

      <div className="flex items-center justify-center pb-6 font-alegreya_sans text-base text-background desktop:pt-16">
        Powered by{" "}
        <a
          className="ml-2 flex items-center underline hover:opacity-80"
          target="_blank"
          href="https://subvisual.com/"
        >
          <SubvisualIcon className="mb-1 h-4 w-auto" aria-label="Subvisual" />
          <span className="sr-only">Subvisual</span>
        </a>
      </div>
    </div>
  );
}
 
