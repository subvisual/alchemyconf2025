"use client";
import { useState } from "react";
import speakers from "@/app/_constants/speakers.json";
import sponsors from "@/app/_constants/sponsors.json";

import schedule from "@/app/_constants/schedule.json";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import speakerImagesMob from "@/app/_constants/speakers_images_mob";
import sponsorLogos from "@/app/_constants/sponsors_logos";
import { normalizeChars } from "@/app/utils";

import Image from "next/image";

const getSponsorInfo = (type: string, id: number) => {
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
  };
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  // Get the schedule for the active day
  const currentSchedule = activeDay === 1 ? schedule.day1 : schedule.day2;

  return (
    <section
      id="schedule"
      className="mb-36 mt-28 flex flex-col items-center justify-center tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64"
    >
      {/* Days selector */}
      <div className="w-full max-w-4xl">
        <div className="flex gap-8 font-sofia_sans_extra_condensed">
          <div className="flex flex-col">
            <button
              onClick={() => setActiveDay(1)}
              className={`relative text-[64px] font-extrabold uppercase leading-[50px] tablet:text-[120px] tablet:leading-[120px] desktop:text-[140px] desktop:leading-[140px] ${
                activeDay === 1 ? "text-dark-blue" : "text-dark-blue/20"
              }`}
            >
              DAY 1
              {activeDay === 1 && (
                <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
                  DAY 1
                </span>
              )}
              <span className="block text-left text-xl font-normal">
                THURSDAY
              </span>
            </button>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setActiveDay(2)}
              className={`relative text-[64px] font-extrabold uppercase leading-[50px] tablet:text-[120px] tablet:leading-[120px] desktop:text-[140px] desktop:leading-[140px] ${
                activeDay === 2 ? "text-dark-blue" : "text-dark-blue/20"
              }`}
            >
              DAY 2
              {activeDay === 2 && (
                <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1">
                  DAY 2
                </span>
              )}
              <span className="block text-left text-xl font-normal">
                FRIDAY
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl font-sofia_sans_extra_condensed">
        <div className="relative">
          {/* Full-height timeline line */}
          <div className="absolute left-1 top-2 h-[calc(100%-16px)] w-1 bg-yellow/20"></div>

          {currentSchedule.map((item, index) => (
            <div key={index} className="relative flex gap-4 pb-5">
              {/* Timeline dot */}
              <div className="mt-2 h-3 w-3 rounded-full border-2 border-bordeux bg-background"></div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-xl font-medium text-bordeux">
                  {item.time}
                </div>

                {item.type === "break" ? (
                  <div className="flex items-center justify-between">
                    <div className="pr-5">
                      <h3 className="text-xl font-bold uppercase text-dark-blue">
                        COFFEE BREAK
                      </h3>
                      <p className="mt-1 font-alegreya_sans text-base text-dark-blue">
                        Sponsored by{" "}
                        <a
                          href={getSponsorInfo("breaks", item.sponsorId ?? 1).link}
                          className="font-semibold text-dark-blue underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {
                            sponsors.breaks.find((s) => s.id === item.sponsorId)
                              ?.name
                          }
                        </a>
                      </p>
                    </div>
                    <a
                      href={getSponsorInfo("breaks", item.sponsorId ?? 1).link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={getSponsorInfo("breaks", item.sponsorId ?? 1).logo}
                        width={90}
                        height={0}
                        alt="Sponsor"
                        className="flex-shrink-0"
                      />
                    </a>
                  </div>
                ) : item.type === "talk" ? (
                  <a
                    href={`/speakers#${normalizeChars(
                      (speakers.find((s) => s.id === item.speakerId)?.name ||
                        "") +
                        (speakers.find((s) => s.id === item.speakerId)
                          ?.surname || ""),
                    )}`}
                    className="block rounded-lg border-2 border-dark-blue p-3 transition-colors hover:bg-yellow/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="pr-5">
                        <h3 className="text-xl font-bold uppercase text-dark-blue">
                          {speakers.find((s) => s.id === item.speakerId)?.name +
                            " " +
                            speakers.find((s) => s.id === item.speakerId)
                              ?.surname || item.name}
                        </h3>
                        <p className="mt-1 font-alegreya_sans text-base text-dark-blue">
                          {speakers.find((s) => s.id === item.speakerId)
                            ?.talk_title || item.title}
                        </p>
                      </div>
                      <SpeakerBlobMobile
                        className="flex-shrink-0"
                        src={
                          speakerImagesMob[
                            (speakers.find((s) => s.id === item.speakerId)
                              ?.id ?? 1) - 1
                          ]?.src || ""
                        }
                        alt={
                          speakers.find((s) => s.id === item.speakerId)?.name ||
                          ""
                        }
                        height="45px"
                        width="45px"
                        imageX="0px"
                        imageY="-10px"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="mt-0">
                    <h3 className="text-xl font-bold text-dark-blue">
                      {item.title}
                    </h3>
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
