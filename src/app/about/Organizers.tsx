import Link from "next/link";
import Button from "../_components/Button";
import Image from "next/image";

export default function Organizers() {
  return (
    <section className="my-[136px] flex flex-col items-center justify-start px-32">
      <div className="mb-16 font-koulen text-9xl text-dark-blue">
        About Organizers
      </div>
      <div className="w-[800px] text-center font-zilla_slab text-2xl text-dark-blue">
        <p className="mb-12 text-[36px] font-semibold uppercase">
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
        <div className="absolute left-52">
          <div className="flex h-[83px] w-[250px] rotate-[7.84deg] items-center justify-center overflow-hidden rounded-2xl border-[7px] border-yellow bg-grey">
            <Image
              src={"/"}
              alt=""
              width={176}
              height={176}
              className="rotate-[-7.84deg] transform"
            ></Image>
          </div>
        </div>

        <div className="pb-12 pt-6 text-right">
          <Button
            className="bg-bordeux py-1 text-[16px] font-medium"
            text="GET TO KNOW SUBVISUAL"
            href="/"
          />
        </div>

        <p>
          <span className="font-semibold text-bordeux">Remote</span> is a leader
          in global employment solutions, simplifying international hiring and
          payroll for companies of all sizes. By enabling businesses to hire top
          talent from anywhere in the world, Remote is helping shape the future
          of work with their forward-thinking HR solutions.
        </p>

        <div className="absolute right-52">
          <div className="flex h-[83px] w-[250px] rotate-[-7.84deg] items-center justify-center overflow-hidden rounded-2xl border-[7px] border-purple bg-grey">
            <Image
              src={"/"}
              alt=""
              width={176}
              height={176}
              className="rotate-[7.84deg] transform"
            ></Image>
          </div>
        </div>
        <div className="pt-6 text-left">
          <Button
            className="bg-bordeux py-1 text-[16px] font-medium"
            text="GET TO KNOW REMOTE"
            href="/"
          />
        </div>
      </div>
    </section>
  );
}
