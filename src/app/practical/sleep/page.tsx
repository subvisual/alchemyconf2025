import PracticalCard from "@/app/_components/PracticalCard";
import sleepData from "../../_constants/sleep.json";

export default function Sleep() {
  return (
    <section className="flex flex-col items-center justify-center py-[120px]">
      <div className="pb-8 text-center font-koulen text-[128px] text-dark-blue">
        Sleep
      </div>
      <div className="relative flex w-[1008px] flex-col gap-10 font-zilla_slab text-dark-blue">
        {sleepData.map((card, key) => (
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
