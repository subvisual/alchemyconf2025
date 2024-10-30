import Link from "next/link";
import AlchemySquareIcon from "@/assets/icons/alchemy_square_icon";
import FooterBlob from "@/assets/icons/footer_blob";

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-[calc(50%-70px)] -z-10 -translate-x-1/2 transform">
        <FooterBlob className="w-full max-w-[1440px] translate-y-[0px] overflow-visible tablet:translate-y-[100px]" />
      </div>
      <footer className="z-50 mx-auto flex max-w-[1440px] flex-col justify-around bg-none p-10 font-alegreya_sans text-lg font-light text-background tablet:flex-row tablet:p-20 tablet:text-xl">
        <Link
          href="/"
          className="mb-4 flex h-fit translate-y-[-10px] items-center gap-4 outline-none tablet:mb-0"
        >
          <AlchemySquareIcon className="h-[48px] w-[48px] flex-shrink-0" />
          <p className="text-nowrap font-koulen text-[25px]">Alchemy Conf</p>
        </Link>
        <div className="flex flex-col gap-8 tablet:flex-row tablet:gap-24">
          <div className="w-fit">
            <p className="pb-1 font-koulen tablet:pb-6">SPONSORS</p>
            <Link href="/sponsorship.pdf">
              Sponsorship
              <br /> Prospectus
            </Link>
          </div>
          <div className="w-fit">
            <p className="pb-1 font-koulen tablet:pb-6">FOLLOW US</p>
            <Link href="https://x.com/alchemy_conf" target="_blank">
              X
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
