"use client";

import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";

import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";
import { useState } from "react";

interface InfoSectionProps {
  section_title: string;
  content_title?: string;
  content_description: string;
  color?: "dark-blue" | "yellow";
}

const InfoSection = ({
  section_title,
  content_title,
  content_description,
  color = "dark-blue",
}: InfoSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full flex-col gap-4 pb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full"
      >
        <div className="flex w-full flex-col gap-1">
          <p
            className={`w-full text-left font-normal uppercase ${
              color === "dark-blue" ? "text-dark-blue" : "text-yellow"
            }`}
          >
            {section_title}
          </p>
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
  <div className="flex flex-col items-center w-full">
    <h1 className="relative text-center font-koulen text-[64px] leading-[64px]">
      {name + " " + surname}{" "}
      <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
        {name + " " + surname}{" "}
      </span>
    </h1>
    <div className="flex items-center justify-center w-full space-x-2 pb-2">
      <XIcon link={x_link} className="h-6" />
      <GithubIcon link={git_link} className="h-6" />
      <WebIcon link={web_link} className="h-6" />
    </div>
  </div>
);

export default function SpeakersMobile() {
  return (
    <section className="mb-20 mt-40 flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          id={`speaker-${speaker.id}`}
          className="mb-20 flex scroll-mt-48 flex-col items-center justify-center gap-4 font-alegreya_sans font-normal text-dark-blue w-full"
        >
          <SpeakerBlobMobile
            src={speakerImages[speaker.id - 1].src}
            alt={speaker.name}
            height="450px"
            width="450px"
            position={String(speaker.id)}
            blobType={speaker.blobType}
            imageX={speaker.image_x}
            imageY={speaker.image_y}
            imageScale={Number(speaker.image_scale)}
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
          />
          {speaker.talk_title && (
            <InfoSection
              section_title="Talk Topic"
              content_title={speaker.talk_title}
              content_description={speaker.talk_description || ""}
              color="yellow"
            />
          )}
          {speaker.workshop_title && (
            <InfoSection
              section_title="Workshop"
              content_title={speaker.workshop_title}
              content_description={speaker.workshop_description || ""}
              color="yellow"
            />
          )}
        </div>
      ))}
    </section>
  );
}
