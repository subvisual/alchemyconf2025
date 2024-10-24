"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";
interface TeatroBlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  src: string;
  alt: string;
  width: string;
  height: string;
}

const TeatroBlob = ({
  className,
  src,
  alt,
  width,
  height,
  ...props
}: TeatroBlobProps) => {
  const [hovered, setHovered] = useState(false);
  const animationRef = useSpringRef();
  const { scale } = useSpring({
    scale: hovered ? 1.05 : 1.0,
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
      className="absolute overflow-visible"
      style={{
        width,
        height,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 1300 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <clipPath id="myClipPath">
            <path d="M450.096 48.4977C530.991 44.6477 596.894 37.1217 652.41 30.7821C667.29 29.0828 681.424 27.4688 694.9 26.0336C758.728 19.2362 807.65 16.4748 851.516 27.4411C877.682 33.9825 904.796 60.9776 927.081 101.59C949.304 142.089 966.484 195.707 973.013 254.72C977.189 292.46 973.132 362.962 962.548 431.001C957.259 464.996 950.352 498.306 942.056 526.534C933.741 554.826 924.094 577.784 913.433 591.261C882.797 629.985 841.532 637.252 783.275 636.565C766.36 636.366 748.019 635.494 728.141 634.548C679.713 632.245 622.157 629.507 553.841 635.008C526.728 637.191 491.374 644.181 452.257 652.813C437.737 656.017 422.701 659.447 407.36 662.946C381.302 668.89 354.365 675.034 327.592 680.612C285.075 689.47 243.113 696.87 206.035 699.72C168.897 702.575 136.931 700.841 114.252 691.647C83.1397 679.033 62.5108 661.194 49.2506 640.041C35.9745 618.863 29.9956 594.22 28.4357 567.877C25.9796 526.398 34.4704 481.122 42.3657 439.022C44.5252 427.507 46.6401 416.229 48.4743 405.332C52.2217 383.068 48.9604 356.853 43.0301 329.028C39.3172 311.607 34.5184 293.396 29.6805 275.037C26.7988 264.102 23.9033 253.113 21.2151 242.208C13.9883 212.891 8.21886 184.032 7.96113 157.691C7.70357 131.367 12.9527 107.741 27.585 88.7195C70.6639 32.7192 143.05 23.9293 221.744 28.671C253.395 30.5782 285.909 34.6605 317.787 38.6631C325.485 39.6296 333.145 40.5914 340.747 41.5168C379.774 46.2676 417.275 50.0598 450.096 48.4977Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "35%",
          left: "49%",
        }}
      >
        <animated.img
          src={src}
          alt={alt}
          style={{
            width: "80%",
            height: "80%",
            objectFit: "fill",
            objectPosition: "top",
            clipPath: "url(#myClipPath)",
            position: "absolute",
            scale,
          }}
        />
      </div>
    </div>
  );
};

export default TeatroBlob;
