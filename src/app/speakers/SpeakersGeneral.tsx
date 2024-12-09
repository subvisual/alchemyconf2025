import SpeakerBlob from "@/assets/icons/speaker_blob";
import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";

import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";

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
}: InfoSectionProps) => (
  <div className="flex tablet:gap-4 desktop:gap-8 pb-8 tablet:pl-4 desktop:pl-8">
    <div className="flex items-stretch">
      <div className="relative flex tablet:w-8 desktop:w-10 flex-col items-start justify-start">
        <p
          className={`justify font-normal uppercase ${color === "dark-blue" ? "text-dark-blue" : "text-yellow"}`}
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          {section_title}
        </p>
        <span
          className={`absolute right-0 top-0 h-full w-1 ${color === "dark-blue" ? "bg-dark-blue" : "bg-yellow"}`}
        ></span>
      </div>
    </div>
    <div className="flex">
      <p className="font-bold">{content_title}</p>
      <p>{content_description}</p>
    </div>
  </div>
);

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
  <>
    <h1 className="relative text-left font-koulen tablet:text-[80px] tablet:leading-[80px] desktop:text-[100px] desktop:leading-[100px]">
      {name + " " + surname}{" "}
      <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
        {name + " " + surname}{" "}
      </span>
    </h1>
    <div className="mt-[-20px] flex items-center justify-start pb-8 pl-16 tablet:space-x-3 desktop:space-x-4">
      <p className="font-bold">FOLLOW</p>
      <XIcon link={x_link} className="tablet:h-6 desktop:h-8" />
      <GithubIcon link={git_link} className="tablet:h-6 desktop:h-8" />
      <WebIcon link={web_link} className="tablet:h-6 desktop:h-8" />
    </div>
  </>
);

export default function SpeakersGeneral() {
  return (
    <section className="mb-20 mt-40 flex flex-col items-center justify-center tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          id={`s-${speaker.id}`}
          className="mb-20 flex w-full max-w-screen-desktop scroll-mt-48 flex-row justify-center gap-6 p-6"
        >
          {speaker.id % 2 === 1 ? (
            <>
              <div className="mt-[120px] w-1/3">
                <SpeakerBlob
                  src={speakerImages[speaker.id - 1].src}
                  alt={speaker.name}
                  height="550px"
                  width="550px"
                  position={String(speaker.id)}
                  blobType={speaker.blobType}
                  imageX={speaker.image_x}
                  imageY={speaker.image_y}
                  imageScale={Number(speaker.image_scale)}
                />
              </div>
              <div className="flex w-2/3 flex-col gap-4 font-alegreya_sans font-normal text-dark-blue tablet:text-[20px] desktop:text-[24px]">
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
            </>
          ) : (
            <>
              <div className="flex w-2/3 flex-col gap-4 font-alegreya_sans font-normal text-dark-blue tablet:text-[20px] desktop:text-[24px]">
                <SpeakerDetails
                  name={speaker.name}
                  surname={speaker.surname}
                  x_link={speaker.x_link}
                  git_link={speaker.git_link}
                  web_link={speaker.web_link}
                />
                <InfoSection
                  section_title="Short Bio"
                  content_title=""
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
              <div className="mt-[120px] w-1/3">
                <SpeakerBlob
                  src={speakerImages[speaker.id - 1].src}
                  alt={speaker.name}
                  height="550px"
                  width="550px"
                  position={String(speaker.id)}
                  blobType={speaker.blobType}
                  imageX={speaker.image_x}
                  imageY={speaker.image_y}
                  imageScale={Number(speaker.image_scale)}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
