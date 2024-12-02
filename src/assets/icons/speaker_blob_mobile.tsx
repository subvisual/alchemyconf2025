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
  imageScale,
  ...props
}: SpeakerBlobProps) => {
  const [hovered, setHovered] = useState(false);
  const animationRef = useSpringRef();

  const path1 =
    "M24.1704 168.691C18.3672 138.679 -2.09979 124.661 0.175751 94.1798C3.36991 51.3933 54.4757 12.7261 99.5311 3.19477C144.591 -6.33753 199.15 5.15869 226.631 41.761C250.273 73.2486 204.485 128.614 213.884 191.906C218.347 221.956 221.382 245.586 213.884 275.028C203.246 316.8 157.293 321.318 114.153 322.58C77.0811 323.665 49.8012 325.112 24.1704 292.251C0.850589 262.353 33.3316 216.069 24.1704 168.691Z";
  const path2 =
    "M2.46734 173.017C0.860997 137.558 -4.85421 114.821 9.6095 82.4077C29.7178 37.3449 63.6759 13.7772 108.849 4.20667C154.028 -5.36491 190.309 -0.21311 217.863 36.54C241.566 68.1574 231.82 103.148 229.516 154.969C227.711 195.572 249.913 232.796 223.877 264.002C196.154 297.231 123.885 311.75 123.885 311.75C123.885 311.75 53.3512 324.066 27.6532 291.07C4.27237 261.049 4.60072 220.109 2.46734 173.017Z";
  const path3 =
    "M0.153701 185.746C1.68427 157.118 19.5978 145.258 28.251 117.926C39.3727 82.7983 22.063 52.8551 46.608 25.3768C84.8175 -17.3991 165.63 -0.760269 193.089 35.8683C216.712 67.3785 238.917 114.551 232.801 168.135C228.341 207.212 214.566 227.738 193.089 260.685C169.976 296.144 160.483 339.43 118.163 338.997C82.3608 338.63 69.4041 309.282 46.608 281.669C20.1114 249.572 -2.06847 227.31 0.153701 185.746Z";
  const path4 =
    "M5.46219 194.317C-2.36035 155.207 -3.24046 129.046 12.6079 92.4404C27.9035 57.1115 33.5775 28.823 78.7142 19.2715C123.856 9.71886 203.678 -17.4088 231.209 19.2715C254.893 50.8261 260.439 125.491 265.764 171.612C271.782 223.735 276.299 263.305 243.228 304.066C212.834 341.527 194.775 354.632 130.465 354.632C66.1542 354.632 73.6854 312.321 59.9341 294.685C36.5722 264.724 14.2072 238.039 5.46219 194.317Z";
  const path5 =
    "M4.4908 183.567C10.6327 153.493 39.5847 137.29 56.9709 111.9C82.8458 74.1133 84.2286 10.8567 129.293 1.31083C174.362 -8.23608 213.455 36.2714 240.941 72.9298C264.587 104.466 273.335 144.966 265.949 183.567C259.671 216.375 227.103 233.431 205.35 258.934C179.732 288.97 168.365 336.89 129.293 343.786C87.9878 351.076 45.9067 324.512 20.2708 291.601C-3.0536 261.657 -3.08092 220.641 4.4908 183.567Z";
  const path6 =
    "M19.414 185.328C25.5749 155.223 1.97393 107.694 19.4138 82.2773C45.3688 44.4503 99.3983 12.4348 144.602 2.87869C189.81 -6.67839 236.355 7.66454 263.926 44.362C287.645 75.9315 292.4 139.363 284.991 178.004C278.694 210.847 266.562 218.543 244.742 244.074C219.045 274.142 213.217 343.408 174.024 350.312C132.592 357.61 35.3579 340.838 9.64281 307.892C-13.7537 277.917 11.8189 222.443 19.414 185.328Z";

  const interpolator = interpolate(path1, path2);

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
        width="256"
        height="355"
        viewBox="0 0 256 355"
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
      <div style={{ mask: `url(#myMask${position}mob)`, overflow: "hidden" }}>
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

export default SpeakerBlobMobile;
