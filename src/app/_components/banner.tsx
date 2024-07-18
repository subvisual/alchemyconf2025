import React from "react";

import AlchemyIcon from "@/assets/icons/alchemy_icon";
import Arrow from "@/assets/icons/arrow";
import ArrowMobileVersion from "@/assets/icons/arrow_mobile_version";

export default function Banner() {
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <div className="hidden md:block pb-2">
        <AlchemyIcon />
      </div>
      <div className="md:hidden">
        <AlchemyIcon width={93} height={100} />
      </div>

      <div className="flex flex-col gap-6 md:gap-6 text-8xl md:text-9xl font-koulen text-dark_blue">
        <div>Alchemy</div>
        <div>Conf</div>
        <div className="text-bordeux">2025</div>
      </div>
      <div className="flex flex-col gap-3 md:gap-4 text-3xl md:text-4xl font-zilla_slab font-medium text-dark_blue uppercase">
        <div>2 - 3 April</div>
        <div>Braga, Portugal</div>
      </div>
      <div className="hidden md:block md:relative md:bottom-[18rem] md:left-[18rem]">
        <Arrow />
      </div>
      <div className="relative bottom-[7rem] left-[17rem] md:hidden">
        <ArrowMobileVersion />
      </div>
    </div>
  );
}
