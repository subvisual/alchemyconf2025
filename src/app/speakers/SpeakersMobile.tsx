"use client";

import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";
import ArrowDown from "@/assets/icons/arrow_down";
import ArrowRight from "@/assets/icons/arrow_right";

import speakers from "../_constants/speakers.json";
import speakerImagesMob from "../_constants/speakers_images_mob";
import { useState } from "react";
import SpeakerPageBlobMobile from "@/assets/icons/speaker_page_blob_mobile";
import AltButton from "../_components/AltButton";
import { normalizeChars } from "../utils";
import ReactMarkdown from 'react-markdown';


interface InfoSectionProps {
  section_title: string;
  content_title?: string;
  content_description: string;
  content_link?: string;
  color?: "dark-blue" | "yellow";
  isOpen: boolean;
  onToggle: () => void;
}

const InfoSection = ({
  section_title,
  content_title,
  content_description,
  content_link,
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
        <div className={`flex flex-col ${content_title !== "" ? "gap-2" : ""}`}>
          {content_title && (
            <p className="font-bold uppercase">{content_title}</p>
          )}
      <ReactMarkdown 
        className="whitespace-pre-line"
        components={{
          a: ({node, ...props}) => (
            <a 
              {...props} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-dark-blue underline"
            />
          )
        }}
      >
        {content_description}
      </ReactMarkdown>
          {content_link && (
            <div className="mb-2 mt-1 flex">
              <AltButton
                className="font-medium"
                text="Get Tickets"
                href={content_link}
              />
            </div>
          )}
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
    <h1 className="relative text-center font-sofia_sans_extra_condensed text-[64px] font-extrabold uppercase leading-[64px]">
      {name + " " + surname}{" "}
      <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D]">
        {name + " " + surname}{" "}
      </span>
    </h1>
    <div className="flex w-full items-center justify-center space-x-2 pt-2 pb-2">
      {x_link && <XIcon link={x_link} className="h-6" />}
      {git_link && <GithubIcon link={git_link} className="h-6" />}
      {web_link && <WebIcon link={web_link} className="h-6" />}
    </div>
  </div>
);

export default function SpeakersMobile() {
  const [activeSections, setActiveSections] = useState<Record<number, string>>(
    () => {
      return speakers
        .filter(speaker => speaker.id !== 13)
        .reduce(
          (acc, speaker) => {
            acc[speaker.id] = `bio-${speaker.id}`;
            return acc;
          },
          {} as Record<number, string>,
        );
    },
  );

  const handleSectionToggle = (speakerId: number, sectionId: string) => {
    setActiveSections((prev) => ({
      ...prev,
      [speakerId]: prev[speakerId] === sectionId ? "" : sectionId,
    }));
  };

  return (
    <section className="mx-auto mb-16 mt-48 flex w-full flex-col items-center justify-center">
      {speakers
        .filter(speaker => speaker.id !== 13)
        .map((speaker) => {
        const bioSectionId = `bio-${speaker.id}`;
        const talkSectionId = `talk-${speaker.id}`;
        const workshopSectionId = `workshop-${speaker.id}`;

        return (
          <div
            key={speaker.id}
            id={`${normalizeChars(speaker.name + speaker.surname)}`}
            className="mb-40 flex w-full scroll-mt-44 flex-col items-center justify-center gap-4 font-alegreya_sans font-normal text-dark-blue"
          >
            <SpeakerPageBlobMobile
              src={speakerImagesMob[speaker.id - 1].src}
              alt={speaker.name}
              height="250px"
              width="250px"
              position={String(speaker.id)}
              blobType={speaker.blobType}
              className="-z-10 translate-x-[0px] translate-y-[-35px]"
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
              isOpen={activeSections[speaker.id] === bioSectionId}
              onToggle={() => handleSectionToggle(speaker.id, bioSectionId)}
            />
            {speaker.talk_title && (
              <InfoSection
                section_title="Talk Topic"
                content_title={speaker.talk_title}
                content_description={speaker.talk_description || ""}
                color="yellow"
                isOpen={activeSections[speaker.id] === talkSectionId}
                onToggle={() => handleSectionToggle(speaker.id, talkSectionId)}
              />
            )}
            {speaker.workshop_title && (
              <InfoSection
                section_title="Workshop"
                content_title={speaker.workshop_title}
                content_description={speaker.workshop_description || ""}
                content_link={speaker.workshop_link || ""}
                color="yellow"
                isOpen={activeSections[speaker.id] === workshopSectionId}
                onToggle={() =>
                  handleSectionToggle(speaker.id, workshopSectionId)
                }
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
