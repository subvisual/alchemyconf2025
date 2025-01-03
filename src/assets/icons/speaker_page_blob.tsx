"use client";

import { SVGProps } from "react";
import { animated } from "@react-spring/web";
import SpeakerPageBackBlob from "./speaker_page_back_blob";

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
  imageScale: number;
}

const SpeakerPageBlob = ({
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
}: SpeakerBlobProps) => {
  const speakerBlobPaths = [
    "M32.9992 225.499C25.2601 185.423 -2.03465 166.703 1.00001 125.999C5.25972 68.8632 73.4143 17.2279 133.5 4.49999C193.592 -8.22922 266.352 7.12257 303.001 56.0004C334.528 98.0483 273.466 171.982 286.001 256.5C291.952 296.629 296 328.184 286.001 367.5C271.814 423.281 210.531 429.315 153 431C103.561 432.448 67.1804 434.381 32.9992 390.499C1.89997 350.575 45.2166 288.767 32.9992 225.499Z",
    "M5.98771 244.755C14.177 204.657 52.7796 183.053 75.9611 149.2C110.461 98.8177 112.305 14.4756 172.39 1.74775C232.483 -10.9815 284.606 48.3619 321.255 97.2398C352.783 139.288 364.447 193.288 354.599 244.755C346.228 288.5 302.804 311.241 273.8 345.246C239.642 385.293 224.486 449.186 172.391 458.381C117.317 468.101 61.2089 432.682 27.0277 388.801C-4.07149 348.876 -4.10791 294.188 5.98771 244.755Z",
    "M0.205124 247.661C2.24739 209.491 26.1497 193.677 37.6957 157.235C52.5355 110.398 29.439 70.4735 62.1897 33.8358C113.173 -23.1987 221.002 -1.01368 257.641 47.8243C289.161 89.838 318.79 152.735 310.629 224.181C304.678 276.283 286.298 303.651 257.642 347.58C226.801 394.859 214.134 452.573 157.666 451.996C109.895 451.507 92.6067 412.376 62.1897 375.558C26.8349 332.763 -2.75994 303.08 0.205124 247.661Z",
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
        width="313"
        height="452"
        viewBox="0 0 313 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        {...props}
      >
        <mask id={`myMask${position}`}>
          <path fill="white" d={selectedSpeakerBlobPath} />
        </mask>
      </svg>
      <SpeakerPageBackBlob position={position} />
      <div style={{ mask: `url(#myMask${position})`, overflow: "hidden" }}>
        <animated.img
          src={src}
          alt={alt}
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

export default SpeakerPageBlob;
