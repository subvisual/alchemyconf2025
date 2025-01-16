import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import Button from "../_components/Button";
import sponsors from "../_constants/sponsors.json";
import Image from "next/image";
import AltButton from "../_components/AltButton";
import remoteLogo from "@/assets/images/remote_logo.png";
import logo1 from "@/assets/images/marmela_logo.svg";
import logo2 from "@/assets/images/startupbraga_logo.png";
import logo3 from "@/assets/images/cesium_logo.svg";
import logo4 from "@/assets/images/getbus_logo.png";
import SponsorGoldBlob from "@/assets/icons/sponsor_gold_blob";

export default function Sponsors() {
  const logoImages = [logo1, logo2, logo3, logo4];
  let itemsPerRow = 2;

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
      className="mb-48 mt-32 flex flex-col items-center justify-center tablet:mb-28 desktop:mb-48"
    >
      <h1 className="relative pb-20 text-center font-sofia_sans_extra_condensed font-extrabold uppercase text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Sponsors
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] tablet:translate-x-1 tablet:translate-y-1 text-[#7D1D3F3D]">
          Sponsors
        </span>
      </h1>

      <div className="relative items-center mb-10 flex flex-col desktop:flex-row">
        <div className="relative">
          <SponsorMainBlob className="left-[45px] top-[-80px] mobile:translate-x-[-40px] mobile:scale-[0.8] tablet:translate-x-[0px] tablet:scale-[1.0]" />
          <div className="absolute left-[120px] top-[5px] w-[10px] font-alegreya_sans font-bold text-bordeux mobile:text-[20px] tablet:text-[24px] desktop:text-[32px]">
            Main Sponsor
          </div>
          <a href="https://remote.com/" target="_blank">
            <div className="absolute scale-[0.7] left-[190px] top-[100px] h-[200px] w-[286px] rotate-[-14.75deg] rounded-lg bg-white drop-shadow-[0_12px_12px_rgba(203,92,0,0.24)] tablet:scale-[1.0] tablet:left-[250px]">
              <Image
                src={remoteLogo}
                alt="Remote Logo"
                width={250}
                className="translate-x-[20px] translate-y-[55px] rotate-[14.75deg] transform"
              ></Image>
            </div>
          </a>
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
              href="/sponsorship.pdf"
            />{" "}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="relative hidden desktop:flex">
        <SponsorGoldBlob className="z-0" />
        <div className="absolute right-[220px] top-[130px] w-[10px] font-alegreya_sans text-2.5xl font-bold text-yellow">
          Partners
        </div>{" "}
        <div className="absolute left-[180px] top-[100px] space-y-[86px] py-[74px]">
          {" "}
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 gap-x-6 desktop:grid-cols-2 ${rowIndex % 2 !== 0 ? "translate-x-[120px]" : ""} transition-transform`}
            >
              {row.map((sponsor: any) => (
                <a href={sponsor.link} target="_blank" key={sponsor.id}>
                  <div
                    key={sponsor.id}
                    className="flex h-[200px] w-[286px] items-center justify-center rounded-lg bg-white drop-shadow-xl"
                  >
                    <Image
                      src={logoImages[sponsor.id - 1]}
                      width={286}
                      height={200}
                      alt={`Sponsor ${sponsor.name}`}
                      className="h-auto w-full object-contain"
                      style={{
                        scale: `${sponsor.scale}`,
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* tablet / mobile */}
      <div className="relative desktop:hidden">
        <SponsorGoldBlob className="tablet: z-0 translate-x-[40px] tablet:translate-y-[-90px] tablet:scale-[0.8]" />
        <div className="absolute left-1/2 top-[140px] -translate-x-1/2 font-alegreya_sans text-[20px] font-bold text-yellow tablet:text-[24px] desktop:text-[32px]">
          Partners
        </div>
        <div className="absolute left-1/2 top-[215px] z-10 -translate-x-1/2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 transition-transform mobile:grid-cols-1 tablet:grid-cols-2">
            {sponsors.map((sponsor) => (
              <a href={sponsor.link} target="_blank" key={sponsor.id}>
                <div
                  key={sponsor.id}
                  className="flex h-[150px] w-[250px] items-center justify-center rounded-lg bg-white drop-shadow-xl tablet:w-[220px]"
                >
                  <Image
                    src={logoImages[sponsor.id - 1]}
                    width={286}
                    height={200}
                    alt={`Sponsor ${sponsor.name}`}
                    className="h-auto w-full object-contain"
                    style={{
                      scale: `${sponsor.scale}`,
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
