import AlchemyIcon from "@/assets/icons/alchemy_icon";
import TheatroBlobAnime from "@/assets/icons/theatro_blob_anime";
import theatro_circo from "../../assets/images/theatro_circo.svg";
import TheatroTitleBlob from "@/assets/icons/theatro_title_blob";

export default function Hero() {
  return (
    <section className="mt-40 flex min-h-[calc(100vh_+_80px)] flex-col items-center justify-start px-20">
      <div className="relative flex w-full max-w-screen-desktop flex-col justify-start tablet:flex-row">
        {/* Left Side: Title and Text */}
        <div className="z-10 flex flex-col items-center gap-6 px-4 tablet:absolute tablet:items-start tablet:gap-10 tablet:px-0">
          <AlchemyIcon className="h-[60px] mobile:h-[80px] tablet:h-[100px]" />

          <h1 className="text-transparent bg-gradient-to-r from-[#19445b] via-[#003049] to-[#001c2b] bg-clip-text text-center font-koulen text-[60px] leading-[70px] mobile:text-[100px] mobile:leading-[100px] tablet:text-left tablet:text-[140px] tablet:leading-[140px]">
            Alchemy <br /> Conf{" "}
            <span className="text-transparent bg-gradient-to-r from-[#974a65] to-bordeux bg-clip-text">
              2025
            </span>
          </h1>

          <div className="mb-6 flex flex-col items-center gap-6 tablet:items-start tablet:gap-10">
            <p className="text-center font-alegreya_sans text-[20px] font-extrabold leading-[28px] text-dark-blue mobile:text-[28px] mobile:leading-[36px] tablet:text-left tablet:text-[32px] tablet:leading-[40px] desktop:text-[40px] desktop:leading-6">
              March 31 - April 3 &nbsp; &nbsp; Braga, Portugal
            </p>

            <p className="text-center font-alegreya_sans text-[18px] leading-[24px] text-bordeux mobile:text-[24px] mobile:leading-[32px] tablet:text-left tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
              A week-long experience for elixir lovers, with{" "}
              <br className="hidden tablet:block" />
              <span className="font-extrabold">talks</span>,
              <span className="font-extrabold"> workshops</span>, and
              <span className="font-extrabold"> side events</span>
            </p>
          </div>
        </div>

        {/* WIP */}
        <div>
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
        </div>
      </div>
    </section>
  );
}
