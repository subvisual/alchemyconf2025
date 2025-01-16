import Image from "next/image";
import TicketsBlob from "@/assets/icons/tickets_blob";
import AltButton from "../_components/AltButton";
import Button from "../_components/Button";
import ticketIcon from "@/assets/images/ticket_icon.svg";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="mt-32 flex flex-col items-center justify-center"
    >
      <h1 className="relative z-10 pb-24 text-center font-sofia_sans_extra_condensed font-extrabold uppercase text-[50px] leading-[50px] text-dark-blue tablet:pb-10 tablet:text-[120px] tablet:leading-[120px] desktop:pb-8 desktop:text-[140px] desktop:leading-[140px]">
        Tickets
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] tablet:translate-x-1 tablet:translate-y-1 text-[#7D1D3F3D]">
          Tickets
        </span>
      </h1>

      <div className="w-full max-w-[1440px] z-0 flex justify-center items-center relative">
        <div className="absolute -z-10 w-0 h-0 ">
          <TicketsBlob className="absolute -z-10 opacity-25 translate-x-[-890px] translate-y-[-430px] mobile:scale-[0.9] tablet:translate-x-[-660px] tablet:translate-y-[-400px] desktop:translate-x-[-660px] desktop:translate-y-[-400px]" />
        </div>
        <div className="flex w-full flex-col justify-center items-center tablet:w-[1500px] tablet:flex-row tablet:justify-evenly tablet:items-start tablet:translate-y-[50px] desktop:justify-center desktop:translate-y-[70px]">
          <div className="font-alegreya_sans max-w-[400px] text-xl text-dark-blue mobile:mb-[35px] text-left tablet:text-left tablet:flex tablet:w-[470px] tablet:pb-20 tablet:text-[26px] tablet:leading-[36px] desktop:w-[600px] desktop:max-w-[1000px] desktop:text-[32px] desktop:leading-[44px]">
            Join us in celebrating Elixir! Choose the ticket option that best
            suits your needs and secure your spot at the most unique event the
            community’s ever seen.
          </div>

          <div className="flex-col justify-center tablet:left-[100px] tablet:flex tablet:ml-2 desktop:pl-20">
            <div className="mb-16 border-l-4 border-yellow pl-5">
              <p className="mb-4 flex flex-row items-center font-alegreya_sans text-2xl font-bold leading-none text-dark-blue tablet:text-3xl desktop:text-5xl">
                <Image src={ticketIcon} alt="" width={60} className="mr-4" />
                Regular
              </p>
              <p className="w-full font-alegreya_sans text-xl text-dark-blue desktop:text-2xl">
                Full access to all talks and <br /> networking events
              </p>
              <div className="mt-9 flex flex-row items-center font-alegreya_sans font-semibold">
                <div className="mr-8 text-4xl text-dark-blue tablet:text-5xl">
                  300
                  <span className="text-[32px] text-dark-blue">€</span>
                </div>
                <AltButton
                  className="font-medium"
                  text="Get Tickets"
                  href="https://membrz.club/alchemyconf/events"
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
              <p className="w-full font-alegreya_sans text-xl text-dark-blue desktop:text-2xl">
                Discounts to purchases of{" "} <br />
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
