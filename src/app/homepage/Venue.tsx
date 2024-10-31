import VenueBlob1 from "@/assets/icons/venue_blob1";
import Image from "next/image";
import venue_pic1 from "@/assets/images/venue_pic1.svg";
import venue_pic2 from "@/assets/images/venue_pic2.svg";
import venue_pic3 from "@/assets/images/venue_pic3.svg";
import venue_pic4 from "@/assets/images/francesinha.png";
import infinite from "@/assets/images/infinite.svg";
import VenueBlob2 from "@/assets/icons/venue_blob2";
import Link from "next/link";

export default function Venue() {
  return (
    <section
      id="venue"
      className="mt-32 flex flex-col items-center justify-center"
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
              March 31 - 1 April
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

        <div className="text-left font-alegreya_sans text-xl text-dark-blue tablet:pb-20 tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
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

      <div className="relative desktop:right-[300px]">
        <VenueBlob1 className="h-auto w-[600px] pt-12 tablet:w-[1070px] tablet:pt-0" />
        <div className="absolute left-[50px] top-[140px] hidden tablet:flex">
          <div className="relative h-[234px] w-[325px] rotate-[-10deg] overflow-hidden rounded-lg bg-grey drop-shadow-[-12px_12px_12px_rgba(0,48,73,0.24)]">
            <Image
              src={venue_pic1}
              alt=""
              width={400}
              className="translate-y-[-15px] rotate-[10deg] scale-[1.15] transform"
            ></Image>
          </div>
        </div>
        <div className="absolute left-[150px] top-[265px] hidden tablet:flex">
          <div className="relative h-[234px] w-[325px] rotate-[2deg] overflow-hidden rounded-lg bg-grey drop-shadow-[-12px_12px_12px_rgba(0,48,73,0.24)]">
            <Image
              src={venue_pic2}
              alt=""
              width={400}
              className="translate-y-[-15px] rotate-[-2deg] scale-[1.15] transform"
            ></Image>
          </div>
        </div>
        <div className="absolute right-[125px] top-[130px] z-10 flex flex-row justify-between tablet:right-[150px] tablet:top-[155px]">
          <div className="mr-4 border-l-4 border-yellow pl-2 tablet:mr-8 tablet:pl-5">
            <p className="font-alegreya_sans text-[40px] font-bold leading-[2.25rem] text-background tablet:text-[64px]">
              12
            </p>
            <p className="leading-1 font-alegreya_sans text-[20px] font-normal text-background tablet:text-[24px]">
              Speakers
            </p>
          </div>
          <div className="mr-4 border-l-4 border-yellow pl-2 tablet:mr-8 tablet:pl-5">
            <p className="font-alegreya_sans text-[40px] font-bold leading-[2.25rem] text-background tablet:text-[64px]">
              6
            </p>
            <p className="leading-1 font-alegreya_sans text-[20px] font-normal text-background tablet:text-[24px]">
              Workshops
            </p>
          </div>
          <div className="mr-4 border-l-4 border-yellow pl-2 tablet:mr-8 tablet:pl-5">
            <p className="font-alegreya_sans text-[40px] font-bold leading-[2.25rem] text-background tablet:text-[64px]">
              500
            </p>
            <p className="leading-1 font-alegreya_sans text-[20px] font-normal text-background tablet:text-[24px]">
              Attendees
            </p>
          </div>
        </div>
      </div>

      <div className="relative bottom-[50px] tablet:left-[254px] desktop:bottom-[260px] desktop:left-[490px]">
        <VenueBlob2 className="h-auto w-[600px] tablet:w-[900px]" />

        <Image
          src={venue_pic4}
          alt=""
          className="absolute left-[390px] top-[-50px] w-[240px] scale-125 tablet:left-[505px] tablet:w-[270px]"
        />

        <Image
          src={venue_pic3}
          alt=""
          height={230}
          className="absolute bottom-[-125px] left-[50px] tablet:bottom-[-70px]"
        />

        <div className="absolute right-[100px] top-[158px] z-10 flex flex-row justify-between tablet:right-[200px] tablet:top-[270px]">
          <div className="mr-4 border-l-4 border-bordeux pl-2 tablet:mr-8 tablet:pl-5">
            <p className="font-alegreya_sans text-[40px] font-bold leading-[2.25rem] text-dark-blue tablet:text-[64px]">
              10+
            </p>
            <Link
              href="https://membrz.club/alchemyconf/events"
              target="_blank"
              className="leading-1 hidden font-alegreya_sans text-[20px] font-normal text-dark-blue underline tablet:flex tablet:text-[24px]"
            >
              Alchemy on the Road
            </Link>
            <Link
              href="https://membrz.club/alchemyconf/events"
              target="_blank"
              className="font-alegreya_sans text-[20px] font-normal text-dark-blue underline tablet:hidden tablet:text-[24px]"
            >
              Alchemy <br /> on the Road
            </Link>
          </div>
          <div className="mr-4 border-l-4 border-bordeux pl-2 tablet:mr-8 tablet:pl-5">
            <p className="font-alegreya_sans text-[40px] font-bold leading-[2.25rem] text-dark-blue tablet:text-[64px]">
              1
            </p>
            <p className="leading-1 font-alegreya_sans text-[20px] font-normal text-dark-blue tablet:text-[24px]">
              Mega-Party
            </p>
          </div>
          <div className="mr-4 border-l-4 border-bordeux pl-2 pt-[-8px] tablet:mr-8 tablet:pl-5">
            <Image
              className="mt-[6px] scale-[0.85] tablet:scale-110"
              src={infinite}
              alt="Infinite"
            />
            <p className="leading-1 font-alegreya_sans text-[20px] font-normal text-dark-blue tablet:text-[24px]">
              Francesinhas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
