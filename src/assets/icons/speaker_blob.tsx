"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";
import { interpolate } from "flubber";

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

const SpeakerBlob = ({
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
  const [hovered, setHovered] = useState(false);
  const animationRef = useSpringRef();

  const path1 =
    "M32.9992 225.499C25.2601 185.423 -2.03465 166.703 1.00001 125.999C5.25972 68.8632 73.4143 17.2279 133.5 4.49999C193.592 -8.22922 266.352 7.12257 303.001 56.0004C334.528 98.0483 273.466 171.982 286.001 256.5C291.952 296.629 296 328.184 286.001 367.5C271.814 423.281 210.531 429.315 153 431C103.561 432.448 67.1804 434.381 32.9992 390.499C1.89997 350.575 45.2166 288.767 32.9992 225.499Z";
  const path2 =
    "M3.28185 230.094C1.14522 182.938 -6.45665 152.7 12.7817 109.594C39.5281 49.6648 84.6962 18.3223 144.782 5.59446C204.874 -7.13476 253.133 -0.283393 289.782 48.5945C321.31 90.6423 308.347 137.177 305.282 206.093C302.881 260.091 332.412 309.594 297.782 351.095C260.907 395.287 164.781 414.595 164.781 414.595C164.781 414.595 70.9631 430.975 36.782 387.093C5.68274 347.169 6.11949 292.722 3.28185 230.094Z";
  const path3 =
    "M0.205124 247.661C2.24739 209.491 26.1497 193.677 37.6957 157.235C52.5355 110.398 29.439 70.4735 62.1897 33.8358C113.173 -23.1987 221.002 -1.01368 257.641 47.8243C289.161 89.838 318.79 152.735 310.629 224.181C304.678 276.283 286.298 303.651 257.642 347.58C226.801 394.859 214.134 452.573 157.666 451.996C109.895 451.507 92.6067 412.376 62.1897 375.558C26.8349 332.763 -2.75994 303.08 0.205124 247.661Z";
  const path4 =
    "M7.28291 258.879C-3.14715 206.732 -4.32063 171.851 16.8106 123.043C37.2047 75.9377 44.77 38.2198 104.952 25.4844C165.141 12.7476 271.571 -23.4226 308.278 25.4844C339.857 67.5573 347.252 167.11 354.352 228.605C362.377 298.102 368.399 350.863 324.304 405.211C283.779 455.159 259.701 472.632 173.953 472.632C88.2056 472.632 98.2472 416.217 79.9121 392.703C48.7629 352.754 18.943 317.175 7.28291 258.879Z";
  const path5 =
    "M5.98771 244.755C14.177 204.657 52.7796 183.053 75.9611 149.2C110.461 98.8177 112.305 14.4756 172.39 1.74775C232.483 -10.9815 284.606 48.3619 321.255 97.2398C352.783 139.288 364.447 193.288 354.599 244.755C346.228 288.5 302.804 311.241 273.8 345.246C239.642 385.293 224.486 449.186 172.391 458.381C117.317 468.101 61.2089 432.682 27.0277 388.801C-4.07149 348.876 -4.10791 294.188 5.98771 244.755Z";
  const path6 =
    "M25.867 246.929C34.0757 206.817 2.63001 143.491 25.8667 109.625C60.4487 59.225 132.437 16.5679 192.666 3.83552C252.901 -8.8982 314.916 10.2121 351.652 59.1073C383.254 101.17 389.59 185.685 379.718 237.17C371.328 280.93 355.164 291.184 326.091 325.201C291.852 365.263 284.087 457.553 231.868 466.751C176.663 476.474 47.1104 454.128 12.8479 410.232C-18.3253 370.293 15.7473 296.38 25.867 246.929Z";

  const interpolator = interpolate(path1, path2);

  const { x } = useSpring({
    ref: animationRef,
    // to: async (next) => {
    //   while (true) {
    //     await next({ x: 1, config: { duration: 2000 } });
    //     await next({ x: 0, config: { duration: 2000 } });
    //   }
    // },
    to: [
      { x: 0, config: { duration: 2000 } },
      { x: 1, config: { duration: 2000 } },
      { x: 2, config: { duration: 2000 } },
      // { x: 3, config: { duration: 2000 } },
      // { x: 4, config: { duration: 2000 } },
      // { x: 5, config: { duration: 2000 } },
      { x: blobType, config: { duration: 6000 } },
    ],
    from: { x: blobType },
    loop: true,
  });

  const { scale } = useSpring({
    scale: hovered ? imageScale * 1.1 : imageScale * 1,
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
      className={`${className}`}
      style={{
        width,
        height,
        position: "relative",
        justifyItems: "center",
        alignItems: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="313"
        height="432"
        viewBox="0 0 313 432"
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
          <animated.path
            fill="white"
            // d={x.to((x) => interpolator(x))}
            d={x.to({
              range: [0, 1, 2],
              output: [path1, path5, path3],
            })}
          />
        </mask>
      </svg>
      <div style={{ mask: `url(#myMask${position})`, overflow: "hidden" }}>
        <animated.img
          src={src}
          alt={alt}
          style={{
            translateX: `${imageX}`,
            translateY: `${imageY}`,
            height: `${height}`,
            scale,
          }}
        />
      </div>
    </div>
  );
};

export default SpeakerBlob;
