import CloudButton from "./CloudButton";
import CloudTextContainer from "./CloudTextContainer";

export default function CloudsContainer() {
  return (
    <div className="relative sm:ml-[160px] sm:mt-[67px]">
      <CloudTextContainer>
        <div className="mb-2 font-unbutton text-[20px] font-normal sm:text-[50px]">
          DONT MISS A BEAT!
        </div>
        <div>Be the first to learn about:</div>
        <div>Call for proposals, Tickets, Workshops,</div>
        <div>Meetups, Discounts and so much more</div>
      </CloudTextContainer>
      <div className="absolute bottom-0 left-[-38px]">
        <CloudButton>Get your ticket here!</CloudButton>
      </div>
    </div>
  );
}
