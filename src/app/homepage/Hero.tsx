import AlchemyIcon from "@/assets/icons/alchemy_icon";
// import ArrowDown from "@/assets/icons/arrow_down";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh_+_80px)] flex-col items-center justify-center px-32">
      <div className="flex justify-around gap-0">
        <div className="flex flex-col gap-[40px]">
          <AlchemyIcon className="h-[130px] w-[140px]" />
          <div>
            <h1 className="font-koulen text-[200px] leading-[0.9] text-dark-blue">
              Alchemy <br /> Conf <br />{" "}
              <span className="text-bordeux">2025</span>
            </h1>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-end justify-end gap-16 text-right">
          <h2 className="font-zilla_slab text-[32px] font-semibold uppercase leading-none text-bordeux">
            Talks, <br />
            Workshops, <br />
            Networking, <br />
            And Celebrating Elixir!
          </h2>
          <h3 className="leading-12 font-zilla_slab text-[32px] font-semibold uppercase text-dark-blue">
            March 30-3 April, 2025 <br /> Braga, Portugal
          </h3>
        </div>
      </div>
      {/* NOTE: might need this section */}
      {/* <div className="flex flex-col items-center pt-8"> */}
      {/*   <a href="#tickets" className="font-zilla_slab text-[24px] uppercase"> */}
      {/*     Don&apos;t miss a beat! */}
      {/*   </a> */}
      {/*   <ArrowDown className="!h-3 animate-bounce" /> */}
      {/* </div> */}
    </section>
  );
}
