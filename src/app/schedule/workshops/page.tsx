import ScheduleGeneral from "../ScheduleGeneral";
import ScheduleMobile from "../ScheduleMobile";

export default function WorkshopsPage() {
  return (
    <>
      <div className="hidden justify-center tablet:flex">
        <ScheduleGeneral initialView="workshops" />
      </div>
      <div className="flex tablet:hidden">
        <ScheduleMobile initialSchedule="workshops" />
      </div>
    </>
  );
}
