import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import Button from "../_components/Button";
import sponsors from "../_constants/sponsors.json";
import Image from "next/image";
import AltButton from "../_components/AltButton";
import remoteLogo from "@/assets/images/remote_logo.svg";
import SponsorGoldBlob from "@/assets/icons/sponsor_gold_blob";

export default function Sponsors() {
  let itemsPerRow = 3;

  const chunkArray = (arr: any, size: number) => {
    let chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const rows = chunkArray(sponsors, itemsPerRow);

  return (
    <section
      id="sponsors"
      className="my-[136px] flex flex-col items-center justify-center"
    >
      <h1 className="relative pb-20 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Sponsors
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Sponsors
        </span>
      </h1>

      <div className="relative mb-10 flex flex-col desktop:flex-row">
        <div className="relative">
          <SponsorMainBlob className="left-[45px] top-[-80px]" />
          <div className="absolute left-[120px] top-[5px] w-[10px] font-alegreya_sans text-[28px] font-bold text-bordeux tablet:text-[32px]">
            Main Sponsor
          </div>
          <div className="absolute left-[190px] top-[100px] h-[200px] w-[286px] rotate-[-14.75deg] rounded-lg bg-white drop-shadow-[0_12px_12px_rgba(203,92,0,0.24)] tablet:left-[250px]">
            <Image
              src={remoteLogo}
              alt=""
              width={250}
              className="translate-x-[20px] translate-y-[15px] rotate-[14.75deg] transform"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col items-start desktop:ml-28">
          <div className="mb-8 flex flex-col items-center gap-4 px-[90px] text-center font-alegreya_sans text-xl text-dark-blue tablet:px-0 tablet:text-2xl desktop:items-start desktop:gap-8 desktop:text-left desktop:text-3xl">
            Alchemy Conf is powered by the support of our esteemed sponsors.
            <br />
            <br />
            <span className="font-bold">Want to join them?</span> <br />
            You get to support the Elixir community and elevate your brand. A
            win-win.
            <AltButton
              className="w-fit font-medium"
              text="Sponsorship Prospectus"
              href="https://ti.to/subvisual/alchemy-conf-2025"
            />{" "}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="relative hidden desktop:flex">
        <SponsorGoldBlob className="z-0" />
        <div className="absolute right-[220px] top-[130px] w-[10px] font-alegreya_sans text-2.5xl font-bold text-yellow">
          Gold Sponsors
        </div>{" "}
        <div className="absolute left-[-10px] top-[100px] space-y-[86px] py-[74px]">
          {" "}
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-x-6 desktop:grid-cols-3 ${rowIndex % 2 !== 0 ? "translate-x-[120px]" : ""} transition-transform`}
            >
              {row.map((sponsor: any) => (
                <div
                  key={sponsor.id}
                  className="h-[200px] w-[286px] rounded-lg bg-white drop-shadow-xl"
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
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className="relative desktop:hidden">
        <SponsorGoldBlob className="z-0" />
        <div className="absolute left-1/2 top-[140px] -translate-x-1/2 font-alegreya_sans text-2.5xl font-bold text-yellow">
          Gold Sponsors
        </div>
        <div className="absolute left-1/2 top-[215px] z-10 -translate-x-1/2">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 transition-transform mobile:grid-cols-3 tablet:grid-cols-2">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="h-[100px] w-[100px] rounded-lg bg-white drop-shadow-xl tablet:w-[220px]"
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
      </div>
    </section>
  );
}
