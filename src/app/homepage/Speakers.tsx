"use client";
import { useEffect, useState } from "react";
import AltButton from "../_components/AltButton";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import SpeakerTitleBlob from "@/assets/icons/speaker_title_blob";
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
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import SpeakerTitleBlobMobile from "@/assets/icons/speaker_title_blob_mobile";

export default function Speakers() {
  // const isNonChromium =
  //   typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);
  const [isNonChromium, setIsNonChromium] = useState(false);

  useEffect(() => {
    const isNonChromiumBrowser =
      /firefox|safari/i.test(navigator.userAgent) &&
      !/chrome|android/i.test(navigator.userAgent);
    setIsNonChromium(isNonChromiumBrowser);
  }, []);
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
  return (
    <section
      id="speakers"
      className="relative mt-36 flex flex-col items-center justify-center tablet:py-0 desktop:mb-72"
    >
      <h1 className="relative pb-16 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:w-[500px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Speakers
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Speakers
        </span>
      </h1>
      <div className="relative grid w-full max-w-[1440px] grid-cols-1 justify-center gap-x-[20px] gap-y-[30px] desktop:grid-cols-2">
        <div className="text-left font-alegreya_sans text-xl text-dark-blue tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
          Alchemy Conf 2025 brings together the brightest minds in the Elixir
          community. <br /> The top experts in our community will share what
          they’ve learned about building, innovation, and real-world
          applications.
        </div>
        {speakers.map(
          (speakers) => (
            // speakers.id === 8 ? (
            //   <div key="empty-slot" className="h-[10px] w-[10px]" />
            // ) : (
            <div
              key={speakers.id}
              className="speaker-transform relative mx-auto flex h-[350px] w-[400px] items-center justify-center xs:ml-[-20px] tablet:h-[500px] tablet:w-[600px] desktop:w-[600px]"
              style={{
                // @ts-ignore
                "--translate-mobile": `translateX(${isNonChromium ? speakers.m_blob_x_ff : speakers.m_blob_x}px) translateY(${speakers.m_blob_y}px)`,
                "--translate-tablet": `translateX(${speakers.t_blob_x}px) translateY(${speakers.t_blob_y}px)`,
                "--translate-desktop": `translateX(${isNonChromium ? speakers.blob_x_ff : speakers.blob_x}px) translateY(${speakers.blob_y}px)`,
              }}
            >
              {/* desktop / tablet */}
              <div className="hidden tablet:flex">
                <SpeakerBlob
                  src={speakerImages[speakers.id - 1].src}
                  alt={speakers.name}
                  height="550px"
                  width="550px"
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

              {/* mobile */}
              <div className="flex tablet:hidden">
                <SpeakerBlobMobile
                  src={speakerImages[speakers.id - 1].src}
                  alt={speakers.name}
                  height="550px"
                  width="550px"
                  position={String(speakers.id)}
                  blobType={speakers.blobType}
                  imageX={speakers.image_x_mob}
                  imageY={speakers.image_y_mob}
                  imageScale={Number(speakers.image_scale_mob)}
                />
                <SpeakerTitleBlobMobile
                  name={speakers.name}
                  surname={speakers.surname}
                  variant={Number(speakers.titleBlobType)}
                  xLink={speakers.x_link}
                  gitLink={speakers.git_link}
                  webLink={speakers.web_link}
                />
              </div>
            </div>
          ),
          // ),
        )}
        {/* <div className="mt-[70px] flex justify-center font-alegreya_sans text-xl font-medium text-dark-blue tablet:mt-[-90px] tablet:text-[28px] tablet:leading-[36px] desktop:ml-[150px] desktop:mt-[200px] desktop:text-[32px] desktop:leading-[44px]"> */}
        {/*   {" "} */}
        {/*   ...and many more */}
        {/* </div> */}
      </div>
      {/* <div className="relative mb-[336px] mt-[-250px] flex w-full flex-col items-end pr-[150px]"> */}
      {/*   <div className="pb-[20px] pr-[100px] font-alegreya_sans text-2.5xl font-medium text-dark-blue"> */}
      {/*     {" "} */}
      {/*     ...and many more */}
      {/*   </div> */}
      {/*   <AltButton href="" className="font-medium" text="See all Speakers" /> */}
      {/* </div> */}
    </section>
  );
}
