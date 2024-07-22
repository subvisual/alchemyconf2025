import CloudButton from "./CloudButton";
import CloudTextContainer from "./CloudTextContainer";
import { DiscoBall } from "./discoball";

export default function CloudsContainer() {
  return (
    <>
      <div className="relative pt-32">
        <DiscoBall />

        <CloudTextContainer>
          <div className="mb-2 ml-2 font-unbutton text-[24px] font-normal sm:text-[50px]">
            DONT MISS A BEAT!
          </div>
          <div>Be the first to learn about:</div>
          <div>Call for proposals, Tickets, Workshops,</div>
          <div>Meetups, Discounts and so much more!</div>
        </CloudTextContainer>
        <div className="absolute bottom-[-100px] sm:bottom-0 sm:left-[-38px]">
          <CloudButton>Get your ticket here!</CloudButton>
        </div>
      </div>
    </>
  );
}
