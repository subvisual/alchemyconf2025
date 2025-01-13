import AlchemyIcon from "@/assets/icons/alchemy_icon";
import TheatroBlob from "@/assets/icons/theatro_blob";
import TheatroBlobMob from "@/assets/icons/theatro_blob_mob";
import theatro_circo_full from "../../assets/images/theatro_circo_full.svg";
import TheatroTitleBlob from "@/assets/icons/theatro_title_blob";

export default function Hero() {
  return (
    <section className="mt-32 flex min-h-[calc(100vh_+_80px)] flex-col items-center tablet:mt-40">
      <div className="relative flex w-full max-w-screen-desktop flex-col justify-between tablet:flex-row">
        {/* Left Side: Title and Text */}
        <div className="z-10 flex flex-col items-center gap-6 tablet:relative tablet:items-start tablet:gap-10 tablet:px-0">
          <AlchemyIcon className="h-[60px] mobile:h-[65px] tablet:h-[90px] desktop:h-[100px]" />
          <h1 className="bg-gradient-to-r from-[#30566B] via-[#003049] to-[#001c2b] bg-clip-text text-center font-koulen text-[80px] leading-[80px] text-transparent tablet:text-left tablet:text-[120px] tablet:leading-[120px] desktop:text-[180px] desktop:leading-[180px]">
            Alchemy <br /> Conf{" "}
            <span className="bg-gradient-to-r from-[#974a65] to-bordeux bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          <div className="mb-6 flex flex-col items-center gap-6 tablet:items-start tablet:gap-10">
            <p className="bg-gradient-to-r from-[#30566B] via-[#003049] to-[#001c2b] bg-clip-text text-center font-alegreya_sans text-2xl font-extrabold text-transparent tablet:text-left tablet:text-[32px] tablet:leading-[40px] desktop:text-[40px]">
              March 31 - April 3 &nbsp;{" "}
              <br className="hidden tablet:block desktop:hidden" /> Braga,
              Portugal
            </p>
            <p className="text-center font-alegreya_sans text-xl text-bordeux tablet:w-[260px] tablet:text-left tablet:text-[28px] tablet:leading-[36px] desktop:w-full desktop:text-[32px] desktop:leading-[44px]">
              A week-long experience for Elixir lovers, with{" "}
              <br className="hidden tablet:block" />
              <span className="font-semibold">talks</span>,
              <span className="font-semibold"> workshops</span>, and
              <span className="font-semibold"> side events.</span>
            </p>
          </div>
        </div>

        {/* desktop */}
        <div className="hidden tablet:hidden desktop:flex desktop:pb-[1200px]">
          <TheatroTitleBlob
            className="absolute right-[-100px] top-[166px] overflow-visible"
            style={{ height: "394px" }}
          />
          <TheatroBlob
            height="1000px"
            width="1200px"
            src={theatro_circo_full.src}
            alt="Teatro Circo"
            id="TCdesk"
            imageScale={1.35}
            style={{ position: "relative" }}
            posX="600px"
            posY="-350px"
          />
        </div>

        {/* tablet */}
        <div className="hidden tablet:flex tablet:pb-[1000px] desktop:hidden">
          <TheatroTitleBlob
            className="absolute right-[-100px] top-[166px] overflow-visible"
            style={{ height: "394px" }}
          />
          <TheatroBlob
            height="1000px"
            width="1200px"
            src={theatro_circo_full.src}
            alt="Teatro Circo"
            id="TCtab"
            imageScale={1.35}
            style={{ position: "relative" }}
            posX="300px"
            posY="-380px"
          />
        </div>

        {/* mobile*/}
        <div className="relative pb-[500px] flex w-full justify-center tablet:hidden">
          <TheatroTitleBlob
            className="absolute right-[-20px] top-[-80px] overflow-visible"
            style={{ height: "394px", scale: "0.5" }}
          />
          <TheatroBlobMob
            height="1000px"
            width="1200px"
            src={theatro_circo_full.src}
            alt="Teatro Circo"
            id="TCmob"
            imageScale={0.8}
            style={{ position: "relative" }}
            posX="50%"
            posY="-325px"
          />
        </div>
      </div>
    </section>
  );
}
