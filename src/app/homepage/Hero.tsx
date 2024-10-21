import AlchemyIcon from "@/assets/icons/alchemy_icon";
import TheatroBlob from "@/assets/icons/theatro_blob";
import TheatroBlobAnime from "@/assets/icons/theatro_blob_anime";
import theatro_circo from "../../assets/images/theatro_circo.svg";
import TheatroTitleBlob from "@/assets/icons/theatro_title_blob";

export default function Hero() {
  return (
    <section className="mt-40 flex min-h-[calc(100vh_+_80px)] flex-col items-center justify-start px-20">
      <div className="relative flex w-full max-w-screen-desktop flex-row justify-start">
        <div className="z-10 flex flex-col items-start gap-[40px]">
          <AlchemyIcon className="h-[100px]" />
          <h1 className="font-koulen text-[180px] leading-[170px] text-dark-blue">
            Alchemy <br /> Conf <span className="text-bordeux">2025</span>
          </h1>
          <div className="z-10 mb-6 flex flex-col items-start gap-10 text-right">
            <p className="font-alegreya_sans text-[40px] font-extrabold leading-6 text-dark-blue">
              March 30-3 April &nbsp; &nbsp; Braga, Portugal
            </p>
            <p className="text-left font-alegreya_sans text-[32px] font-normal leading-[44px] text-bordeux">
              A week-long experience for elixir lovers, with <br />{" "}
              <span className="font font-extrabold text-bordeux"> talks</span>,
              <span className="font font-extrabold text-bordeux">
                {" "}
                workshops
              </span>{" "}
              and
              <span className="font font-extrabold text-bordeux">
                {" "}
                side events
              </span>
            </p>
          </div>
        </div>
        <TheatroTitleBlob
          className="absolute right-[-100px] top-[120px] overflow-visible"
          style={{ height: "394px" }}
        />
        <TheatroBlob
          src={theatro_circo.src}
          alt="Teatro Circo"
          height="900"
          width="1300"
        />
      </div>
    </section>
  );
}
