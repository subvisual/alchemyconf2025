import Image from "next/image";
import SubvisualCirc from "@/assets/images/subvisual_circ.svg";
import Link from "next/link";

export default function Conf() {
  return (
    <section
      id="conference"
      className="mb-20 mt-40 flex scroll-mt-40 flex-col items-center justify-center tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64"
    >
      <h1 className="relative pb-10 text-center font-sofia_sans_extra_condensed text-[50px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:pb-10 tablet:text-[100px] tablet:leading-[100px] desktop:pb-16 desktop:text-[120px] desktop:leading-[120px]">
        About Alchemy Conf
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
          About Alchemy Conf
        </span>
      </h1>
      <div className="w-full max-w-screen-desktop text-left font-alegreya_sans text-xl text-dark-blue tablet:pb-20 tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
        <p>
          <span className="text-bordeux">Alchemy Conf 2025</span> is more than
          just a conference—it&apos;s a celebration of the Elixir programming
          community. Everything about Alchemy Conf is curated and organized by
          passionate Elixir enthusiasts with no purpose other than creating
          something special for everyone to enjoy and learn from.
        </p>
        <p>
          <br />
          It&apos;s a week-long event at the{" "}
          <span className="text-bordeux underline">
            <a href="http://www.theatrocirco.com/" target="_blank">
              Theatro Circo in Braga
            </a>
          </span>
          , Portugal, and our promise is to go beyond delivering the world-class
          talks, hands-on workshops, and unique networking opportunities
          you&apos;d expect.
        </p>
        <p>
          <br />
          Our mission is to foster collaboration, innovation, and community
          building whether you&apos;re a seasoned developer or new to Elixir by
          creating a full experience throughout the week.
        </p>
        <div className="mt-2 flex flex-col items-center tablet:mt-14 tablet:flex-row tablet:items-start tablet:gap-14 desktop:mt-20 desktop:gap-20">
          <Link
            href="https://subvisual.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <Image
              src={SubvisualCirc}
              alt="Subvisual Logo"
              width={200}
              height={200}
              className="mobile:scale-50 tablet:scale-90 desktop:scale-100"
            />
          </Link>
          <p>
            Alchemy Conf is brought to life by{" "}
            <span className="font-bold text-bordeux">Subvisual</span>, a venture
            studio and development house known for its expertise in building
            decentralized solutions and organizing standout events like{" "}
            <span className="font-bold text-dark-blue underline">
              <a href="https://x.com/rubyconfpt" target="_blank">
                RubyConf Portugal
              </a>
            </span>{" "}
            and{" "}
            <span className="font-bold text-dark-blue underline">
              <a href="https://www.instagram.com/mirror.conf/" target="_blank">
                Mirror Conf
              </a>
            </span>
            .
            <br />
            <br />
            <span className="font-bold text-bordeux">Subvisual</span> is
            dedicated to elevating not just the products they’re entrusted with,
            but the very companies that come through the door.
          </p>
        </div>
      </div>
    </section>
  );
}
