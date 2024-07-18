import React from "react";

import AlchemyIcon from "@/assets/icons/alchemy_icon";
import Arrow from "@/assets/icons/arrow";

export default function Banner() {
  return (
    <div className="relative flex flex-col justify-center gap-14">
      <div>
        <AlchemyIcon />
      </div>
      <div className="flex flex-col gap-1 font-koulen text-8xl text-dark_blue">
        <div>Alchemy</div>
        <div>Conf</div>
        <div className="text-bordeux">2025</div>
      </div>
      <div className="flex flex-col gap-2 text-nowrap font-zilla_slab text-4xl font-semibold uppercase text-dark_blue">
        <div>2 - 3 April</div>
        <div>Braga, Portugal</div>
      </div>
      <div className="absolute bottom-[110px] left-[270px]">
        <Arrow />
      </div>
    </div>
  );
}
