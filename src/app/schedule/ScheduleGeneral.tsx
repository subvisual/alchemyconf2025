"use client";

import { useState } from "react";

import ConferenceDay from "./_components/ConferenceDay";
import WorkshopDay from "./_components/WorkshopDay";
import ScheduleToggle from "./_components/ScheduleToggle";

export default function ScheduleGeneral() {
  const [activeView, setActiveView] = useState<"workshops" | "talks">(
    "workshops",
  );

  return (
    <section
      id="schedule"
      className="desktop:mt-46 mb-36 mt-28 flex flex-col items-center justify-center tablet:mb-56 tablet:mt-36 desktop:mb-56"
    >
      <div className="w-full max-w-[1440px]">
        <ScheduleToggle activeView={activeView} setActiveView={setActiveView} />

        {activeView === "workshops" ? (
          <div className="flex flex-row font-sofia_sans_extra_condensed tablet:gap-32 desktop:gap-40">
            <div className="flex flex-col w-1/2">
              <WorkshopDay day={1} />
            </div>
            <div className="flex flex-col w-1/2">
              <WorkshopDay day={2} />
            </div>
          </div>
        ) : (
          <div className="flex flex-row font-sofia_sans_extra_condensed tablet:gap-32 desktop:gap-40">
            <div className="flex flex-col w-1/2">
              <ConferenceDay day={1} />
            </div>
            <div className="flex flex-col w-1/2">
              <ConferenceDay day={2} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
