// import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import sponsors from "../_constants/sponsors.json";
import Image, { StaticImageData } from "next/image";
import AltButton from "../_components/AltButton";
import remoteLogo from "@/assets/images/remote_logo.png";
import logo1 from "@/assets/images/marmela_logo.svg";
import logo2 from "@/assets/images/startupbraga_logo.png";
import logo3 from "@/assets/images/cesium_logo.svg";
import logo4 from "@/assets/images/getbus_logo.png";
import SponsorGoldBlob from "@/assets/icons/sponsor_gold_blob";
import MainSponsorBlob from "@/assets/icons/main_sponsor_blob";
import SponsorMainBlob from "@/assets/icons/sponsor_main_blob";
import sponsorLogos from "../_constants/sponsors_logos";
import SponsorBlobs from "@/assets/icons/sponsor_blobs";

type SponsorLogoKey = keyof typeof sponsorLogos;

export default function Sponsors() {
  const logoImages = [logo1, logo2, logo3, logo4];
  let itemsPerRow = 3;

  const chunkArray = (
    arr: Array<{
      id: number;
      name: string;
      logo: SponsorLogoKey;
      link: string;
      scale: number;
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

  const rows = chunkArray(partnersWithNumberScale, itemsPerRow);

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

      <div className="relative mb-4 flex w-full max-w-[1440px] flex-col items-center tablet:mb-6 desktop:mb-10 desktop:flex-row">
        <div className="relative mobile:mb-[-180px] tablet:mb-0">
          <div className="left-[140px] text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[20px] tablet:top-[-10px] tablet:text-[24px] desktop:left-[120px] desktop:top-[45px] desktop:text-[32px]">
            Main Sponsor
          </div>
          <a
            href={sponsors.main[0].link}
            target="_blank"
          >
            <MainSponsorBlob
              imageSrc={remoteLogo.src}
              className="left-[40px] top-[-100px] mobile:translate-x-[-40px] mobile:scale-[0.45] tablet:left-[45px] tablet:top-[50px] tablet:scale-[1.0]"
            />
          </a>
        </div>
        <div className="relative flex w-full max-w-[1440px] flex-col items-center justify-center desktop:ml-28">
          <div className="mb-8 flex flex-col items-center gap-2 text-center font-alegreya_sans text-xl text-dark-blue tablet:px-0 tablet:text-2xl desktop:items-start desktop:gap-8 desktop:text-left desktop:text-3xl">
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

      <div className="relative mobile:mb-[-180px] tablet:mb-0">
          <div className="left-[140px] text-center font-alegreya_sans font-bold text-dark-blue mobile:text-[20px] tablet:top-[-10px] tablet:text-[24px] desktop:left-[120px] desktop:top-[45px] desktop:text-[32px]">
            Gold Sponsors
          </div>
          <SponsorMainBlob />
        </div>

      {/* PARTNERS: desktop */}
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
              className={`grid gap-x-20 desktop:grid-cols-3 ${rowIndex % 2 !== 0 ? "translate-x-[120px]" : ""} transition-transform`}
            >
              {row.map((sponsor) => (
                <a href={sponsor.link} target="_blank" key={sponsor.id}>
                  <SponsorBlobs
                    imageSrc={sponsorLogos[sponsor.logo].src}
                    id={sponsor.id.toString()}
                    className="scale-[1.0]"
                    blobVariant={sponsor.id - 1}
                    scale={sponsor.scale}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS: tablet / mobile */}
      <div className="relative desktop:hidden">
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
      </div>
    </section>
  );
}
