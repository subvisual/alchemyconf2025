"use client";

import schedule from "@/app/_constants/schedule.json";
import ConferenceDay from "./_components/ConferenceDay";
import { useState } from "react";

interface DayButtonProps {
  day: 1 | 2;
  activeDay: number;
  onClick: () => void;
  dayLabel: string;
}

const DayButton = ({ day, activeDay, onClick, dayLabel }: DayButtonProps) => (
  <div className="flex flex-col">
    <button
      onClick={onClick}
      className={`relative text-[64px] font-extrabold uppercase leading-[50px] tablet:text-[120px] tablet:leading-[120px] desktop:text-[140px] desktop:leading-[140px] ${
        activeDay === day ? "text-dark-blue" : "text-dark-blue/20"
      }`}
    >
      DAY {day}
      {activeDay === day && (
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
          DAY {day}
        </span>
      )}
      <span className="block text-left text-xl font-normal tablet:text-4xl desktop:text-5xl">
        {dayLabel}
      </span>
    </button>
  </div>
);

export default function ScheduleGeneral() {
  const [activeView, setActiveView] = useState<"workshops" | "talks">("workshops");
  
  return (
    <section
      id="schedule"
      className="desktop:mt-46 mb-36 mt-28 flex flex-col items-center justify-center tablet:mb-56 tablet:mt-36 desktop:mb-56"
    >
      <div className="w-full max-w-[1440px]">
        {/* TOGGLE BUTTON */}
        <div className="mb-12 mt-12 flex justify-start text-5xl font-semibold font-sofia_sans_extra_condensed">
          <div className="flex rounded-lg gap-4 border-2 py-1 px-1 border-[#7D1D3F] overflow-hidden">
            <button
              onClick={() => setActiveView("workshops")}
              className={`px-4 pt-1 pb-[1px] rounded-lg transition-colors flex items-center justify-center ${
                activeView === "workshops" 
                  ? "bg-[#7D1D3F] text-background" 
                  : "bg-background text-[#7D1D3F]"
              }`}
            >
              WORKSHOPS
            </button>
            <button
              onClick={() => setActiveView("talks")}
              className={`px-4 pt-1 pb-[1px] rounded-lg transition-colors flex items-center justify-center ${
                activeView === "talks" 
                  ? "bg-[#7D1D3F] text-background" 
                  : "bg-background text-[#7D1D3F]"
              }`}
            >
              TALKS
            </button>
          </div>
        </div>


        <div className="flex flex-row font-sofia_sans_extra_condensed tablet:gap-40 desktop:gap-52">
          {/* Day 1 Column */}
          <div className="flex flex-col">
            <div className="relative text-[64px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:pl-12 tablet:text-[120px] tablet:leading-[120px] desktop:pl-14 desktop:text-[140px] desktop:leading-[140px]">
              DAY 1
              <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-[54px] tablet:translate-y-[6px] desktop:translate-x-[62px] desktop:translate-y-[6px]">
                DAY 1
              </span>
            </div>

            <div className="mt-8 w-full font-sofia_sans_extra_condensed tablet:mt-6 desktop:mt-8">
              <div className="relative">
                {/* TIMELINE LINE */}
                <div className="absolute left-2 top-2 h-[calc(100%-16px)] w-0 bg-yellow/20 tablet:w-2 desktop:right-0.5 desktop:w-[9px]"></div>
                <div className="gap-3 pb-4 tablet:gap-4 tablet:pb-16 tablet:pl-12 desktop:pb-20 desktop:pl-14">
                  <span className="text-xl font-semibold text-dark-blue tablet:text-3xl desktop:text-4xl">
                    Wednesday <br />
                  </span>
                  <span className="text-xl font-normal text-dark-blue tablet:text-3xl desktop:text-4xl">
                    April 2nd
                  </span>
                </div>
                {schedule.conferenceDay1.map((item, index) => (
                  <ConferenceDay key={index} day={1} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 Column */}
          <div className="flex flex-col">
          <div className="relative text-[64px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:pl-12 tablet:text-[120px] tablet:leading-[120px] desktop:pl-14 desktop:text-[140px] desktop:leading-[140px]">
              DAY 2
              <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-[54px] tablet:translate-y-[6px] desktop:translate-x-[62px] desktop:translate-y-[6px]">
                DAY 2
              </span>
            </div>
            <div className="mt-8 w-full font-sofia_sans_extra_condensed tablet:mt-6 desktop:mt-8">
              <div className="relative">
                {/* TIMELINE LINE */}
                <div className="absolute left-1 top-2 h-[calc(100%-16px)] w-1 bg-yellow/20 tablet:w-2 desktop:right-0.5 desktop:w-[9px]"></div>
                <div className="gap-3 pb-4 tablet:gap-4 tablet:pb-16 tablet:pl-12 desktop:pb-20 desktop:pl-14">
                  <span className="text-xl font-semibold text-dark-blue tablet:text-3xl desktop:text-4xl">
                    Thursday <br />
                  </span>
                  <span className="text-xl font-normal text-dark-blue tablet:text-3xl desktop:text-4xl">
                    April 3rd
                  </span>
                </div>
                {schedule.conferenceDay2.map((item, index) => (
                  <ConferenceDay key={index} day={2} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
