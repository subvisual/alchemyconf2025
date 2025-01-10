import Image from "next/image";
import TicketsBlob from "@/assets/icons/tickets_blob";
import AltButton from "../_components/AltButton";
import Button from "../_components/Button";
import ticketIcon from "@/assets/images/ticket_icon.svg";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="mt-[136px] flex h-[860px] flex-col items-center"
    >
      <h1 className="relative z-10 pb-24 text-center font-sofia_sans_extra_condensed font-extrabold uppercase text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Tickets
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] tablet:translate-x-1 tablet:translate-y-1 text-[#7D1D3F3D]">
          Tickets
        </span>
      </h1>

      <div className="relative bottom-[235px] z-0">
        <TicketsBlob className="opacity-25 mobile:translate-x-[-260px] mobile:translate-y-[110px] mobile:scale-[0.9] tablet:translate-x-0 tablet:translate-y-4 desktop:translate-x-0 desktop:translate-y-4" />
        <div className="absolute left-[480px] top-[210px] flex mobile:w-[310px] mobile:flex-col tablet:left-[260px] tablet:top-[220px] tablet:w-[1500px] tablet:flex-row desktop:left-[150px]">
          <div className="text-left font-alegreya_sans text-xl text-dark-blue mobile:mb-[50px] mobile:text-center tablet:flex tablet:w-[470px] tablet:pb-20 tablet:text-[26px] tablet:leading-[36px] desktop:w-[570px] desktop:text-[32px] desktop:leading-[44px]">
            Join us in celebrating Elixir! Choose the ticket option that best
            suits your needs and secure your spot at the most unique event the
            community’s ever seen.
          </div>

          <div className="w-[400px] flex-col pl-8 tablet:left-[100px] tablet:flex desktop:pl-20">
            <div className="mb-16 border-l-4 border-yellow pl-5">
              <p className="mb-4 flex flex-row items-center font-alegreya_sans text-2xl font-bold leading-none text-dark-blue tablet:text-3xl desktop:text-5xl">
                <Image src={ticketIcon} alt="" width={60} className="mr-4" />
                Regular
              </p>
              <p className="w-[250px] font-alegreya_sans text-xl text-dark-blue desktop:text-2xl">
                Full access to all talks and networking events
              </p>
              <div className="mt-9 flex flex-row items-center font-alegreya_sans font-semibold">
                <div className="mr-8 text-4xl text-dark-blue tablet:text-5xl">
                  300
                  <span className="text-[32px] text-dark-blue">€</span>
                </div>
                <AltButton
                  className="font-medium"
                  text="Get Tickets"
                  href="https://membrz.club/alchemyconf/events/alchemy-conference-2025"
                />
              </div>
            </div>

            <div className="mb-8 border-l-4 border-yellow pl-5">
              <div className="mb-4 flex flex-row items-center font-alegreya_sans text-2xl font-bold leading-none text-dark-blue tablet:text-3xl desktop:text-5xl">
                <Image
                  src={ticketIcon}
                  alt="Ticket icon"
                  width={60}
                  className="absolute mr-4 rotate-[-10deg] opacity-80"
                />
                <Image
                  src={ticketIcon}
                  alt="Ticket icon"
                  width={60}
                  className="absolute mr-4 translate-y-[9px] rotate-[15deg] transform"
                />
                <p className="ml-[78px]">Groups</p>
              </div>
              <p className="w-[240px] font-alegreya_sans text-xl text-dark-blue desktop:text-2xl">
                Discounts to purchases of{" "}
                <span className="font-bold">5 or more</span> tickets
              </p>
              <div className="mt-9 flex flex-row items-center">
                <Button
                  className="font-medium"
                  text="Contact us"
                  href="mailto:hello@alchemyconf.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
