import PracticalCard from "@/app/_components/PracticalCard";
import ConnectVector from "@/assets/icons/connect_vector";

export default function Practical() {
  return (
    <section className="flex flex-col items-center justify-center py-[120px]">
      <div className="pb-8 text-center font-koulen text-[128px] text-dark-blue">
        Move
      </div>
      <div className="relative flex w-[1008px] flex-col gap-10 font-zilla_slab text-dark-blue">
        <ConnectVector variant={1} className="right-[78px] top-[150px]" />
        <PracticalCard
          position="left"
          cardTitle="Walking"
          description="Braga is a compact city, making it ideal for walking. Many key locations, including Theatro Circo, are in very walkable neighborhoods. Braga also has lovely cycling lanes if you have your bike handy."
          linkText="City Map"
          link="https://www.google.pt/maps/place/Braga"
          image="/"
          color="yellow"
        />
        <ConnectVector variant={2} className="left-[74px] top-[342px]" />
        <PracticalCard
          position="right"
          cardTitle="By Transit"
          description="For longer distances, Braga’s bus system can be a convenient and inexpensive choice. Here are all routes and schedules, but do keep in mind that Google Maps includes this information for the entire city of Braga."
          linkText="Tub"
          link="/https://tub.pt/"
          image=""
          color="blue"
        />
        <ConnectVector variant={3} className="right-[78px] top-[750px]" />
        <PracticalCard
          position="left"
          cardTitle="By Airport Shuttle"
          description="Braga is served by the Francisco Sá Carneiro Airport, better known as the Porto airport. GetBus has a convenient shuttle service that will deliver you right to the city centre."
          linkText="Getbus"
          link="https://www.getbus.eu/en/braga-aeroporto-porto"
          image="/"
          color="bordeux"
        />
        <ConnectVector variant={4} className="left-[62px] top-[1060px]" />
        <PracticalCard
          position="right"
          cardTitle="By Train"
          description="Braga is well-connected by train, making it easy to get here from Porto or Lisbon. The Intercidades trains or Alfapendular service are our recommendations."
          linkText="CP Portugal"
          link="https://www.cp.pt/passageiros/en"
          image="/"
          color="sage"
        />
        <PracticalCard
          position="left"
          cardTitle="By Bus"
          description="There are several companies operating buses from Lisbon, Porto, or anywhere else in the country, really, to Braga. Rede Expressos and FlixBus are both solid options."
          linkText="Rede Expressos"
          link="https://rede-expressos.pt/en"
          image="/"
          color="purple"
        />
      </div>
    </section>
  );
}
