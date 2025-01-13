"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface TeatroBlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  src: string;
  alt: string;
  id: string;
  width: string;
  height: string;
  imageScale: number;
  posX: string;
  posY: string;
}

const isSafari = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

const TeatroBlobMob = ({
  className,
  src,
  alt,
  id,
  width,
  height,
  imageScale,
  posX,
  posY,
  ...props
}: TeatroBlobProps) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const path1 =
    "M269.445 17.2699C393.838 11.3439 459.675 -8.92265 513.376 4.51549C546.143 12.715 580.056 71.6351 588.011 143.605C593.114 189.765 578.092 315.385 551.604 348.9C513.68 396.884 449.359 366.514 332.552 375.928C267.118 381.202 121.388 433.022 65.2598 410.244C-11.0946 379.259 14.2899 296.36 24.6053 235.015C33.542 181.87 -24.2436 89.5471 12.1647 42.1725C65.2597 -26.9148 190.241 21.0432 269.445 17.2699Z";
  const path2 =
    "M287.008 1.95844C411.361 -3.96816 482.637 1.95751 531.468 42.1227C559.124 64.8705 595.464 116.157 578.783 186.62C560.941 261.984 590.883 308.716 560.553 338.784C490.264 408.468 345.848 408.336 250.915 384.95C187.19 369.251 121.406 384.95 71.0577 363.689C16.9252 340.831 10.3977 287.759 1.60176 226.408C-5.89812 174.097 12.2286 89.659 71.0577 42.1227C127.18 4.92092 207.828 5.73207 287.008 1.95844Z";
  const path3 =
    "M241.244 24.7262C365.85 18.7996 423.594 -27.817 495.926 24.7263C524.934 45.7984 600.406 88.8152 608.374 160.791C613.485 206.957 607.463 304.146 577.071 334.214C506.639 403.897 492.279 425.33 388.644 431.708C323.01 435.748 253.705 396.476 143.688 396.476C61.3265 396.476 12.7003 356.993 3.8865 295.642C-3.62858 243.331 -5.53469 147.194 48.8662 89.7225C91.4148 44.7722 161.905 28.4998 241.244 24.7262Z";
  const path4 =
    "M308.024 0.0148405C437.398 0.0151842 547.35 -2.03315 585.905 41.8689C616.069 76.2156 643 135.152 643 207.465C643 287.075 640.267 357.272 585.905 375.34C491.935 406.573 421.367 362.779 323.512 407.03C233.314 447.818 139.274 394.385 86.3256 375.34C27.7122 354.257 11.1762 282.22 2.20204 222.933C-9.64238 144.684 27.4199 100.257 86.3256 52.7878C120.351 25.3693 228.651 0.0146297 308.024 0.0148405Z";

  const { x } = useSpring({
    to: startAnimation
      ? [
          { x: 1, config: { duration: 2000 } },
          { x: 2, config: { duration: 2000 } },
          { x: 3, config: { duration: 2000 } },
          { x: 0, config: { duration: 5000 } },
          { x: 2, config: { duration: 2000 } },
          { x: 1, config: { duration: 2000 } },
          { x: 0, config: { duration: 4000 } },
        ]
      : { x: 0 },
    from: { x: 0 },
    loop: { reverse: false },
  });

  useEffect(() => {
    if (!isSafari()) {
      setStartAnimation(true);
    }
  }, []);

  return (
    <div
      className="overflow-visible"
      style={{
        width,
        height,
        position: "absolute",
        top: `${posY}`,
        left: `${posX}`,
        transform: "translateX(-25%)",
      }}
    >
      <svg
        width="650"
        height="440"
        viewBox="0 0 650 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        {...props}
      >
        <mask id={`theatroMaskMob${id}`}>
          <animated.path
            fill="white"
            d={x.to({
              range: [0, 1, 2, 3],
              output: [path1, path2, path3, path4],
            })}
          />
        </mask>
      </svg>
      <div style={{ mask: `url(#theatroMaskMob${id})`, overflow: "hidden" }}>
        <animated.img
          src={src}
          alt={alt}
          style={{
            translateX: "-290px",
            translateY: "-105px",
            width: "100%",
            height: "100%",
            scale: imageScale,
          }}
        />
      </div>
    </div>
  );
};

export default TeatroBlobMob;
