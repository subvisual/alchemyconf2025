"use client";
import { useState } from "react";

import schedule from "@/app/_constants/schedule.json";
import ConferenceDay from "./_components/ConferenceDay";

interface DayButtonProps {
  day: 1 | 2;
  activeDay: number;
  onClick: () => void;
  dayLabel: string;
  dateLabel: string;
}

const DayButton = ({ day, activeDay, onClick, dayLabel, dateLabel }: DayButtonProps) => (
  <div className="flex flex-col">
    <button
      onClick={onClick}
      className={`relative text-[64px] font-extrabold leading-[50px] ${
        activeDay === day ? "text-dark-blue" : "text-dark-blue/20"
      }`}
    >
      DAY {day}
      {activeDay === day && (
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D]">
          DAY {day}
        </span>
      )}
      <span className="block mt-2 text-left text-xl font-semibold">
        {dayLabel}
      </span>
      <span className="block mt-[-4px] text-left text-xl font-normal">
        {dateLabel}
      </span>
    </button>
  </div>
);

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  const currentSchedule =
    activeDay === 1 ? schedule.conferenceDay1 : schedule.conferenceDay2;

  return (
    <section
      id="schedule"
      className="desktop:mt-46 mb-36 mt-28 flex flex-col items-center justify-center"
    >
      {/* DAYS SELECTOR */}
      <div className="w-full max-w-4xl">
        <div className="flex gap-12 font-sofia_sans_extra_condensed">
          <DayButton
            day={1}
            activeDay={activeDay}
            onClick={() => setActiveDay(1)}
            dayLabel="Wednesday"
            dateLabel="April 2nd"
          />
          <DayButton
            day={2}
            activeDay={activeDay}
            onClick={() => setActiveDay(2)}
            dayLabel="Thursday"
            dateLabel="April 3rd"
          />
        </div>
      </div>

      <div className="mt-6 w-full font-sofia_sans_extra_condensed">
        <div className="relative">
          {currentSchedule.map((item, index) => (
            <ConferenceDay key={index} day={activeDay} />
          ))}
        </div>
      </div>
    </section>
  );
}
