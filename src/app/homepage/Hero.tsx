import AlchemyIcon from "@/assets/icons/alchemy_icon";
import ArrowDown from "@/assets/icons/arrow_down";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh_+_80px)] flex-col items-center justify-center px-32">
      <div className="flex justify-around gap-32">
        <div className="flex flex-col gap-[65px]">
          <AlchemyIcon className="h-[130px] w-[140px]" />
          <div>
            {/* TODO: check h1 font size, its too big for 200px */}
            <h1 className="text-dark-blue font-koulen text-[160px] leading-none">
              Alchemy <br /> Conf <br />{" "}
              <span className="text-bordeux">2025</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end gap-20 text-right">
          <h2 className="font-zilla_slab text-[36px] font-semibold uppercase leading-none text-bordeux">
            Talks, <br />
            Workshops, <br />
            Networking, <br />
            And so much more!
          </h2>
          <h3 className="text-dark-blue font-zilla_slab text-[36px] font-semibold uppercase leading-none">
            2 - 3 April <br /> Braga, Portugal
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8">
        <a href="#tickets" className="font-zilla_slab text-[24px] uppercase">
          Don&apos;t miss a beat!
        </a>
        <ArrowDown className="!h-3 animate-bounce" />
      </div>
    </section>
  );
}
