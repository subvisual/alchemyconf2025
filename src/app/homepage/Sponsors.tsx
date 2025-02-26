"use client";

// import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import sponsors from "../_constants/sponsors.json";
import AltButton from "../_components/AltButton";
import remoteLogo from "@/assets/images/remote_logo.png";
import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import SponsorGoldBlob from "@/assets/icons/sponsor_gold_blob";
import SponsorStoneBlob from "@/assets/icons/sponsor_stone_blob";
import sponsorLogos from "../_constants/sponsors_logos";
import SponsorBlobs from "@/assets/icons/sponsor_blobs";
import useScreenSize, { ScreenSize } from "@/hooks/useScreenSize";


type SponsorLogoKey = keyof typeof sponsorLogos;

export default function Sponsors() {
  const screenSize = useScreenSize();
  const itemsPerRow = screenSize === ScreenSize.Small ? 2 : 3;

  const chunkArray = (
    arr: Array<{
      id: number;
      name: string;
      logo: SponsorLogoKey;
      link: string;
      scale: number;
      x?: string;
      y?: string;
    }>,
    size: number,
  ) => {
    let chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const partnersWithNumberScale = sponsors.partners.map((partner) => ({
    ...partner,
    scale: Number(partner.scale),
    logo: partner.logo as SponsorLogoKey,
  }));
  const coffeeBreakWithNumberScale = sponsors.breaks.map((breakItem) => ({
    ...breakItem,
    scale: Number(breakItem.scale),
    logo: breakItem.logo as SponsorLogoKey,
  }));

  const partnerRows = chunkArray(partnersWithNumberScale, itemsPerRow);

  const coffeeBreakRows = chunkArray(coffeeBreakWithNumberScale, itemsPerRow);
  return (
    <section
      id="sponsors"
      className="mb-48 mt-32 flex flex-col items-center justify-center tablet:mb-28 desktop:mb-48"
    >
      <h1 className="tablet:pb-22 relative pb-16 text-center font-sofia_sans_extra_condensed text-[50px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Sponsors
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
          Sponsors
        </span>
      </h1>

      {/* MAIN SPONSOR */}
      <div className="relative mb-16 flex w-full max-w-[1440px] flex-col items-center tablet:mb-6 desktop:mb-28 desktop:flex-row">
        <div className="relative mobile:mb-[-120px] tablet:mb-[-10px] desktop:mb-0">
          <div className="left-[140px] text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[24px] tablet:top-[-10px] tablet:text-[28px] desktop:left-[120px] desktop:top-[45px] desktop:text-[32px]">
            Main Sponsor
          </div>
          <a href={sponsors.main[0].link} target="_blank">
            <SponsorMainBlob
              imageSrc={remoteLogo.src}
              className="left-[40px] top-[-50px] mobile:translate-x-[-40px] mobile:scale-[0.6] tablet:left-[45px] tablet:top-[0px] tablet:scale-[0.8] desktop:top-[30px] desktop:scale-[1.0]"
            />
          </a>
        </div>
        <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center desktop:ml-28">
          <div className="mb-8 flex flex-col items-center gap-2 text-center font-alegreya_sans text-xl text-dark-blue tablet:px-0 tablet:text-2xl desktop:items-start desktop:gap-8 desktop:text-left desktop:text-3xl">
            Alchemy Conf is powered by the support of our esteemed sponsors.
            <br />
            <br />
            <span className="font-bold">Want to join them?</span>
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

      {/* GOLD SPONSORS */}
      <div className="relative mobile:mb-[-300px] tablet:mb-16 desktop:mb-32">
        <div className="text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[24px] tablet:absolute tablet:left-[170px] tablet:top-[120px] tablet:text-[28px] desktop:left-[100px] desktop:top-[80px] desktop:text-[32px]">
          Gold Sponsors
        </div>
        <SponsorGoldBlob className="top-[-180px] mobile:scale-[0.4] tablet:top-0 tablet:scale-[0.9] desktop:scale-[1.1]" />
        <div className="absolute left-1/2 top-[80px] z-10 -translate-x-1/2 tablet:top-[215px]">
          <div className="grid w-[340px] gap-x-[0px] mobile:grid-cols-2 tablet:ml-[-60px] tablet:w-[800px] tablet:grid-cols-3 tablet:gap-x-20 desktop:ml-0 desktop:w-[1000px] desktop:gap-x-20">
            {sponsors.gold.map((sponsor) => (
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={sponsor.id}>
                <SponsorBlobs
                  imageSrc={sponsorLogos[sponsor.logo as SponsorLogoKey].src}
                  id={sponsor.id.toString()}
                  className="scale-[0.5] tablet:scale-[0.8] desktop:scale-[1.0]"
                  blobVariant={sponsor.id - 1}
                  scale={Number(sponsor.scale)}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* STONE SPONSORS */}
      <div className="relative mobile:mb-[-480px] tablet:mb-16 desktop:mb-32">
        <div className="text-center font-alegreya_sans font-bold text-background mobile:translate-y-[70px] mobile:text-[24px] tablet:absolute tablet:left-[260px] tablet:top-[140px] tablet:text-[28px] desktop:left-[180px] desktop:top-[70px] desktop:text-[32px]">
          Stone Sponsors
        </div>
        <SponsorStoneBlob className="top-[-320px] mobile:scale-[0.5] tablet:top-0 tablet:scale-[0.9] desktop:scale-[1.1]" />
        <div className="absolute left-1/2 top-[100px] z-10 -translate-x-1/2 tablet:top-[300px] desktop:top-[275px]">
          <div className="grid w-[340px] gap-x-[0px] mobile:grid-cols-2 tablet:ml-[-60px] tablet:w-[800px] tablet:grid-cols-3 tablet:gap-x-20 desktop:ml-0 desktop:w-[1000px] desktop:gap-x-20">
            {sponsors.stone.map((sponsor) => (
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={sponsor.id}>
                <SponsorBlobs
                  imageSrc={sponsorLogos[sponsor.logo as SponsorLogoKey].src}
                  id={sponsor.id.toString()}
                  className="scale-[0.5] tablet:scale-[0.8] desktop:scale-[1.0]"
                  blobVariant={sponsor.id - 1}
                  scale={Number(sponsor.scale)}
                  typeStart={1}
                  x={sponsor.x}
                  y={sponsor.y}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COFFEE BREAK */}
      <div className="relative">
        {/* <div className="relative hidden desktop:flex"> */}
        {/* <SponsorGoldBlob color="bg-background" className="z-0" /> */}
        <div className="top-[60px] text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[24px] tablet:absolute tablet:left-[20px] tablet:text-[28px] desktop:left-[20px] desktop:top-[0px] desktop:text-[32px]">
          Coffee Break Sponsors
        </div>
        <div className="top-[100px] ml-[-50px] space-y-[-80px] tablet:left-[180px] tablet:space-y-[60px] tablet:py-[124px] desktop:space-y-[86px]">
          {coffeeBreakRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-2 gap-x-0 tablet:grid-cols-3 tablet:gap-x-20 ${rowIndex % 2 !== 0 ? "tablet:translate-x-[120px]" : ""} transition-transform`}
            >
              {row.map((sponsor) => (
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={sponsor.id}>
                  <SponsorBlobs
                    imageSrc={sponsorLogos[sponsor.logo as SponsorLogoKey].src}
                    id={sponsor.id.toString()}
                    className="scale-[0.5] tablet:scale-[0.8] desktop:scale-[1.0]"
                    blobVariant={sponsor.id - 1}
                    scale={Number(sponsor.scale)}
                    typeStart={1}
                    x={sponsor.x}
                    y={sponsor.y}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS */}
      <div className="relative">
        {/* <div className="relative hidden desktop:flex"> */}
        {/* <SponsorGoldBlob color="bg-background" className="z-0" /> */}
        <div className="top-[60px] text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[24px] tablet:absolute tablet:left-[20px] tablet:text-[28px] desktop:left-[20px] desktop:top-[0px] desktop:text-[32px]">
          Our Partners
        </div>
        <div className="top-[100px] ml-[-50px] space-y-[-80px] tablet:left-[180px] tablet:space-y-[60px] tablet:py-[124px] desktop:space-y-[86px]">
          {partnerRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-2 gap-x-0 tablet:grid-cols-3 tablet:gap-x-20 ${rowIndex % 2 !== 0 ? "tablet:translate-x-[120px]" : ""} transition-transform`}
            >
              {row.map((sponsor) => (
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={sponsor.id}>
                  <SponsorBlobs
                    imageSrc={sponsorLogos[sponsor.logo as SponsorLogoKey].src}
                    id={sponsor.id.toString()}
                    className="scale-[0.5] tablet:scale-[0.8] desktop:scale-[1.0]"
                    blobVariant={sponsor.id - 1}
                    scale={Number(sponsor.scale)}
                    typeStart={0}
                    x={sponsor.x}
                    y={sponsor.y}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS: tablet / mobile */}
      {/* <div className="relative desktop:hidden">
        <SponsorGoldBlob className="tablet: z-0 translate-x-[40px] tablet:translate-y-[-90px] tablet:scale-[0.8]" />
        <div className="absolute left-1/2 top-[140px] -translate-x-1/2 font-alegreya_sans text-[20px] font-bold text-yellow tablet:text-[24px] desktop:text-[32px]">
          Partners
        </div>
        <div className="absolute left-1/2 top-[215px] z-10 -translate-x-1/2">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 transition-transform mobile:grid-cols-1 tablet:grid-cols-2">
            {sponsors.partners.map((sponsor) => (
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
      </div> */}
    </section>
  );
}
