import schedule from "@/app/_constants/schedule.json";

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="mb-20 mt-40 flex flex-col items-center justify-center tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64"
    >
      <h1 className="tablet:pb-22 relative pb-16 text-center font-sofia_sans_extra_condensed text-[50px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Schedule
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
          Schedule
        </span>
      </h1>

      <div className="mt-12 font-sofia_sans_extra_condensed w-full max-w-4xl">
        <div className="relative">
          {/* Full-height timeline line */}
          <div className="absolute left-2 top-2 h-[calc(100%-16px)] w-1 bg-yellow/20"></div>
          
          {schedule.map((item, index) => (
            <div key={index} className="relative flex gap-8 pb-8">
              {/* Timeline dot only */}
              <div className="mt-1.5 h-4 w-4 rounded-full border-2 border-bordeux bg-background"></div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-lg font-medium text-bordeux">{item.time}</div>
                
                {item.isBreak ? (
                  <div className="mt-2 rounded-lg bg-yellow/10 p-6">
                    <h3 className="text-xl font-bold text-dark-blue">{item.title}</h3>
                    {item.subtitle && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-dark-blue">Sponsored by</span>
                        {item.sponsorLogo && (
                          <img src={item.sponsorLogo} alt="Sponsor" className="h-6" />
                        )}
                      </div>
                    )}
                  </div>
                ) : item.speaker ? (
                  <div className=" rounded-lg border-2 border-dark-blue/10 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-dark-blue">{item.title}</h3>
                        <p className="mt-1 text-dark-blue/80">{item.subtitle}</p>
                      </div>
                      {item.speaker.image && (
                        <img 
                          src={item.speaker.image} 
                          alt={item.speaker.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <h3 className="text-xl font-bold text-dark-blue">{item.title}</h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
