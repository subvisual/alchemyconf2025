"use client";

import ConferenceDay from "./_components/ConferenceDay";
import WorkshopDay from "./_components/WorkshopDay";
import { useState } from "react";

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
        {/* TOGGLE BUTTON */}
        <div className="mb-12 mt-12 flex justify-start font-sofia_sans_extra_condensed text-5xl font-semibold desktop:mb-24">
          <div className="flex gap-4 overflow-hidden rounded-lg border-2 border-bordeux px-1 py-1">
            <button
              onClick={() => setActiveView("workshops")}
              className={`flex items-center justify-center rounded-lg px-4 pb-[1px] pt-1 transition-colors ${
                activeView === "workshops"
                  ? "bg-bordeux text-background"
                  : "bg-background text-bordeux"
              }`}
            >
              WORKSHOPS
            </button>
            <button
              onClick={() => setActiveView("talks")}
              className={`flex items-center justify-center rounded-lg px-4 pb-[1px] pt-1 transition-colors ${
                activeView === "talks"
                  ? "bg-bordeux text-background"
                  : "bg-background text-bordeux"
              }`}
            >
              TALKS
            </button>
          </div>
        </div>

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
