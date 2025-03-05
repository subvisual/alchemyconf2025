import ScheduleGeneral from "./ScheduleGeneral";
import ScheduleMobile from "./ScheduleMobile";

export default function SchedulePage() {
  return (
    <>
      <div className="hidden tablet:flex justify-center">
        <ScheduleGeneral />
      </div>
      <div className="tablet:hidden flex">
        <ScheduleMobile />
      </div>
    </>
  );
}
