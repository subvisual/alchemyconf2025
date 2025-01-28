"use client";

import { SVGProps } from "react";
import { animated } from "@react-spring/web";
import SpeakerPageBackBlob from "./speaker_page_back_blob";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
  position: string;
  blobType: number;
  imageX: string;
  imageY: string;
  imageScale: number;
}

const MainSponsorBlob = ({
  className,
  src,
  alt,
  width,
  height,
  position,
  blobType,
  imageX,
  imageY,
  imageScale,
  ...props
}: BlobProps) => {
  const speakerBlobPaths = [
    "M489.232 -123.982L-145.216 40.0979L-86.1903 268.334C-63.0937 209.248 -7.00851 177.244 45.6469 176.509C81.3554 176.011 99.7527 192.192 122.602 212.287C141.862 229.226 164.286 248.948 202.908 263.807C229.985 274.224 261.165 266.108 296.413 256.934C335.024 246.884 378.517 235.564 426.845 245.943C447.695 250.421 482.774 272.214 510.555 306.177L594.841 284.379L489.232 -123.982Z",
  ];

  const selectedSpeakerBlobPath = speakerBlobPaths[blobType];

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
      <svg
        width="642"
        height="583"
        viewBox="0 0 642 583"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        {...props}
      >                
      <defs>
        <mask id={`sponsorMask${position}`}>
          <path fill="white" stroke="white" strokeWidth="1" d="M582.232 10.0184L-52.2161 174.098L6.80975 402.334C29.9063 343.248 85.9915 311.244 138.647 310.509C174.355 310.011 192.753 326.192 215.602 346.287C234.862 363.226 257.286 382.948 295.908 397.807C322.985 408.224 354.165 400.108 389.413 390.934C428.024 380.884 471.517 369.564 519.845 379.943C540.695 384.421 575.774 406.214 603.555 440.177L687.841 418.379L582.232 10.0184Z" />
        </mask>
        </defs>
      </svg>
      <div style={{ mask: `url(#sponsorMask${position})`, overflow: "visible" }}>
        <animated.img
          src={src}
          alt={alt}
          width="600"
          height="600"
          style={{
            translateX: `${imageX}`,
            translateY: `${imageY}`,
            objectFit: "contain",
            scale: imageScale,
          }}
        />
      </div>
    </div>
  );
};

export default MainSponsorBlob;