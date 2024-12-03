"use client";
import { useEffect, useState } from "react";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import SpeakerTitleBlob from "@/assets/icons/speaker_title_blob";
import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import SpeakerTitleBlobMobile from "@/assets/icons/speaker_title_blob_mobile";

export default function Speakers() {
  const [isNonChromium, setIsNonChromium] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const isNonChromiumBrowser =
      /firefox|safari/i.test(navigator.userAgent) &&
      !/chrome|android/i.test(navigator.userAgent);
    setIsNonChromium(isNonChromiumBrowser);
    setIsMounted(true);
  }, []);

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
        {isMounted && (
          speakers.map((speakers) => (
            <a
              href={`/speakers#speaker-${speakers.id}`}
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
            </a>
          ))
        )}
      </div>
    </section>
  );
}
