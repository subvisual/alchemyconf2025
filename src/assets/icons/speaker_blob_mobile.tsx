"use client";

import { SVGProps } from "react";
import Image from "next/image";

interface SpeakerBlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  position: string;
  blobType: number;
  imageX: string;
  imageY: string;
}

const SpeakerBlobMobile = ({
  className,
  src,
  alt,
  width,
  height,
  position,
  blobType,
  imageX,
  imageY,
  // imageScale,
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
      <div>
      <Image
          src={src}
          alt={alt}
          width="190"
          height="250"
          style={{
            transform: `translate(${imageX}, ${imageY})`,
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default SpeakerBlobMobile;
