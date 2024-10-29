import VenueBlob1 from "@/assets/icons/venue_blob1";
import Image from "next/image";
import venue_pic1 from "@/assets/images/venue_pic1.svg";
import venue_pic2 from "@/assets/images/venue_pic2.svg";
import venue_pic3 from "@/assets/images/venue_pic3.svg";
import venue_pic4 from "@/assets/images/venue_pic4.svg";
import infinite from "@/assets/images/infinite.svg";
import VenueBlob2 from "@/assets/icons/venue_blob2";

export default function Venue() {
  return (
    <section
      id="venue"
      className="my-16 flex flex-col items-center justify-center"
    >
      <h1 className="relative pb-20 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:w-[1000px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Beyond a simple conference
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Beyond a simple conference
        </span>
      </h1>

      <div className="flex w-full flex-col justify-between gap-8 desktop:flex-row desktop:gap-48">
        <div className="flex w-full flex-row justify-between desktop:flex-col">
          <div className="mb-8 border-l-4 border-bordeux pl-2 tablet:pl-5">
            <p className="font-alegreya_sans text-sm font-medium leading-none text-bordeux tablet:text-xl desktop:text-2xl">
              WORKSHOPS
            </p>
            <p className="font-alegreya_sans text-xl font-bold text-dark-blue tablet:text-[30px] desktop:text-[40px] desktop:leading-[40px]">
              March 30 - 1 April
            </p>
          </div>
          <div className="mb-8 border-l-4 border-yellow pl-2 tablet:pl-5">
            <p className="font-alegreya_sans text-sm font-medium leading-none text-bordeux tablet:text-xl desktop:text-2xl">
              ELIXIR MEETUP
            </p>
            <p className="font-alegreya_sans text-xl font-bold text-dark-blue tablet:text-[30px] desktop:text-[40px] desktop:leading-[40px]">
              1 April
            </p>
          </div>
          <div className="mb-8 border-l-4 border-purple pl-2 tablet:pl-5">
            <p className="font-alegreya_sans text-sm font-medium leading-none text-bordeux tablet:text-xl desktop:text-2xl">
              TALKS
            </p>
            <p className="font-alegreya_sans text-xl font-bold text-dark-blue tablet:text-[30px] desktop:text-[40px] desktop:leading-[40px]">
              2 - 3 April
            </p>
          </div>
        </div>

        <div className="text-left font-alegreya_sans text-xl text-dark-blue tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
          Held at the majestic{" "}
          <span className="text-bordeux underline">
            {" "}
            <a href="http://www.theatrocirco.com/" target="_blank">
              {" "}
              Theatro Circo
            </a>
          </span>
          , one of the most beautiful venues in Europe, Alchemy Conf wants to
          provide the Elixir programming community a larger than life week-long
          experience where together we’ll celebrate Elixir, from the technical
          prowess of its developers to the fun-loving spirit of its community.
        </div>
      </div>

      <div className="relative right-[125px]">
        <VenueBlob1 />
        <div className="absolute left-[50px] top-[140px]">
          <div className="relative h-[234px] w-[325px] rotate-[-10deg] overflow-hidden rounded-lg bg-grey drop-shadow-[-12px_12px_12px_rgba(0,48,73,0.24)]">
            <Image
              src={venue_pic1}
              alt=""
              width={400}
              className="translate-y-[-15px] rotate-[10deg] scale-[1.15] transform"
            ></Image>
          </div>
        </div>
        <div className="absolute left-[150px] top-[265px]">
          <div className="relative h-[234px] w-[325px] rotate-[2deg] overflow-hidden rounded-lg bg-grey drop-shadow-[-12px_12px_12px_rgba(0,48,73,0.24)]">
            <Image
              src={venue_pic2}
              alt=""
              width={400}
              className="translate-y-[-15px] rotate-[-2deg] scale-[1.15] transform"
            ></Image>
          </div>
        </div>
        <div className="width-[525px] absolute right-[150px] top-[170px] z-10 flex flex-row justify-between">
          <div className="mr-8 border-l-4 border-yellow pl-5">
            <p className="font-alegreya_sans text-[64px] font-bold leading-[2.25rem] text-background">
              12
            </p>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-background">
              Speakers
            </p>
          </div>
          <div className="mr-8 border-l-4 border-yellow pl-5">
            <p className="font-alegreya_sans text-[64px] font-bold leading-[2.25rem] text-background">
              6
            </p>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-background">
              Workshops
            </p>
          </div>
          <div className="mr-8 border-l-4 border-yellow pl-5">
            <p className="font-alegreya_sans text-[64px] font-bold leading-[2.25rem] text-background">
              500
            </p>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-background">
              Attendees
            </p>
          </div>
        </div>
      </div>
      <div className="relative bottom-[260px] left-[530px]">
        <VenueBlob2 />
        <div className="absolute bottom-[270px] left-[450px]">
          <Image src={venue_pic4} alt="" height={241}></Image>
        </div>
        <div className="absolute bottom-[-70px] left-[50px]">
          <Image src={venue_pic3} alt="" height={230}></Image>
        </div>
        <div className="width-[550px] absolute right-[275px] top-[270px] z-10 flex flex-row justify-between">
          <div className="mr-8 border-l-4 border-bordeux pl-5">
            <p className="font-alegreya_sans text-[64px] font-bold leading-[2.25rem] text-dark-blue">
              10+
            </p>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-dark-blue">
              Side Events
            </p>
          </div>
          <div className="mr-8 border-l-4 border-bordeux pl-5">
            <p className="font-alegreya_sans text-[64px] font-bold leading-[2.25rem] text-dark-blue">
              1
            </p>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-dark-blue">
              Mega-Party
            </p>
          </div>
          <div className="mr-8 border-l-4 border-bordeux pl-5">
            <Image src={infinite} alt="" height={36}></Image>
            <p className="leading-1 font-alegreya_sans text-[24px] font-normal text-dark-blue">
              Francesinhas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
