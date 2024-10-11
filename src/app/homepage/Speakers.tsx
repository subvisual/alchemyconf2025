import speakers from "../_constants/speakers.json";
// import Image from "next/image";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="flex flex-col items-center justify-center overflow-hidden py-[220px]"
    >
      <div className="text-dark-blue font-koulen text-[128px]">
        Talks & Speakers
      </div>
      <div className="flex gap-8 pt-[96px]">
        {speakers.map((speaker, key) => (
          <div key={speaker.id} className="flex flex-col font-zilla_slab">
            <div className="mb-[22px] h-[280px] w-[280px] rounded-xl border-4 border-bordeux bg-sage">
              {/* <Image
                src={speaker.image}
                alt="Speaker"
                width={280}
                height={280}
              /> */}
              {speaker.image}
            </div>
            <p className="text-dark-blue pb-4 text-[32px] font-bold uppercase leading-none">
              {speaker.name}
            </p>
            <p className="pb-4 text-[22px] font-semibold">{speaker.role}</p>
            <p className="pb-4 text-[22px]">{speaker.description}</p>
            <div className="flex items-start justify-start gap-2">
              {speaker.tags.map((tag, key) => (
                <div
                  key={`${speaker.id}-${tag}`}
                  className={`bg-white border-2 border-l-8 px-4 capitalize ${
                    tag === "web3"
                      ? "border-sage"
                      : tag === "elixir"
                        ? "border-bordeux"
                        : tag === "crypto"
                          ? "border-blue"
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
