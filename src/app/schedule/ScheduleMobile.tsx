"use client";
import { useState } from "react";

import schedule from "@/app/_constants/schedule.json";
import ConferenceDay from "./_components/ConferenceDay";
import WorkshopDay from "./_components/WorkshopDay";
import ScheduleToggle from "./_components/ScheduleToggle";

interface DayButtonProps {
  day: 1 | 2;
  activeDay: number;
  onClick: () => void;
  dayLabel: string;
  dateLabel: string;
  locationLabel: string;
}

const DayButton = ({ day, activeDay, onClick, dayLabel, dateLabel, locationLabel }: DayButtonProps) => (
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
      <span className="block mt-[-4px] text-left text-xl font-normal">
        {locationLabel}
      </span>
    </button>
  </div>
);

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeSchedule, setActiveSchedule] = useState<"workshops" | "talks">(
    "workshops",
  );

  const handleScheduleChange = (newSchedule: "workshops" | "talks") => {
    setActiveSchedule(newSchedule);
    setActiveDay(1);
  };

  return (
    <section
      id="schedule"
      className="mb-52 mt-28 flex flex-col items-start justify-center"
    >
      <ScheduleToggle
        activeView={activeSchedule}
        setActiveView={handleScheduleChange}
      />
      {/* DAYS SELECTOR */}
      <div className="w-full max-w-4xl">
        <div className="flex gap-12 font-sofia_sans_extra_condensed">
          <DayButton
            day={1}
            activeDay={activeDay}
            onClick={() => setActiveDay(1)}
            dayLabel={activeSchedule === "workshops" ? "Monday" : "Wednesday"}
            dateLabel={activeSchedule === "workshops" ? "March 31st" : "April 2nd"}
            locationLabel={activeSchedule === "workshops" ? "@GNRation" : "@Theatro Circo"}
          />
          <DayButton
            day={2}
            activeDay={activeDay}
            onClick={() => setActiveDay(2)}
            dayLabel={activeSchedule === "workshops" ? "Tuesday" : "Thursday"}
            dateLabel={activeSchedule === "workshops" ? "April 1st" : "April 3rd"}
            locationLabel={activeSchedule === "workshops" ? "@GNRation" : "@Theatro Circo"}
          />
        </div>
      </div>

      <div className="mt-[-10px] w-full font-sofia_sans_extra_condensed">
        <div className="relative">
          {activeSchedule === "workshops" ? (
            <WorkshopDay day={activeDay} />
          ) : (
            <ConferenceDay day={activeDay} />
          )}
        </div>
      </div>
    </section>
  );
}
