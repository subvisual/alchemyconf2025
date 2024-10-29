import AltButton from "../_components/AltButton";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import SpeakerTitleBlob from "@/assets/icons/speaker_title_blob";
import speakers from "../_constants/speakers.json";
import speakerTest1 from "@/assets/images/speaker_testpic2.svg";
import speakerTest2 from "@/assets/images/speaker_testpic1.svg";
import speakerTest3 from "@/assets/images/speaker_testpic3.svg";
import speakerTest4 from "@/assets/images/speaker_testpic3.svg";
import speakerTest5 from "@/assets/images/speaker_testpic1.svg";
import speakerTest6 from "@/assets/images/speaker_testpic2.svg";

export default function Speakers() {
  const speakerImages = [
    speakerTest1,
    speakerTest2,
    speakerTest3,
    speakerTest4,
    speakerTest5,
    speakerTest6,
  ];
  return (
    <section
      id="speakers"
      className="relative flex flex-col items-center justify-center py-[136px] desktop:py-0"
    >
      <h1 className="relative pb-20 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Speakers
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Speakers
        </span>
      </h1>

      <div className="absolute left-0 top-[280px] w-[770px] max-w-screen-desktop px-20 text-left font-alegreya_sans text-2.5xl text-dark-blue">
        Alchemy Conf 2025 brings together the brightest minds in the Elixir
        community. <br /> The top experts in our community will share what
        they’ve learned about building, innovation, and real-world applications.
      </div>
      <div className="relative mx-auto mb-[74px] grid grid-cols-2 justify-center gap-x-[80px] gap-y-[30px] py-[10px]">
        {speakers.map((speakers) => (
          <div
            key={speakers.id}
            className={`relative flex h-[500px] w-[600px] items-center justify-center`}
            style={{
              transform: `translateX(${speakers.x}) ${speakers.id % 2 !== 0 ? "translateY(400px)" : ""}`,
            }}
          >
            <SpeakerBlob
              src={speakerImages[speakers.id - 1].src}
              alt={speakers.name}
              height="550px"
              width="500px"
              position={String(speakers.id)}
              blobType={speakers.blobType}
            />
            <SpeakerTitleBlob
              name={speakers.name}
              surname={speakers.surname}
              socials={speakers.socials}
              variant={Number(speakers.titleBlobType)}
            />
          </div>
        ))}
      </div>
      <div className="relative mb-[336px] flex w-full translate-y-[200px] flex-col items-end pr-[350px]">
        <div className="pb-[20px] pr-[150px] font-alegreya_sans text-2.5xl font-medium text-dark-blue">
          {" "}
          ...and many more
        </div>
        <AltButton href="" className="font-medium" text="See all Speakers" />
      </div>
    </section>
  );
}
