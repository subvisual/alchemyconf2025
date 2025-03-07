"use client";

import schedule from "@/app/_constants/schedule.json";
import speakers from "@/app/_constants/speakers.json";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import speakerImagesMob from "@/app/_constants/speakers_images_mob";

export default function WorkshopDay({
  day,
  mobile,
}: {
  day: number;
  mobile?: boolean;
}) {
  return (
    <>
      <div className="relative hidden text-[64px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:block tablet:pl-8 tablet:text-[80px] tablet:leading-[80px] desktop:pl-10 desktop:text-[100px] desktop:leading-[100px]">
        {day === 1 ? "DAY 1" : "DAY 2"}
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-[36px] tablet:translate-y-[4px] desktop:translate-x-[46px] desktop:translate-y-[5px]">
          {day === 1 ? "DAY 1" : "DAY 2"}
        </span>
      </div>
      <div className="mt-8 w-full font-sofia_sans_extra_condensed tablet:mt-2 desktop:mt-2">
        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-1 top-2 h-[calc(100%-16px)] w-1 bg-yellow/20 tablet:w-2 desktop:right-0.5 desktop:w-[9px]"></div>
          {schedule[`workshopsDay${day}` as keyof typeof schedule].map(
            (item: any, index: number) => (
              <div
                key={`${day}-${index}`}
                className={`relative flex gap-3 ${item.type === "date" && mobile ? "hidden" : "pb-1 tablet:gap-4 tablet:pb-2 desktop:gap-6 desktop:pb-4"}`}
              >
                {/* TIMELINE DOT */}
                <div className="mt-[6px] h-3 w-3 rounded-full border-2 border-bordeux bg-bordeux tablet:h-4 tablet:w-4 desktop:h-[18px] desktop:w-[18px]"></div>

                {/* CONTENT */}
                <div className="flex-1">
                  {item.type !== "date" ? (
                    <div className="text-base font-bold text-bordeux tablet:text-lg desktop:text-xl">
                      {item.timeStart} - {item.timeEnd}
                    </div>
                  ) : null}

                  {/* WORKSHOP SECTION */}
                  {item.type === "date" ? (
                    mobile ? null : (
                      <div className="hidden gap-3 pb-4 tablet:block tablet:gap-4 tablet:pb-5 desktop:pb-6">
                        <span className="font-semibold text-dark-blue tablet:text-2xl desktop:text-[28px] desktop:leading-[34px]">
                          {item.weekDay} <br />
                        </span>
                        <span className="font-normal text-dark-blue tablet:text-2xl desktop:text-[28px] desktop:leading-[34px]">
                          {item.monthDay} {"- "}
                        </span>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-normal text-dark-blue underline tablet:text-2xl desktop:text-[28px] desktop:leading-[34px]"
                        >
                          {item.location}
                        </a>
                      </div>
                    )
                  ) : // WORKSHOP SECTION
                  item.type === "workshop" ? (
                    <a
                      href={
                        speakers.find((s) => s.id === item.speakerId)
                          ?.workshop_link || ""
                      }
                      className="block rounded-lg border-2 border-dark-blue p-3 transition-colors hover:bg-bordeux/5 desktop:mt-0 desktop:p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="pr-6">
                          <p className="text-lg font-bold uppercase text-dark-blue tablet:text-lg desktop:text-xl">
                            {speakers.find((s) => s.id === item.speakerId)
                              ?.name +
                              " " +
                              speakers.find((s) => s.id === item.speakerId)
                                ?.surname || item.name}
                          </p>
                          <p className="mt-1 font-alegreya_sans text-base font-semibold text-dark-blue tablet:text-base desktop:text-lg">
                            {speakers.find((s) => s.id === item.speakerId)
                              ?.workshop_title || item.title}
                          </p>
                          <p className="mt-3 font-alegreya_sans text-base text-dark-blue tablet:text-base desktop:text-lg">
                            {speakers.find((s) => s.id === item.speakerId)
                              ?.workshop_resume || item.description}
                          </p>
                        </div>
                        <SpeakerBlobMobile
                          className="mr-3 flex-shrink-0 scale-[1.4] tablet:scale-[1.6] desktop:mr-5 desktop:scale-[1.7]"
                          src={
                            speakerImagesMob[
                              (speakers.find((s) => s.id === item.speakerId)
                                ?.id ?? 1) - 1
                            ]?.src || ""
                          }
                          alt={
                            speakers.find((s) => s.id === item.speakerId)
                              ?.name || ""
                          }
                          height="45px"
                          width="45px"
                          imageX="0px"
                          imageY="-10px"
                        />
                      </div>
                    </a>
                  ) : item.type === "outro" ? ( // OTHER SECTION
                    <div className="mt-[-4px] tablet:mt-[-4px] desktop:mt-[-2px]">
                      <h3 className="text-base font-semibold uppercase text-dark-blue tablet:text-lg desktop:text-xl">
                        {item.title}
                      </h3>
                    </div>
                  ) : null}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
