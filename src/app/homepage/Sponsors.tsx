import Button from "../_components/Button";
import sponsors from "../_constants/sponsors.json";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="my-[136px] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="mb-10 font-koulen text-9xl leading-[1.1] text-dark-blue">
        Sponsors
      </div>
      <div className="w-[760px] text-center font-zilla_slab text-2.5xl font-medium text-dark-blue">
        Alchemy Conf is powered by the support of our esteemed sponsors. Want to
        join them? <br /> You get to support the Elixir community and elevate
        your brand. A win-win.
      </div>
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-x-11 gap-y-[74px] py-[74px]">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="h-24 w-[288px] bg-grey p-4">
            <Image
              src={sponsor.logo}
              width={288}
              height={96}
              alt={`Sponsor ${sponsor.id}`}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>

      <Button
        className="bg-sage text-xl font-semibold text-dark-blue"
        text="SPONSORSHIP PROSPECTUS"
        href="/"
      />
    </section>
  );
}
