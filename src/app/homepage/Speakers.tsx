"use client";
import { useEffect, useState } from "react";
import SpeakerBlob from "@/assets/icons/speaker_blob";
import SpeakerTitleBlob from "@/assets/icons/speaker_title_blob";
import speakers from "../_constants/speakers.json";
import speakerImages from "../_constants/speakers_images";
import SpeakerBlobMobile from "@/assets/icons/speaker_blob_mobile";
import SpeakerTitleBlobMobile from "@/assets/icons/speaker_title_blob_mobile";
import { normalizeChars } from "../utils";
import speakerImagesMob from "../_constants/speakers_images_mob";

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
      className="relative mt-36 flex flex-col items-center justify-center mobile:mb-40 tablet:py-0 desktop:mb-72"
    >
      <h1 className="relative pb-10 text-center font-sofia_sans_extra_condensed text-[50px] font-extrabold uppercase leading-[50px] text-dark-blue tablet:pb-28 tablet:text-[120px] tablet:leading-[120px] desktop:w-[500px] desktop:pb-32 desktop:text-[140px] desktop:leading-[140px]">
        Speakers
        <span className="absolute left-0 top-0 -z-10 translate-x-[3px] translate-y-[3px] text-[#7D1D3F3D] tablet:translate-x-1 tablet:translate-y-1 desktop:left-6">
          Speakers
        </span>
      </h1>
      <div className="relative grid w-full max-w-[1440px] grid-cols-1 justify-center gap-x-[20px] tablet:gap-y-[30px] desktop:grid-cols-2">
        <div className="text-left pb-1 font-alegreya_sans text-xl text-dark-blue tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
          Alchemy Conf 2025 brings together the brightest minds in the Elixir
          community. <br /> The top experts in our community will share what
          they've learned about building, innovation, and real-world
          applications.
        </div>
        {isMounted &&
          speakers
            .filter(speaker => speaker.id !== 13)
            .map((speakers) => (
            <div
              key={speakers.id}
              className="speaker-transform relative mx-auto flex h-[325px] w-[400px] items-center justify-center xs:ml-[-20px] tablet:h-[500px] tablet:w-[600px] desktop:w-[600px]"
              style={{
                // @ts-ignore
                "--translate-mobile": `translateX(${isNonChromium ? speakers.m_blob_x_ff : speakers.m_blob_x}px) translateY(${speakers.m_blob_y}px)`,
                "--translate-tablet": `translateX(${speakers.t_blob_x}px) translateY(${speakers.t_blob_y}px)`,
                "--translate-desktop": `translateX(${isNonChromium ? speakers.blob_x_ff : speakers.blob_x}px) translateY(${speakers.blob_y}px)`,
              }}
            >
              {/* desktop / tablet */}
              <div className="hidden tablet:flex">
                <a
                  href={`/speakers#${normalizeChars(speakers.name + "-" + speakers.surname)}`}
                >
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
                </a>
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
                <a
                  href={`/speakers#${normalizeChars(speakers.name + speakers.surname)}`}
                >
                  <SpeakerBlobMobile
                    src={speakerImagesMob[speakers.id - 1].src}
                    alt={speakers.name}
                    height="250px"
                    width="250px"
                    imageX={speakers.image_x_mob}
                    imageY={speakers.image_y_mob}
                  />
                </a>
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
          ))}
      </div>
    </section>
  );
}
