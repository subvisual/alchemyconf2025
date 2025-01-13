"use client";

import { SVGProps } from "react";
import Image from "next/image";
import SpeakerBackBlobMobile from "./speaker_page_back_blob_mobile";

interface SpeakerBlobProps extends SVGProps<SVGSVGElement> {
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
  ...props
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
        className="translate-x-[10px]"
        style={{
          transform: `translateX(-50px) translateY(-40px)`,
          objectFit: "contain",
        }}
      />
      <div>
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
