export default function Conf() {
  return (
    <section
      id="conference"
      className="mb-20 mt-32 flex scroll-mt-32 flex-col items-center justify-center tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64"
    >
      <h1 className="relative pb-6 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-10 tablet:text-[100px] tablet:leading-[100px] desktop:pb-16 desktop:text-[120px] desktop:leading-[120px]">
        About Alchemy Conf
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
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
      </div>
    </section>
  );
}
