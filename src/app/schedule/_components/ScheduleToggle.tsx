interface ScheduleToggleProps {
  activeView: "workshops" | "talks";
  setActiveView: (view: "workshops" | "talks") => void;
}

export default function ScheduleToggle({ activeView, setActiveView }: ScheduleToggleProps) {
  return (
    <div className="mb-8 flex justify-start font-sofia_sans_extra_condensed text-2xl tablet:text-3xl desktop:text-4xl font-semibold tablet:mt-4 tablet:mb-12 desktop:mt-6 desktop:mb-16">
      <div className="flex gap-4 overflow-hidden rounded-[8px] tablet:rounded-lg border-[1px] border-bordeux px-[2px] py-[2px] tablet:px-[4px] tablet:py-1">
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
  );
}
