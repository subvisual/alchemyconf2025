import ScheduleGeneral from "../ScheduleGeneral";
import ScheduleMobile from "../ScheduleMobile";

export default function TalksPage() {
  return (
    <>
      <div className="hidden justify-center tablet:flex">
        <ScheduleGeneral initialView="talks" />
      </div>
      <div className="flex tablet:hidden">
        <ScheduleMobile initialSchedule="talks" />
      </div>
    </>
  );
}
