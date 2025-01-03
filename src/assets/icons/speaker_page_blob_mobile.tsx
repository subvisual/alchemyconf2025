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
  imageX: string;
  imageY: string;
  imageScale: number;
}

const SpeakerPageBlobMobile = ({
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
  const paths = [
    "M19.3064 134.744C14.671 110.771 -1.67723 99.5746 0.140383 75.2272C2.69175 41.051 43.5131 10.1651 79.5016 2.55187C115.494 -5.06217 159.074 4.12057 181.024 33.3571C199.908 58.5082 163.335 102.732 170.842 153.287C174.407 177.29 176.831 196.165 170.842 219.682C162.345 253.047 125.64 256.657 91.1811 257.665C61.5694 258.531 39.7793 259.687 19.3064 233.439C0.679418 209.558 26.624 172.587 19.3064 134.744Z",
    "M3.59263 146.853C8.50617 122.794 31.6678 109.832 45.5767 89.52C66.2767 59.2906 67.3829 8.68538 103.434 1.04867C139.49 -6.58886 170.764 29.0172 192.753 58.3439C211.67 83.5726 218.668 115.973 212.759 146.853C207.737 173.1 181.682 186.745 164.28 207.148C143.785 231.176 134.692 269.512 103.434 275.029C70.3903 280.861 36.7253 259.609 16.2166 233.281C-2.44289 209.326 -2.46475 176.513 3.59263 146.853Z",
    "M0.122882 148.487C1.34644 125.602 15.6667 116.121 22.5842 94.2715C31.475 66.1898 17.6374 42.2529 37.2589 20.2865C67.804 -13.909 132.406 -0.607764 154.358 28.6734C173.242 53.863 190.993 91.5735 186.103 134.409C182.538 165.648 171.526 182.056 154.358 208.394C135.88 236.741 128.292 271.344 94.4606 270.997C65.8401 270.704 55.4823 247.243 37.2589 225.169C16.0772 199.511 -1.65354 181.714 0.122882 148.487Z",
  ];

  const selectedPath = paths[blobType];

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
        width="250"
        height="300"
        viewBox="0 0 250 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        {...props}
      >
        <mask id={`myMask${position}mob`}>
          <path fill="white" d={selectedPath} />
        </mask>
      </svg>
      <SpeakerBackBlobMobile
        position={position}
        className="translate-x-[-50px]"
      />
      <div style={{ mask: `url(#myMask${position}mob)`, overflow: "hidden" }}>
        <Image
          src={src}
          alt={alt}
          width="500"
          height="500"
          style={{
            transform: `translate(${imageX}, ${imageY})`,
            objectFit: "contain",
            scale: imageScale,
          }}
        />
      </div>
    </div>
  );
};

export default SpeakerPageBlobMobile;
