"use client";

import SpeakerBlobMobileSm from "@/assets/icons/speaker_blob_mobile_sm";
import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";
import ArrowDown from "@/assets/icons/arrow_down";
import ArrowRight from "@/assets/icons/arrow_right";

import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";
import { useState } from "react";

interface InfoSectionProps {
  section_title: string;
  content_title?: string;
  content_description: string;
  color?: "dark-blue" | "yellow";
  isOpen: boolean;
  onToggle: () => void;
}

const InfoSection = ({
  section_title,
  content_title,
  content_description,
  color = "dark-blue",
  isOpen,
  onToggle,
}: InfoSectionProps) => {
  return (
    <div className="flex w-full flex-col gap-4 pb-2">
      <button onClick={onToggle} className="w-full">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <p
              className={`text-left font-normal uppercase ${
                color === "dark-blue" ? "text-dark-blue" : "text-yellow"
              }`}
            >
              {section_title}
            </p>
            {isOpen ? (
              <ArrowRight
                className="mr-[6px] h-4 w-4"
                color={color === "dark-blue" ? "#003049" : "#F4AC45"}
              />
            ) : (
              <ArrowDown
                className="mr-[6px] h-4 w-4"
                color={color === "dark-blue" ? "#003049" : "#F4AC45"}
              />
            )}
          </div>
          <span
            className={`h-1 w-full ${
              color === "dark-blue" ? "bg-dark-blue" : "bg-yellow"
            }`}
          ></span>
        </div>
      </button>
      {isOpen && (
        <div className="">
          {content_title && <p className="font-bold">{content_title}</p>}
          <p>{content_description}</p>
        </div>
      )}
    </div>
  );
};

interface SpeakerDetailsProps {
  name: string;
  surname: string;
  x_link: string;
  git_link: string;
  web_link: string;
}

const SpeakerDetails = ({
  name,
  surname,
  x_link,
  git_link,
  web_link,
}: SpeakerDetailsProps) => (
  <div className="flex w-full flex-col items-center">
    <h1 className="relative text-center font-koulen text-[64px] leading-[64px]">
      {name + " " + surname}{" "}
      <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
        {name + " " + surname}{" "}
      </span>
    </h1>
    <div className="flex w-full items-center justify-center space-x-2 pb-2">
      {x_link && <XIcon link={x_link} className="h-6" />}
      {git_link && <GithubIcon link={git_link} className="h-6" />}
      {web_link && <WebIcon link={web_link} className="h-6" />}
    </div>
  </div>
);

export default function SpeakersMobile() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  return (
    <section className="mx-auto mb-40 mt-14 flex w-full flex-col items-center justify-center">
      {speakers.map((speaker) => {
        const bioSectionId = `bio-${speaker.id}`;
        const talkSectionId = `talk-${speaker.id}`;
        const workshopSectionId = `workshop-${speaker.id}`;

        return (
          <div
            key={speaker.id}
            id={`smob-${speaker.id}`}
            className="mb-12 flex w-full scroll-mt-12 flex-col items-center justify-center gap-4 font-alegreya_sans font-normal text-dark-blue"
          >
            <SpeakerBlobMobileSm
              src={speakerImages[speaker.id - 1].src}
              alt={speaker.name}
              height="350px"
              width="350px"
              position={String(speaker.id)}
              blobType={speaker.blobType}
              imageX={speaker.image_x_mob_sm}
              imageY={speaker.image_y_mob_sm}
              imageScale={Number(speaker.image_scale_mob_sm)}
              className="-z-10 translate-x-[80px] translate-y-[80px]"
            />
            <SpeakerDetails
              name={speaker.name}
              surname={speaker.surname}
              x_link={speaker.x_link}
              git_link={speaker.git_link}
              web_link={speaker.web_link}
            />
            <InfoSection
              section_title="Short Bio"
              content_title={""}
              content_description={speaker.bio || ""}
              color="dark-blue"
              isOpen={activeSectionId === bioSectionId}
              onToggle={() =>
                setActiveSectionId(
                  activeSectionId === bioSectionId ? null : bioSectionId,
                )
              }
            />
            {speaker.talk_title && (
              <InfoSection
                section_title="Talk Topic"
                content_title={speaker.talk_title}
                content_description={speaker.talk_description || ""}
                color="yellow"
                isOpen={activeSectionId === talkSectionId}
                onToggle={() =>
                  setActiveSectionId(
                    activeSectionId === talkSectionId ? null : talkSectionId,
                  )
                }
              />
            )}
            {speaker.workshop_title && (
              <InfoSection
                section_title="Workshop"
                content_title={speaker.workshop_title}
                content_description={speaker.workshop_description || ""}
                color="yellow"
                isOpen={activeSectionId === workshopSectionId}
                onToggle={() =>
                  setActiveSectionId(
                    activeSectionId === workshopSectionId
                      ? null
                      : workshopSectionId,
                  )
                }
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
