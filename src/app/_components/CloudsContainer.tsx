"use client";

import useScreenSize from "@/hooks/useScreenSize";
import CloudButton from "./CloudButton";
import CloudTextContainer from "./CloudTextContainer";
import { DiscoBall } from "./DiscoBall";
import LogoAnimation from "./LogoAnimation";

export default function CloudsContainer() {
  return (
    <div className="relative mt-[155px] md:ml-[195px] md:mt-[120px]">
      <CloudTextContainer>
        <div className="ml-6 pb-2 font-unbutton text-[28px] font-normal sm:ml-0 sm:text-[38px] md:text-[50px]">
          DON&apos;T MISS A BEAT!
        </div>
        <div className="text-center text-base leading-7 sm:text-xl">
          <p>Be the first to learn about:</p>
          <p>Call for proposals, Tickets, Workshops,</p>
          <p>Meetups, Discounts and so much more!</p>
        </div>
      </CloudTextContainer>
      <div className="absolute bottom-[-100px] left-[20px] sm:bottom-0 sm:left-[-38px]">
        <CloudButton>Get your ticket here!</CloudButton>
      </div>
      <div className="absolute bottom-[75%] left-[8%] sm:bottom-[70%] sm:left-[70%]">
        <DiscoBall />
      </div>
      <LogoAnimation />
    </div>
  );
}
