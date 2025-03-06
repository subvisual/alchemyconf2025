"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TalkDay from "./_components/TalkDay";
import WorkshopDay from "./_components/WorkshopDay";
import ScheduleToggle from "./_components/ScheduleToggle";

export default function ScheduleGeneral({
  initialView = "workshops",
}: {
  initialView?: "workshops" | "talks";
}) {
  const [activeView, setActiveView] = useState<"workshops" | "talks">(
    initialView,
  );
  const router = useRouter();

  const handleViewChange = (view: "workshops" | "talks") => {
    setActiveView(view);
    router.push(`/schedule/${view}`);
  };

  return (
    <section
      id="schedule"
      className="desktop:mt-46 mb-36 mt-28 flex flex-col items-center justify-center tablet:mb-56 tablet:mt-36 desktop:mb-56"
    >
      <div className="w-full max-w-[1440px]">
        <ScheduleToggle
          activeView={activeView}
          setActiveView={handleViewChange}
        />

        {activeView === "workshops" ? (
          <div className="flex flex-row font-sofia_sans_extra_condensed tablet:mb-20 tablet:gap-32 desktop:mb-20 desktop:gap-40">
            <div className="flex w-1/2 flex-col">
              <WorkshopDay day={1} mobile={false} />
            </div>
            <div className="flex w-1/2 flex-col">
              <WorkshopDay day={2} mobile={false} />
            </div>
          </div>
        ) : (
          <div className="flex flex-row font-sofia_sans_extra_condensed tablet:gap-32 desktop:gap-40">
            <div className="flex w-1/2 flex-col">
              <TalkDay day={1} mobile={false} />
            </div>
            <div className="flex w-1/2 flex-col">
              <TalkDay day={2} mobile={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
