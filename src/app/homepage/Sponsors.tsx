import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import Button from "../_components/Button";
import sponsors from "../_constants/sponsors.json";
import Image from "next/image";
import AltButton from "../_components/AltButton";
import remoteLogo from "@/assets/images/remote_logo.svg";
import SponsorGoldBlob from "@/assets/icons/sponsor_gold_blob";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="my-[136px] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 mb-32 w-[400px] text-center font-koulen text-[120px] leading-none text-dark-blue">
        Sponsors
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Sponsors
        </span>
      </div>
      <div className="relative mb-10 flex flex-row">
        <div className="relative">
          <SponsorMainBlob className="top-[-80px]" />
          <div className="absolute left-[70px] top-[5px] w-[10px] font-alegreya_sans text-[32px] font-bold text-bordeux">
            Main Sponsor
          </div>
          <div className="absolute left-[240px] top-[100px] h-[200px] w-[286px] rotate-[-14.75deg] rounded-lg bg-white drop-shadow-[0_12px_12px_rgba(203,92,0,0.24)]">
            <Image
              src={remoteLogo}
              alt=""
              width={250}
              className="translate-x-[20px] translate-y-[15px] rotate-[14.75deg] transform"
            ></Image>
          </div>
        </div>
        <div className="ml-28 flex w-[600px] flex-col items-start">
          <div className="mb-8 w-[560px] text-left font-alegreya_sans text-2.5xl text-dark-blue">
            Alchemy Conf is powered by the support of our esteemed sponsors.
            <br />
            <br />
            <span className="font-bold">Want to join them?</span> <br />
            You get to support the Elixir community and elevate your brand. A
            win-win.
          </div>
          <AltButton
            className="font-medium"
            text="Sponsorship Prospectus"
            href="https://ti.to/subvisual/alchemy-conf-2025"
          />{" "}
        </div>
      </div>

      <div className="relative">
        <SponsorGoldBlob className="z-0" />
        <div className="absolute right-[200px] top-[100px] w-[10px] font-alegreya_sans text-2.5xl font-bold text-yellow">
          Gold Sponsors
        </div>
        <div className="w-100px absolute left-[100px] top-[100px] grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-[86px] py-[74px]">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`h-[200] w-[286px] rounded-lg bg-white`}
            >
              <Image
                src={sponsor.logo}
                width={286}
                height={200}
                alt={`Sponsor ${sponsor.id}`}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
