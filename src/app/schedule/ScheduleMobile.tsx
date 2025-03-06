"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  locationLink: string;
}

const DayButton = ({ day, activeDay, onClick, dayLabel, dateLabel, locationLabel, locationLink }: DayButtonProps) => (
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
      <a href={locationLink} target="_blank" rel="noopener noreferrer" className="block mt-[-4px] text-left text-xl font-normal underline">{locationLabel}</a>
    </button>
  </div>
);

export default function ScheduleMobile({ 
  initialSchedule = "workshops" 
}: { 
  initialSchedule?: "workshops" | "talks" 
}) {
  const [activeDay, setActiveDay] = useState(1);
  const [activeSchedule, setActiveSchedule] = useState<"workshops" | "talks">(
    initialSchedule
  );
  const router = useRouter();

  const handleScheduleChange = (newSchedule: "workshops" | "talks") => {
    setActiveSchedule(newSchedule);
    setActiveDay(1);
    router.push(`/schedule/${newSchedule}`);
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
            dayLabel={activeSchedule === "workshops" ? schedule.workshopsDay1[0].weekDay ?? "" : schedule.conferenceDay1[0].weekDay ?? ""}
            dateLabel={activeSchedule === "workshops" ? schedule.workshopsDay1[0].monthDay ?? "" : schedule.conferenceDay1[0].monthDay ?? ""}
            locationLabel={activeSchedule === "workshops" ? schedule.workshopsDay1[0].location ?? "" : schedule.conferenceDay1[0].location ?? ""}
            locationLink={activeSchedule === "workshops" ? schedule.workshopsDay1[0].link ?? "" : schedule.conferenceDay1[0].link ?? ""}
          />
          <DayButton
            day={2}
            activeDay={activeDay}
            onClick={() => setActiveDay(2)}
            dayLabel={activeSchedule === "workshops" ? schedule.workshopsDay2[0].weekDay ?? "" : schedule.conferenceDay2[0].weekDay ?? ""}
            dateLabel={activeSchedule === "workshops" ? schedule.workshopsDay2[0].monthDay ?? "" : schedule.conferenceDay2[0].monthDay ?? ""}
            locationLabel={activeSchedule === "workshops" ? schedule.workshopsDay2[0].location ?? "" : schedule.conferenceDay2[0].location ?? ""}
            locationLink={activeSchedule === "workshops" ? schedule.workshopsDay2[0].link ?? "" : schedule.conferenceDay2[0].link ?? ""}
          />
        </div>
      </div>

      <div className="mt-[-10px] w-full font-sofia_sans_extra_condensed">
        <div className="relative">
          {activeSchedule === "workshops" ? (
            <WorkshopDay day={activeDay} mobile={true} />
          ) : (
            <ConferenceDay day={activeDay} mobile={true} />
          )}
        </div>
      </div>
    </section>
  );
}
