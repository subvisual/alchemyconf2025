import React from "react";

import AlchemyIcon from "@/assets/icons/alchemy_icon";
import Arrow from "@/assets/icons/arrow";

export default function Banner() {
  return (
    <div className="flex flex-col gap-14">
      <div className="pb-2">
        <AlchemyIcon />
      </div>
      <div className="flex flex-col gap-6 font-koulen text-8xl text-dark_blue">
        <div>Alchemy</div>
        <div>Conf</div>
        <div className="text-bordeux">2025</div>
      </div>
      <div className="flex flex-col gap-4 font-zilla_slab font-medium text-4xl text-dark_blue uppercase">
        <div>2 - 3 April</div>
        <div>Braga, Portugal</div>
      </div>
      <div className="relative bottom-[18rem] left-[18rem]">
        <Arrow />
      </div>
    </div>
  );
}
