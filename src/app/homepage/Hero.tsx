import AlchemyIcon from "@/assets/icons/alchemy_icon";
import TheatroBlobAnime from "@/assets/icons/theatro_blob_anime";
import theatro_circo from "../../assets/images/theatro_circo.svg";
import TheatroTitleBlob from "@/assets/icons/theatro_title_blob";

export default function Hero() {
  return (
    <section className="mt-32 flex min-h-[calc(100vh_+_80px)] flex-col items-center justify-start tablet:mt-40">
      <div className="relative flex w-full max-w-screen-desktop flex-col justify-start tablet:flex-row">
        {/* Left Side: Title and Text */}
        <div className="z-10 flex flex-col items-center gap-6 tablet:absolute tablet:items-start tablet:gap-10 tablet:px-0">
          <AlchemyIcon className="h-[60px] mobile:h-[65px] tablet:h-[90px] desktop:h-[100px]" />
          <h1 className="text-transparent bg-gradient-to-r from-[#30566B] via-[#003049] to-[#001c2b] bg-clip-text text-center font-koulen text-[80px] leading-[80px] tablet:text-left tablet:text-[120px] tablet:leading-[120px] desktop:text-[140px] desktop:leading-[140px]">
            Alchemy <br /> Conf{" "}
            <span className="text-transparent bg-gradient-to-r from-[#974a65] to-bordeux bg-clip-text">
              2025
            </span>
          </h1>
          <div className="mb-6 flex flex-col items-center gap-6 tablet:items-start tablet:gap-10">
            <p className="text-transparent bg-gradient-to-r from-[#30566B] via-[#003049] to-[#001c2b] bg-clip-text text-center font-alegreya_sans text-2xl font-extrabold tablet:text-left tablet:text-[32px] tablet:leading-[40px] desktop:text-[40px]">
              March 31 - April 3 &nbsp; Braga, Portugal
            </p>
            <p className="text-center font-alegreya_sans text-xl text-bordeux tablet:w-auto tablet:text-left tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
              A week-long experience for Elixir lovers, with{" "}
              <br className="hidden tablet:block" />
              <span className="font-semibold">talks</span>,
              <span className="font-semibold"> workshops</span>, and
              <span className="font-semibold"> side events.</span>
            </p>
          </div>
        </div>
        {/* WIP */}
        {/* <div>
          <TheatroTitleBlob
            className="absolute right-[-100px] top-[20px] overflow-visible"
            style={{ height: "394px" }}
          />
          <TheatroBlobAnime
            height="1000px"
            width="1200px"
            src={theatro_circo.src}
            alt="Teatro Circo"
          />
        </div> */}
      </div>
    </section>
  );
}
