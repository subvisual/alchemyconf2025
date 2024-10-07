import speakers from "../_constants/speakers.json";
// import Image from "next/image";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="my-[136px] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="mb-10 font-koulen text-9xl leading-[1.1] text-dark-blue">
        Talks & Speakers
      </div>
      <div className="w-[760px] text-center font-zilla_slab text-2.5xl font-medium text-dark-blue">
        Alchemy Conf 2025 brings together the brightest minds in the Elixir
        community. The top experts in our community will share what they’ve
        learned about building, innovation, and real-world applications.
      </div>

      <div className="grid grid-cols-4 gap-8 pt-[96px] mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4">
        {speakers.map((speaker, key) => (
          <div key={speaker.id} className="flex flex-col font-zilla_slab">
            <div className="mb-[22px] h-[280px] w-[280px] rounded-xl border-8 border-bordeux bg-grey">
              {/* <Image
                src={speaker.image}
                alt="Speaker"
                width={280}
                height={280}
              /> */}
              {speaker.image}
            </div>
            <p className="pb-1 text-[32px] font-semibold uppercase leading-none text-dark-blue">
              {speaker.name}
            </p>
            <p className="pb-4 text-2xl font-semibold text-dark-blue">
              {speaker.role}
            </p>
            <div className="flex items-start justify-start gap-2">
              {speaker.tags.map((tag, key) => (
                <div
                  key={`${speaker.id}-${tag}`}
                  className={`border-2 border-l-8 bg-none px-4 capitalize ${
                    tag === "web3"
                      ? "border-blue"
                      : tag === "elixir"
                        ? "border-sage"
                        : tag === "crypto"
                          ? "border-purple"
                          : ""
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
