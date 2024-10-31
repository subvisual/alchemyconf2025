"use client";

import { SVGProps, useState, useEffect } from "react";
import { useSpring, animated, useSpringRef } from "@react-spring/web";

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

const TheatroBlob = ({
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
  const [hovered, setHovered] = useState(false);
  const animationRef = useSpringRef();

  const path1 =
    "M443.739 28.4373C648.596 18.6793 757.019 -14.6924 845.458 7.43535C899.42 20.9369 955.271 117.957 968.372 236.464C976.775 312.474 952.036 519.324 908.414 574.51C845.958 653.523 740.032 603.514 547.666 619.016C439.905 627.7 199.909 713.028 107.474 675.522C-18.2713 624.501 23.5334 487.997 40.5215 386.984C55.2389 299.473 -39.9259 147.451 20.0336 69.4427C107.474 -44.3188 313.3 34.6505 443.739 28.4373Z";
  const path2 =
    "M473.095 3.2248C678.076 -6.53403 795.564 3.22327 876.056 69.3599C921.644 106.817 981.546 191.267 954.049 307.292C924.639 431.388 973.995 508.336 924 557.848C808.136 672.589 570.086 672.373 413.601 633.864C308.558 608.015 200.121 633.864 117.129 598.857C27.899 561.217 17.1393 473.829 2.6403 372.807C-9.72228 286.67 20.1572 147.634 117.129 69.3599C209.639 8.10288 342.578 9.43853 473.095 3.2248Z";
  const path3 =
    "M397.065 40.6952C602.153 30.9411 697.194 -45.7821 816.245 40.6953C863.99 75.3765 988.209 146.175 1001.32 264.636C1009.74 340.616 999.824 500.573 949.802 550.061C833.878 664.747 810.243 700.023 639.67 710.52C531.643 717.168 417.574 652.534 236.496 652.534C100.937 652.534 20.9035 587.551 6.3968 486.578C-5.97229 400.483 -9.10956 242.257 80.429 147.668C150.46 73.6877 266.479 46.9059 397.065 40.6952Z";
  const path4 =
    "M507.305 0.0244763C720.38 0.0250431 901.468 -3.35325 964.967 69.0539C1014.64 125.702 1059 222.904 1059 342.17C1059 473.469 1054.5 589.244 964.967 619.044C810.201 670.556 693.977 598.327 532.814 671.31C384.261 738.582 229.38 650.455 142.175 619.044C45.6411 584.273 18.4068 465.462 3.6267 367.681C-15.8807 238.626 45.1596 165.352 142.175 87.0624C198.214 41.8412 376.581 0.0241286 507.305 0.0244763Z";

  const { x } = useSpring({
    ref: animationRef,
    to: [
      { x: 1, config: { duration: 2000 } },
      { x: 2, config: { duration: 2000 } },
      { x: 3, config: { duration: 2000 } },
      { x: 0, config: { duration: 5000 } },
      { x: 2, config: { duration: 2000 } },
      { x: 1, config: { duration: 2000 } },
      { x: 0, config: { duration: 4000 } },
    ],
    from: { x: 0 },
    loop: { reverse: false },
  });
  const { scale } = useSpring({
    scale: hovered ? imageScale * 1.05 : imageScale * 1,
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
      className="overflow-visible"
      style={{
        width,
        height,
        position: "absolute",
        top: `${posY}`,
        left: `${posX}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        width="1060"
        height="712"
        viewBox="0 0 1060 712"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        {...props}
      >
        <mask id={`theatroMask${id}`}>
          <animated.path
            fill="white"
            d={x.to({
              range: [0, 1, 2, 3],
              output: [path1, path2, path3, path4],
            })}
          />
        </mask>
      </svg>
      <div style={{ mask: `url(#theatroMask${id})`, overflow: "hidden" }}>
        <animated.img
          src={src}
          alt={alt}
          style={{
            translateX: "-140px",
            translateY: "35px",
            width: "100%",
            height: "100%",
            scale,
          }}
        />
      </div>
    </div>
  );
};

export default TheatroBlob;
