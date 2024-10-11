import Link from "next/link";

export default function Sleep() {
  return (
    <section className="flex flex-col px-32 py-[120px]">
      <div className="text-dark-blue pb-8 text-center font-koulen text-[128px]">
        Sleep
      </div>
      <div className="text-dark-blue flex w-full flex-col gap-12 font-zilla_slab">
        <div className="border-yellow bg-yellow flex w-[800px] gap-[22px] rounded-lg border-4 bg-opacity-30 p-[50px]">
          <div className="h-[170px] w-[170px] flex-shrink-0 rounded-lg bg-sage"></div>
          <div className="flex-1">
            <p className="text-[32px] font-semibold uppercase">Stay Name</p>
            <p className="text-[22px]">
              Braga is a compact city, making it ideal for walking. Many key
              locations, including Theatro Circo, are in very walkable
              neighborhoods. Braga also has lovely cycling lanes if you have
              your bike handy.
            </p>
            <Link
              className="ml-auto block text-right text-[16px] font-semibold uppercase"
              href="/"
            >
              Stay Website{" "}
            </Link>
          </div>
        </div>

        <div className="ml-auto flex w-[800px] gap-[22px] rounded-lg border-4 border-blue bg-blue bg-opacity-30 p-[50px]">
          <div className="h-[170px] w-[170px] flex-shrink-0 rounded-lg bg-sage"></div>
          <div className="flex-1">
            <p className="text-[32px] font-semibold uppercase">Stay Name</p>
            <p className="text-[22px]">
              For longer distances, Braga&apos;s bus system can be a convenient
              and inexpensive choice. Here are all routes and schedules, but do
              keep in mind that Google Maps includes this information for the
              entire city of Braga.
            </p>
            <Link
              className="ml-auto block text-right text-[16px] font-semibold uppercase"
              href="/"
            >
              Stay website{" "}
            </Link>
          </div>
        </div>

        <div className="flex w-[800px] gap-[22px] rounded-lg border-4 border-bordeux bg-bordeux bg-opacity-30 p-[50px]">
          <div className="h-[170px] w-[170px] flex-shrink-0 rounded-lg bg-sage"></div>
          <div className="flex-1">
            <p className="text-[32px] font-semibold uppercase">Stay Name</p>
            <p className="text-[22px]">
              Braga is served by the Francisco Sá Carneiro Airport, better known
              as the Porto airport. GetBus has a convenient shuttle service that
              will deliver you right to the city centre.
            </p>
            <Link
              className="ml-auto block text-right text-[16px] font-semibold uppercase"
              href="/"
            >
              Stay website{" "}
            </Link>
          </div>
        </div>

        <div className="ml-auto flex w-[800px] gap-[22px] rounded-lg border-4 border-sage bg-sage bg-opacity-30 p-[50px]">
          <div className="h-[170px] w-[170px] flex-shrink-0 rounded-lg bg-sage"></div>
          <div className="flex-1">
            <p className="text-[32px] font-semibold uppercase">Stay Name</p>
            <p className="text-[22px]">
              Braga is well-connected by train, making it easy to get here from
              Porto or Lisbon. The Intercidades trains or Alfapendular service
              are our recommendations.
            </p>
            <Link
              className="ml-auto block text-right text-[16px] font-semibold uppercase"
              href="/"
            >
              Stay website{" "}
            </Link>
          </div>
        </div>

        <div className="flex w-[800px] gap-[22px] rounded-lg border-4 border-purple bg-purple bg-opacity-30 p-[50px]">
          <div className="h-[170px] w-[170px] flex-shrink-0 rounded-lg bg-sage"></div>
          <div className="flex-1">
            <p className="text-[32px] font-semibold uppercase">Stay Name</p>
            <p className="text-[22px]">
              There are several companies operating buses from Lisbon, Porto, or
              anywhere else in the country, really, to Braga. Rede Expressos and
              FlixBus are both solid options.
            </p>
            <Link
              className="ml-auto block text-right text-[16px] font-semibold uppercase"
              href="/"
            >
              Stay website{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
