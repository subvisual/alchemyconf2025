import PracticalCard from "@/app/_components/PracticalCard";
import Bus1 from "@/assets/icons/bus1";
import BusStop from "@/assets/icons/bus_stop";
import ConnectVector from "@/assets/icons/connect_vector";
import Bicycle from "@/assets/icons/bicycle";
import Plane from "@/assets/icons/plane";
import Bus2 from "@/assets/icons/bus2";
import Train from "@/assets/icons/train";
import moveData from "../../_constants/move.json";

export default function Move() {
  return (
    <section className="flex flex-col items-center justify-center py-[120px]">
      <div className="pb-8 text-center font-koulen text-[128px] text-dark-blue">
        Move
      </div>
      <div className="relative flex w-[1008px] flex-col gap-10 font-zilla_slab text-dark-blue">
        <Bicycle className="right-[170px] top-[100px]" />
        <ConnectVector variant={1} className="right-[78px] top-[150px]" />
        <BusStop className="left-[84px] top-[340px]" />
        <Bus1 className="left-[237px] top-[377px]" />
        <ConnectVector variant={2} className="left-[74px] top-[342px]" />
        <Plane className="right-[215px] top-[693px]" />
        <Bus2 className="right-[146px] top-[782px]" />
        <ConnectVector variant={3} className="right-[78px] top-[750px]" />
        <Train className="left-[284px] top-[1080px]" />
        <ConnectVector variant={4} className="left-[62px] top-[1060px]" />
        {moveData.map((card, key) => (
          <div key={card.id}>
            <PracticalCard
              position={key % 2 === 0 ? "left" : "right"}
              cardTitle={card.cardTitle}
              description={card.description}
              linkText={card.linkText}
              link={card.link}
              image={card.image}
              color={card.color}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
