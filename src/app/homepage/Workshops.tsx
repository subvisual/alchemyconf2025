import Image from "next/image";
import TicketsBlob from "@/assets/icons/tickets_blob";
import AltButton from "../_components/AltButton";
import Button from "../_components/Button";
import ticketIcon from "@/assets/images/ticket_icon.svg";

export default function Workshops() {
  return (
    <section id="tickets" className="flex flex-col items-center justify-center">
      {/* <div className="relative z-10 mb-32 w-[300px] text-center font-koulen text-[120px] leading-none text-dark-blue"> */}
      {/*   Tickets */}
      {/*   <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]"> */}
      {/*     Tickets */}
      {/*   </span> */}
      {/* </div> */}
      <div className="relative left-[150px]">
        {/* <TicketsBlob className="opacity-25" /> */}
        <div className="flex w-[1500px] flex-row">
          <div className="left-[100px] ml-20 w-[400px]">
            <div className="mb-16 border-l-4 border-yellow pl-5">
              <p className="mb-4 flex flex-row items-center font-alegreya_sans text-5xl font-bold leading-none text-dark-blue">
                Workshops
              </p>
              <p className="w-[450px] font-alegreya_sans text-2xl text-dark-blue">
                Access to any of the 2-day workshops. They may have different
                number of slots available. Discount if you have a Regular
                Ticket.
              </p>
              <div className="mt-9 flex flex-row items-center">
                <div className="mr-8 font-koulen text-[32px] text-dark-blue">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
