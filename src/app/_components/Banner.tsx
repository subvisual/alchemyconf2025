import AlchemyIcon from "@/assets/icons/alchemy_icon";
import Arrow from "@/assets/icons/arrow_icon";
import ArrowMobileVersion from "@/assets/icons/arrow_mobile_icon";

export default function Banner() {
  return (
    <div className="relative flex flex-col gap-8 sm:justify-center sm:gap-14">
      <div>
        <AlchemyIcon className="w-[93px] sm:w-[129px]" />
      </div>
      <div className="flex flex-col gap-1 font-koulen text-[80px] leading-none text-dark_blue sm:text-[90px] md:text-[105px]">
        <div>Alchemy</div>
        <div>Conf</div>
        <div className="text-bordeux">2025</div>
      </div>
      <div className="flex flex-col gap-2 text-nowrap font-zilla_slab text-2xl font-semibold uppercase text-dark_blue md:text-4xl">
        <div>2 - 3 April</div>
        <div>Braga, Portugal</div>
      </div>
      <div className="absolute bottom-[95px] left-[300px] hidden md:block">
        <Arrow />
      </div>
      <div className="absolute bottom-[-110px] left-[190px] w-[163px] md:hidden">
        <ArrowMobileVersion />
      </div>
    </div>
  );
}
