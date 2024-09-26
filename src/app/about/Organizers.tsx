import Link from "next/link";

export default function Organizers() {
  return (
    <section className="flex flex-col items-center justify-start px-32 py-[120px]">
      <div className="text-dark-blue pb-8 font-koulen text-[128px]">
        About Organizers
      </div>
      <div className="text-dark-blue w-[800px] text-center font-zilla_slab text-[22px]">
        <p className="pb-20 text-[36px] font-semibold uppercase">
          Who&apos;s behind Alchemy Conf?
        </p>
        <p>
          Alchemy Conf is brought to life by{" "}
          <span className="font-semibold text-bordeux">Subvisual</span> and{" "}
          <span className="font-semibold text-bordeux">Remote</span>, two
          companies with a shared commitment to nurturing a tech ecosystem that
          represents them.
        </p>
        <p>
          <br />
          <span className="font-semibold text-bordeux">Subvisual</span> is a
          venture studio and development house known for its expertise in
          building decentralized solutions and organizing standout events like
          RubyConf Portugal and Mirror Conf. They&apos;re dedicated to elevating
          not just the products they&apos;re entrusted with, but the very
          companies that come through the door.
        </p>
        <div className="py-6 text-right">
          <Link className="uppercase text-bordeux" href="#">
            Get to know Subvisual
          </Link>
        </div>

        <p>
          <span className="font-semibold text-bordeux">Remote</span> is a leader
          in global employment solutions, simplifying international hiring and
          payroll for companies of all sizes. By enabling businesses to hire top
          talent from anywhere in the world, Remote is helping shape the future
          of work with their forward-thinking HR solutions.
        </p>

        <div className="py-6 text-right">
          <Link className="uppercase text-bordeux" href="#">
            Get to know Remote
          </Link>
        </div>
      </div>
    </section>
  );
}
