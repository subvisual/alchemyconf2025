import Image from "next/image";
import TicketsBlob from "@/assets/icons/tickets_blob";
import AltButton from "../_components/AltButton";
import Button from "../_components/Button";
import ticketIcon from "@/assets/images/ticket_icon.svg";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="my-[136px] flex h-[860px] flex-col items-center"
    >
      <div className="relative z-10 mb-32 w-[300px] text-center font-koulen text-[120px] leading-none text-dark-blue">
        Tickets
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Tickets
        </span>
      </div>
      <div className="relative bottom-[235px]">
        <TicketsBlob className="opacity-25" />
        <div className="absolute left-[150px] top-[220px] flex w-[1500px] flex-row">
          <div className="mr-10 w-[570px] text-left font-alegreya_sans text-[32px] leading-[45px] text-dark-blue">
            Join us in celebrating Elixir! Choose the ticket option that best
            suits your needs and secure your spot at the most unique event the
            community’s ever seen.
          </div>
          <div className="left-[100px] ml-20 w-[400px]">
            <div className="mb-16 border-l-4 border-yellow pl-5">
              <p className="mb-4 flex flex-row items-center font-alegreya_sans text-5xl font-bold leading-none text-dark-blue">
                <Image src={ticketIcon} alt="" width={60} className="mr-4" />
                Regular
              </p>
              <p className="w-[250px] font-alegreya_sans text-2xl text-dark-blue">
                Full access to all talks and networking events
              </p>
              <div className="mt-9 flex flex-row items-center">
                <div className="mr-8 font-koulen text-5xl text-dark-blue">
                  250
                  <span className="font-koulen text-[32px] text-dark-blue">
                    €
                  </span>
                </div>
                <AltButton
                  className="font-medium"
                  text="Buy Tickets"
                  href="https://ti.to/subvisual/alchemy-conf-2025"
                />
              </div>
            </div>
            <div className="mb-8 border-l-4 border-yellow pl-5">
              <div className="mb-6 flex flex-row items-center font-alegreya_sans text-5xl font-bold leading-none text-dark-blue">
                <Image
                  src={ticketIcon}
                  alt=""
                  width={60}
                  className="absolute mr-4 rotate-[-10deg] opacity-80"
                />
                <Image
                  src={ticketIcon}
                  alt=""
                  width={60}
                  className="absolute mr-4 translate-y-[9px] rotate-[15deg] transform"
                />
                <p className="ml-[78px]">Groups</p>
              </div>
              <p className="w-[240px] font-alegreya_sans text-2xl text-dark-blue">
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
