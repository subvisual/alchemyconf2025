import AltButton from "../_components/AltButton";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import SpeakerTitleBlob from "@/assets/icons/speaker_title_blob";
import speakers from "../_constants/speakers.json";
import speaker1 from "@/assets/images/pic_hugo_barauna.jpg";
import speaker2 from "@/assets/images/pic_andrea_leopardi.jpg";
import speaker3 from "@/assets/images/pic_wojtek_mach.jpg";
import speaker4 from "@/assets/images/pic_sasa_juric.png";
import speaker5 from "@/assets/images/speaker_testpic1.svg";
import speaker6 from "@/assets/images/pic_zach_daniel.jpg";

export default function Speakers() {
  const speakerImages = [
    speaker1,
    speaker2,
    speaker3,
    speaker4,
    speaker5,
    speaker6,
  ];
  return (
    <section
      id="speakers"
      className="relative my-[136px] flex flex-col items-center justify-center"
    >
      <div className="relative mb-32 w-[400px] text-center font-koulen text-[120px] leading-none text-dark-blue">
        Speakers
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Speakers
        </span>
      </div>
      <div className="absolute left-0 top-[280px] w-[770px] max-w-screen-desktop px-20 text-left font-alegreya_sans text-2.5xl text-dark-blue">
        Alchemy Conf 2025 brings together the brightest minds in the Elixir
        community. <br /> The top experts in our community will share what
        they’ve learned about building, innovation, and real-world applications.
      </div>
      <div className="relative mx-auto mb-[74px] grid grid-cols-2 justify-center gap-x-[80px] gap-y-[30px] py-[10px]">
        {speakers.map((speakers) =>
          // NOTE: skipping the 5th speaker, last one is the 6th, since we are offseting the columns
          speakers.id === 5 ? (
            <div key="empty-slot" className="h-[10px] w-[10px]" />
          ) : (
            <div
              key={speakers.id}
              className={`relative flex h-[500px] w-[600px] items-center justify-center`}
              style={{
                transform: `translateX(${speakers.blob_x}) translateY(${speakers.blob_y})`,
              }}
            >
              <SpeakerBlob
                src={speakerImages[speakers.id - 1].src}
                alt={speakers.name}
                height="550px"
                width="500px"
                position={String(speakers.id)}
                blobType={speakers.blobType}
                imageX={speakers.image_x}
                imageY={speakers.image_y}
                imageScale={Number(speakers.image_scale)}
              />
              <SpeakerTitleBlob
                name={speakers.name}
                surname={speakers.surname}
                variant={Number(speakers.titleBlobType)}
                xLink={speakers.x_link}
                gitLink={speakers.git_link}
                webLink={speakers.web_link}
              />
            </div>
          ),
        )}
      </div>
      <div className="relative mb-[336px] mt-[-250px] flex w-full translate-y-[200px] flex-col items-end pr-[350px]">
        <div className="pb-[20px] pr-[150px] font-alegreya_sans text-2.5xl font-medium text-dark-blue">
          {" "}
          ...and many more
        </div>
        {/* <AltButton href="" className="font-medium" text="See all Speakers" /> */}
      </div>
    </section>
  );
}
