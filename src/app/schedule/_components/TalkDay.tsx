"use client";

import Image from "next/image";
import useScreenSize, { ScreenSize } from "@/hooks/useScreenSize";
import { normalizeChars } from "@/app/utils";

import schedule from "@/app/_constants/schedule.json";
import speakers from "@/app/_constants/speakers.json";
import sponsors from "@/app/_constants/sponsors.json";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import speakerImagesMob from "@/app/_constants/speakers_images_mob";
import sponsorLogos from "@/app/_constants/sponsors_logos";

export const getSponsorInfo = (type: string, id: number) => {
  const sponsorTypes = sponsors as Record<
    string,
    Array<{ id: number; logo: string; name: string; link: string }>
  >;

  const sponsor = sponsorTypes[type]?.find((s) => s.id === id);

  return {
    logo: sponsorLogos[
      (sponsor?.logo as keyof typeof sponsorLogos) || "remoteLogo"
    ].src,
    link: sponsor?.link,
    name: sponsor?.name,
  };
};

export default function TalkDay({
  day,
  mobile,
}: {
  day: number;
  mobile?: boolean;
}) {
  const screenSize = useScreenSize();

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
          {schedule[`conferenceDay${day}` as keyof typeof schedule].map(
            (item: any, index: number) => (
              <div
                key={`${day}-${index}`}
                className={`relative flex gap-3 ${item.type === "date" && mobile ? "hidden" : "pb-1 tablet:gap-4 tablet:pb-2 desktop:gap-6 desktop:pb-4"}`}
              >
                {/* TIMELINE DOT */}
                <div
                  className={`mt-[6px] h-3 w-3 rounded-full border-2 border-bordeux ${
                    item.type === "break" || item.type === "outro"
                      ? "bg-background"
                      : "bg-bordeux"
                  } tablet:h-4 tablet:w-4 desktop:h-[18px] desktop:w-[18px]`}
                ></div>

                {/* CONTENT */}
                <div className="flex-1">
                  {item.type !== "date" ? (
                    <div className="text-base font-bold text-bordeux tablet:text-lg desktop:text-xl">
                      {item.time}
                    </div>
                  ) : null}

                  {/* DATE SECTION */}
                  {item.type === "date" ? (
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
                  ) : // BREAK SECTION
                  item.type === "break" ? (
                    <div className="mt-[-4px] flex items-center justify-between tablet:mt-[-4px] desktop:mt-[-2px]">
                      <div className="pr-5">
                        <h3 className="text-base font-medium uppercase text-dark-blue tablet:text-lg desktop:text-xl">
                          {item.title}
                        </h3>
                        {item.sponsorId !== 0 && (
                          <p className="mt-[-2px] font-alegreya_sans text-base text-dark-blue tablet:text-base desktop:text-lg">
                            Sponsored by{" "}
                            <a
                              href={
                                getSponsorInfo("breaks", item.sponsorId ?? 1)
                                  .link
                              }
                              className="font-semibold text-dark-blue underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {
                                getSponsorInfo("breaks", item.sponsorId ?? 1)
                                  .name
                              }
                            </a>
                          </p>
                        )}
                      </div>
                      {item.sponsorId !== 0 && (
                        <a
                          href={
                            getSponsorInfo("breaks", item.sponsorId ?? 1).link
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={
                              getSponsorInfo("breaks", item.sponsorId ?? 1).logo
                            }
                            width={150}
                            height={150}
                            alt={
                              getSponsorInfo("breaks", item.sponsorId ?? 1)
                                .name || "Sponsor"
                            }
                            className="mr-3 h-auto w-[90px] flex-shrink-0 tablet:w-[120px] desktop:mr-5 desktop:w-[150px]"
                            style={{
                              objectFit: "contain",
                              maxWidth: "100%",
                            }}
                          />
                        </a>
                      )}
                    </div>
                  ) : // TALK SECTION
                  item.type === "talk" ? (
                    <a
                      href={
                        screenSize === ScreenSize.Small
                          ? `/speakers#${normalizeChars(
                              (speakers.find((s) => s.id === item.speakerId)
                                ?.name || "") +
                                (speakers.find((s) => s.id === item.speakerId)
                                  ?.surname || ""),
                            )}`
                          : `/speakers#${normalizeChars(
                              (speakers.find((s) => s.id === item.speakerId)
                                ?.name || "") +
                                "-" +
                                (speakers.find((s) => s.id === item.speakerId)
                                  ?.surname || ""),
                            )}`
                      }
                      className="block rounded-lg border-2 border-dark-blue p-3 transition-colors hover:bg-bordeux/5 desktop:mt-0 desktop:p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="pr-5">
                          <h3 className="text-lg font-bold uppercase text-dark-blue tablet:text-lg desktop:text-xl">
                            {speakers.find((s) => s.id === item.speakerId)
                              ?.name +
                              " " +
                              speakers.find((s) => s.id === item.speakerId)
                                ?.surname || item.name}
                          </h3>
                          <p className="mt-1 font-alegreya_sans text-base text-dark-blue tablet:text-base desktop:text-lg">
                            {speakers.find((s) => s.id === item.speakerId)
                              ?.talk_title || item.title}
                          </p>
                        </div>
                        <SpeakerBlobMobile
                          className="mr-3 flex-shrink-0 tablet:scale-110 desktop:mr-3 desktop:scale-[1.2]"
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
                  ) : item.type === "outro" ? (
                    // OTHER SECTION
                    <div className="mt-[-4px] tablet:mt-[-4px] desktop:mt-[-2px]">
                      <h3 className="text-base font-medium text-dark-blue tablet:text-lg desktop:text-xl">
                        {item.title}
                      </h3>
                      {item.location && (
                        <p className="mt-[-2px] font-alegreya_sans text-base text-dark-blue tablet:text-base desktop:text-lg">
                          Location:{" "}
                          <a
                            href={item.location_link}
                            className="font-semibold text-dark-blue underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.location}
                          </a>
                        </p>
                      )}
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
