import SpeakerBlob from "@/assets/icons/speaker_blob";
import XIcon from "@/assets/icons/icon_x";
import GithubIcon from "@/assets/icons/icon_github";
import WebIcon from "@/assets/icons/icon_web";

import speakers from "../_constants/speakers.json";
import speaker1 from "@/assets/images/pic_aaron_cruz.png";
import speaker2 from "@/assets/images/pic_andre_albuquerque.png";
import speaker3 from "@/assets/images/pic_andrea_leopardi.jpg";
import speaker4 from "@/assets/images/pic_bruce_tate.png";
import speaker5 from "@/assets/images/pic_hugo_barauna.jpg";
import speaker6 from "@/assets/images/pic_julia_mathias.jpg";
import speaker7 from "@/assets/images/pic_sasa_juric.png";
import speaker8 from "@/assets/images/pic_shannon_ryan.jpg";
import speaker9 from "@/assets/images/pic_tobias_pfeiffer.jpg";
import speaker10 from "@/assets/images/pic_wojtek_mach.jpg";
import speaker11 from "@/assets/images/pic_zach_daniel.jpg";

const speakerImages = [
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
  speaker7,
  speaker8,
  speaker9,
  speaker10,
  speaker11,
];

interface InfoSectionProps {
  title: string;
  content: string;
  color?: 'dark-blue' | 'yellow';
}

const InfoSection = ({ title, content, color = 'dark-blue' }: InfoSectionProps) => (
  <div className="flex gap-8 pb-8">
  <div className="flex items-stretch">
    <div className="relative flex w-8 flex-col items-start justify-start">
      <p
        className={`justify font-normal uppercase text-${color}`}
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg) translateY(-6%)",
        }}
      >
        {title}
      </p>
      <span
        className={`absolute right-0 top-0 h-full w-1 bg-${color}`}
        style={{
          top: "4%",
        }}
      ></span>
    </div>
  </div>
  <div className="flex-1">
    <p>{content}</p>
  </div>
</div>
);

  export default function SpeakersGeneral() {
  return (
    <section className="mb-20 mt-40 scroll-mt-32 tablet:mb-28 tablet:mt-56 desktop:mb-40 desktop:mt-64">
      {speakers.map((speaker) => (
        <div key={speaker.id} className="flex w-full max-w-screen-desktop flex-row gap-6 p-6 mb-20">
          {speaker.id % 2 === 1 ? (
            <>
              <div className="w-1/3 mt-[100px]">
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
              <div className="md:w-2/3 flex flex-col gap-4 font-alegreya_sans text-xl font-normal text-dark-blue">
                <h1 className="relative text-left font-koulen text-[50px] leading-[50px] text-dark-blue tablet:text-[80px] tablet:leading-[80px] desktop:text-[100px] desktop:leading-[100px]">
                  {speaker.name + " " + speaker.surname}{" "}
                  <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
                    {speaker.name + " " + speaker.surname}{" "}
                  </span>
                </h1>
                <div className="flex mt-[-20px] items-center justify-center space-x-4 pb-8">
                  <p className="font-bold text-dark-blue">FOLLOW</p>
                  <XIcon link={speaker.x_link} />
                  <GithubIcon link={speaker.git_link} />
                  <WebIcon link={speaker.web_link} />
                </div>
                <InfoSection title="Short Bio" content={speaker.bio || ''} color="dark-blue"/>
                <InfoSection title="Talk Topic" content={speaker.talk_title || ''} color="yellow"/>
                <InfoSection title="Workshop" content={speaker.workshop_title || ''} color="yellow"/>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-2/3 flex flex-col gap-4 font-alegreya_sans text-xl font-normal text-dark-blue">
                <h1 className="relative text-left font-koulen text-[50px] leading-[50px] text-dark-blue tablet:text-[80px] tablet:leading-[80px] desktop:text-[100px] desktop:leading-[100px]">
                  {speaker.name + " " + speaker.surname}{" "}
                  <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
                    {speaker.name + " " + speaker.surname}{" "}
                  </span>
                </h1>
                <div className="flex mt-[-20px] items-center justify-center space-x-4 pb-8">
                  <p className="font-bold text-dark-blue">FOLLOW</p>
                  <XIcon link={speaker.x_link} />
                  <GithubIcon link={speaker.git_link} />
                  <WebIcon link={speaker.web_link} />
                </div>
                <InfoSection title="Short Bio" content={speaker.bio || ''} color="dark-blue"/>
                <InfoSection title="Talk Topic" content={speaker.talk_title || ''} color="yellow"/>
                <InfoSection title="Workshop" content={speaker.workshop_title || ''} color="yellow"/>
              </div>
              <div className="w-1/3 mt-[100px]">
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
