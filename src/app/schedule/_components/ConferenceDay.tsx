"use client";

import Image from "next/image";
import useScreenSize, { ScreenSize } from "@/hooks/useScreenSize";
import { normalizeChars } from "@/app/utils";

import speakers from "@/app/_constants/speakers.json";
import sponsors from "@/app/_constants/sponsors.json";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import speakerImagesMob from "@/app/_constants/speakers_images_mob";
import sponsorLogos from "@/app/_constants/sponsors_logos";

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

export default function ConferenceDay({
  item,
  day,
}: {
  item: any;
  day: number;
}) {
  const screenSize = useScreenSize();

  return (
    <div
      key={day}
      className="relative flex gap-3 pb-4 tablet:gap-8 tablet:pb-6 desktop:gap-10 desktop:pb-7"
    >
      {/* TIMELINE DOT */}
      <div className="mt-2 h-3 w-3 rounded-full border-2 border-bordeux bg-background tablet:h-4 tablet:w-4 desktop:h-[18px] desktop:w-[18px]"></div>

      {/* CONTENT */}
      <div className="flex-1">
        <div className="text-xl font-bold text-bordeux tablet:text-2xl desktop:text-3xl">
          {item.time}
        </div>

        {/* COFFEE BREAK SECTION */}
        {item.type === "break" ? (
          <div className="mt-0 flex items-center justify-between desktop:mt-1">
            <div className="pr-5">
              <h3 className="text-xl font-medium uppercase text-dark-blue tablet:text-2xl desktop:text-3xl">
                COFFEE BREAK
              </h3>
              <p className="mt-1 font-alegreya_sans text-base text-dark-blue tablet:text-xl">
                Sponsored by{" "}
                <a
                  href={getSponsorInfo("breaks", item.sponsorId ?? 1).link}
                  className="font-semibold text-dark-blue underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sponsors.breaks.find((s) => s.id === item.sponsorId)?.name}
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
                width={150}
                height={150}
                alt={
                  sponsors.breaks.find((s) => s.id === item.sponsorId)?.name ||
                  "Sponsor"
                }
                className="mr-3 h-auto w-[90px] flex-shrink-0 tablet:w-[120px] desktop:mr-5 desktop:w-[150px]"
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </a>
          </div>
        ) : // TALK SECTION
        item.type === "talk" ? (
          <a
            href={
              screenSize === ScreenSize.Small
                ? `/speakers#${normalizeChars(
                    (speakers.find((s) => s.id === item.speakerId)?.name ||
                      "") +
                      (speakers.find((s) => s.id === item.speakerId)?.surname ||
                        ""),
                  )}`
                : `/speakers#${normalizeChars(
                    (speakers.find((s) => s.id === item.speakerId)?.name ||
                      "") +
                      "-" +
                      (speakers.find((s) => s.id === item.speakerId)?.surname ||
                        ""),
                  )}`
            }
            className="block rounded-lg border-2 border-dark-blue p-3 transition-colors hover:bg-bordeux/5 desktop:mt-2 desktop:p-4"
          >
            <div className="flex items-center justify-between">
              <div className="pr-5">
                <h3 className="text-xl font-bold uppercase text-dark-blue tablet:text-2xl desktop:text-3xl">
                  {speakers.find((s) => s.id === item.speakerId)?.name +
                    " " +
                    speakers.find((s) => s.id === item.speakerId)?.surname ||
                    item.name}
                </h3>
                <p className="mt-1 font-alegreya_sans text-base text-dark-blue tablet:text-xl desktop:text-2xl">
                  {speakers.find((s) => s.id === item.speakerId)?.talk_title ||
                    item.title}
                </p>
              </div>
              <SpeakerBlobMobile
                className="mr-3 flex-shrink-0 tablet:scale-110 desktop:mr-5 desktop:scale-[1.3]"
                src={
                  speakerImagesMob[
                    (speakers.find((s) => s.id === item.speakerId)?.id ?? 1) - 1
                  ]?.src || ""
                }
                alt={speakers.find((s) => s.id === item.speakerId)?.name || ""}
                height="45px"
                width="45px"
                imageX="0px"
                imageY="-10px"
              />
            </div>
          </a>
        ) : (
          // OTHER SECTION
          <div className="mt-0 desktop:mt-1">
            <h3 className="text-xl font-medium text-dark-blue tablet:text-2xl desktop:text-3xl">
              {item.title}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
