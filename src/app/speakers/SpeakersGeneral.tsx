import SpeakerBlob from "@/assets/icons/speaker_blob";
import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";

import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";

interface InfoSectionProps {
  title: string;
  content: string;
  color?: "dark-blue" | "yellow";
}

const InfoSection = ({
  title,
  content,
  color = "dark-blue",
}: InfoSectionProps) => (
  <div className="flex gap-8 pl-8 pb-8">
    <div className="flex items-stretch">
      <div className="relative flex w-10 flex-col items-start justify-start">
        <p
          className={`justify font-normal uppercase text-${color}`}
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          {title}
        </p>
        <span
          className={`absolute right-0 top-0 h-full w-1 bg-${color}`}
        ></span>
      </div>
    </div>
    <div className="flex-1">
      <p>{content}</p>
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

const SpeakerDetails = ({ name, surname, x_link, git_link, web_link }: SpeakerDetailsProps) => (
  <>
    <h1 className="relative text-left font-koulen text-[50px] leading-[50px] tablet:text-[80px] tablet:leading-[80px] desktop:text-[100px] desktop:leading-[100px]">
      {name + " " + surname}{" "}
      <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
        {name + " " + surname}{" "}
      </span>
    </h1>
    <div className="mt-[-20px] flex items-center justify-start space-x-4 pl-16 pb-8">
      <p className="font-bold">FOLLOW</p>
      <XIcon link={x_link} />
      <GithubIcon link={git_link} />
      <WebIcon link={web_link} />
    </div>
  </>
);

export default function SpeakersGeneral() {
  return (
    <section className="mb-20 mt-40 tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64 flex flex-col items-center justify-center">
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          id={`speaker-${speaker.id}`}
          className="mb-20 flex w-full max-w-screen-desktop scroll-mt-48 flex-row gap-6 p-6 justify-center"
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
              <div className="md:w-2/3 flex flex-col gap-4 font-alegreya_sans text-[24px] font-normal text-dark-blue">
                <SpeakerDetails 
                  name={speaker.name} 
                  surname={speaker.surname} 
                  x_link={speaker.x_link} 
                  git_link={speaker.git_link} 
                  web_link={speaker.web_link} 
                />
                <InfoSection
                  title="Short Bio"
                  content={speaker.bio || ""}
                  color="dark-blue"
                />
                {speaker.talk_title && (
                  <InfoSection
                    title="Talk Topic"
                    content={speaker.talk_title}
                    color="yellow"
                  />
                )}
                {speaker.workshop_title && (
                  <InfoSection
                    title="Workshop"
                    content={speaker.workshop_title}
                    color="yellow"
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <div className="md:w-2/3 flex flex-col gap-4 font-alegreya_sans text-[24px] font-normal text-dark-blue">
                <SpeakerDetails 
                  name={speaker.name} 
                  surname={speaker.surname} 
                  x_link={speaker.x_link} 
                  git_link={speaker.git_link} 
                  web_link={speaker.web_link} 
                />
                <InfoSection
                  title="Short Bio"
                  content={speaker.bio || ""}
                  color="dark-blue"
                />
                {speaker.talk_title && (
                  <InfoSection
                    title="Talk Topic"
                    content={speaker.talk_title}
                    color="yellow"
                  />
                )}
                {speaker.workshop_title && (
                  <InfoSection
                    title="Workshop"
                    content={speaker.workshop_title}
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
