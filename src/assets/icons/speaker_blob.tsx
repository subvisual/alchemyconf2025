"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";

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
    "M311.795 247.661C309.753 209.491 285.85 193.677 274.304 157.235C259.464 110.398 282.561 70.4735 249.81 33.8358C198.827 -23.1987 90.9983 -1.01368 54.3585 47.8243C22.8386 89.838 -6.78981 152.735 1.37083 224.181C7.32206 276.283 25.7024 303.651 54.3585 347.58C85.1994 394.859 97.8658 452.573 154.334 451.996C202.105 451.507 219.393 412.376 249.81 375.558C285.165 332.763 314.76 303.08 311.795 247.661Z";
  const path3 =
    "M0.205124 247.661C2.24739 209.491 26.1497 193.677 37.6957 157.235C52.5355 110.398 29.439 70.4735 62.1897 33.8358C113.173 -23.1987 221.002 -1.01368 257.641 47.8243C289.161 89.838 318.79 152.735 310.629 224.181C304.678 276.283 286.298 303.651 257.642 347.58C226.801 394.859 214.134 452.573 157.666 451.996C109.895 451.507 92.6067 412.376 62.1897 375.558C26.8349 332.763 -2.75994 303.08 0.205124 247.661Z";
  const path4 =
    "M311.795 204.339C309.753 242.509 285.85 258.323 274.304 294.765C259.464 341.602 282.561 381.526 249.81 418.164C198.827 475.199 90.9983 453.014 54.3585 404.176C22.8386 362.162 -6.78981 299.265 1.37083 227.819C7.32206 175.717 25.7024 148.349 54.3585 104.42C85.1994 57.1413 97.8658 -0.573333 154.334 0.00430839C202.105 0.492983 219.393 39.6237 249.81 76.4419C285.165 119.237 314.76 148.92 311.795 204.339Z";
  const path5 =
    "M5.98771 244.755C14.177 204.657 52.7796 183.053 75.9611 149.2C110.461 98.8177 112.305 14.4756 172.39 1.74775C232.483 -10.9815 284.606 48.3619 321.255 97.2398C352.783 139.288 364.447 193.288 354.599 244.755C346.228 288.5 302.804 311.241 273.8 345.246C239.642 385.293 224.486 449.186 172.391 458.381C117.317 468.101 61.2089 432.682 27.0277 388.801C-4.07149 348.876 -4.10791 294.188 5.98771 244.755Z";
  const path6 =
    "M352.012 244.755C343.823 204.657 305.22 183.053 282.039 149.2C247.539 98.8177 245.695 14.4756 185.61 1.74775C125.517 -10.9815 73.3935 48.3619 36.7447 97.2398C5.21705 139.288 -6.44671 193.288 3.40137 244.755C11.7717 288.5 55.1964 311.241 84.2 345.246C118.358 385.293 133.514 449.186 185.609 458.381C240.683 468.101 296.791 432.682 330.972 388.801C362.071 348.876 362.108 294.188 352.012 244.755Z";

  const { x } = useSpring({
    ref: animationRef,
    to: [
      { x: 0, config: { duration: 2000 } },
      { x: 1, config: { duration: 2000 } },
      { x: 2, config: { duration: 2000 } },
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
          <animated.path
            fill="white"
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
            objectFit: "contain",
            scale,
          }}
        />
      </div>
    </div>
  );
};

export default SpeakerBlob;
