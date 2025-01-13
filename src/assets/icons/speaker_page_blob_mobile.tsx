"use client";

import Image from "next/image";
import SpeakerBackBlobMobile from "./speaker_page_back_blob_mobile";

interface SpeakerBlobProps {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  position: string;
  blobType: number;
}

const SpeakerPageBlobMobile = ({
  className,
  src,
  alt,
  width,
  height,
  position,
  blobType,
}: SpeakerBlobProps) => {

  return (
    <div
      className={`${className}`}
      style={{
        width,
        height,
        position: "relative",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <SpeakerBackBlobMobile
        position={position}
        style={{
          transform: `translateX(-30px) translateY(-40px)`,
          objectFit: "contain",
        }}
      />
      <div className="relative flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width="190"
          height="250"
          style={{
            transform: `translateY(${blobType === 1 ? "40px" : "10px"})`,
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default SpeakerPageBlobMobile;
