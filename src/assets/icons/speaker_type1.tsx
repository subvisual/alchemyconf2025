"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";
interface SpeakerBlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
}

const SpeakerBlob1 = ({
  className,
  src,
  alt,
  width,
  height,
  ...props
}: SpeakerBlobProps) => {
  const [hovered, setHovered] = useState(false);
  const animationRef = useSpringRef();
  const { x } = useSpring({
    ref: animationRef,
    to: [
      { x: 1, config: { duration: 2000 } },
      { x: 2, config: { duration: 2000 } },
      { x: 3, config: { duration: 2000 } },
      // { x: 4, config: { duration: 2000 } },
      // { x: 5, config: { duration: 2000 } },
      { x: 0, config: { duration: 8000 } },
    ],
    from: { x: 0 },
    loop: true,
  });
  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 200 },
  });

  useEffect(() => {
    if (!hovered) {
      animationRef.stop();
      // animationRef.start({ x: 0, loop: false, config: { duration: 1000 } });
    } else {
      animationRef.start();
    }
  }, [hovered, animationRef]);

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="458"
        height="460"
        viewBox="0 0 300 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <clipPath id="myClipPath">
            <animated.path
              d={x.to({
                range: [0, 1, 2, 3],
                output: [
                  // blob1 path1
                  "M63.9992 229.499C56.2601 189.423 28.9654 170.703 32 129.999C36.2597 72.8633 104.414 21.2278 164.5 8.49999C224.592 -4.22923 297.352 11.1226 334.001 60.0004C365.528 102.048 304.466 175.982 317.001 260.5C322.952 300.629 327 332.184 317.001 371.5C302.814 427.281 241.531 433.315 184 435C134.561 436.448 98.1804 438.381 63.9992 394.499C32.9 354.575 76.2166 292.767 63.9992 229.499Z",
                  // blob1 path 2
                  "M22.4996 250.501C20.363 203.345 12.7611 173.107 31.9995 130C58.7459 70.0715 103.914 38.729 164 26.0012C224.092 13.272 272.351 20.1233 309 69.0012C340.527 111.049 327.564 157.583 324.5 226.5C322.099 280.498 351.63 330.001 317 371.502C280.124 415.693 183.999 435.001 183.999 435.001C183.999 435.001 90.1809 451.381 55.9997 407.5C24.9005 367.575 25.3373 313.129 22.4996 250.501Z",
                  // blob2 path1
                  "M26.5001 248.499C28.5428 210.297 52.451 194.47 63.9999 157.999C78.8434 111.123 55.7412 71.1664 88.5 34.4987C139.496 -22.5822 247.351 -0.379099 284 48.4987C315.528 90.5466 345.163 153.495 337.001 224.999C331.048 277.144 312.663 304.533 284 348.499C253.151 395.816 240.482 453.578 184 453C136.217 452.511 118.924 413.348 88.5 376.5C53.1364 333.67 23.5343 303.962 26.5001 248.499Z",
                  // blob2 path2
                  "M7.98702 258.755C-2.4263 206.64 -3.5979 171.779 17.4994 123C37.8608 75.9232 45.414 38.2277 105.5 25.4999C165.592 12.7707 271.851 -23.378 308.5 25.4999C340.027 67.5477 347.411 167.041 354.5 228.5C362.511 297.956 368.524 350.685 324.5 405C284.039 454.919 260 472.381 174.39 472.381C88.7799 472.381 98.8054 416 80.4997 392.499C49.4005 352.575 19.6284 317.017 7.98702 258.755Z",
                  // blob3 path1
                  "M5.98771 244.755C14.177 204.657 52.7796 183.053 75.9611 149.2C110.461 98.8177 112.305 14.4756 172.39 1.74776C232.483 -10.9815 284.606 48.3619 321.255 97.2398C352.783 139.288 364.447 193.288 354.599 244.755C346.228 288.5 302.804 311.241 273.8 345.246C239.642 385.293 224.486 449.186 172.391 458.381C117.317 468.101 61.2089 432.682 27.0277 388.801C-4.07149 348.876 -4.10791 294.188 5.98771 244.755Z",
                  // blob3 path2
                  "M25.9882 247.756C34.1774 207.657 2.80639 144.354 25.9879 110.501C60.4879 60.1182 132.305 17.4762 192.391 4.74831C252.483 -7.98091 314.351 11.1227 351 60.0005C382.528 102.048 388.848 186.533 379 238C370.63 281.745 354.504 291.995 325.5 326C291.342 366.048 283.596 458.305 231.5 467.499C176.427 477.22 47.1812 454.882 13.0001 411C-18.0992 371.076 15.8926 297.189 25.9882 247.756Z",
                ],
              })}
            />
          </clipPath>
        </defs>
      </svg>
      <animated.img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "none",
          objectFit: "cover",
          objectPosition: "center",
          clipPath: "url(#myClipPath)",
          position: "absolute",
          top: 10,
          left: 0,
          scale,
        }}
      />
    </div>
  );
};

export default SpeakerBlob1;
