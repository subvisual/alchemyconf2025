import Image from "next/image";
import TicketsBlob from "@/assets/icons/tickets_blob";
import AltButton from "../_components/AltButton";
import Button from "../_components/Button";
import ticketIcon from "@/assets/images/ticket_icon.svg";
import PracticalBlob from "@/assets/icons/practical_blob";
import CurvedArrow from "@/assets/icons/curved_arrow";

export default function Practical() {
  return (
    <section
      id="practical"
      className="tablet:mb-[500px] desktop:mb-[800px] desktop:mt-32 flex flex-col items-center justify-center"
    >
      <div className="relative z-0 flex w-full max-w-[1440px] flex-col items-center justify-center">
        <div className="absolute -z-10 h-0 w-0">
          <PracticalBlob className="relative -z-10 translate-x-[-890px] mobile:scale-[0.9] tablet:translate-x-[-550px] tablet:scale-[0.9] desktop:translate-x-[-700px] desktop:scale-[1.2]" />
        </div>
        <div className="flex w-full flex-col items-center justify-center tablet:w-[1500px] tablet:translate-x-[-350px] tablet:translate-y-[220px] tablet:flex-row tablet:items-start tablet:justify-center desktop:translate-x-[-450px] desktop:translate-y-[190px]">
          <div className="mb-16 border-l-4 border-yellow pl-5">
            <p className="w-full font-alegreya_sans text-xl font-bold text-background tablet:text-[26px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
              Where to stay? <br /> What to do? <br /> What to eat?
            </p>
          </div>
        </div>
        <div className="relative flex flex-row items-center justify-center translate-x-[60px] translate-y-[250px] tablet:gap-20 desktop:gap-40">
          <p className="font-alegreya_sans text-xl text-background tablet:w-[390px] desktop:w-[450px] tablet:text-2xl">
            We’ve gathered all the stuff you need to prepare for your trip to
            Braga in our <span className="font-bold">practical guide</span>
          </p>
          <Button className="font-medium" text="See Practical Guide" href="" />
        </div>
        <div className="relative flex flex-row items-center justify-center translate-x-[100px] translate-y-[250px]">
          <CurvedArrow className="relative -z-10 mobile:scale-[0.9] desktop:scale-[1.2]" />
        </div>
      </div>
    </section>
  );
}
