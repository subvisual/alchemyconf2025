import * as React from "react";
import { SVGProps } from "react";

interface AlchemyIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

const AlchemyIcon = ({
  width = 129,
  height = 140,
  ...props
}: AlchemyIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 129 140"
    fill="none"
    {...props}
  >
    <path
      fill="#003049"
      fillRule="evenodd"
      d="m62.216 139.605 1.787.895h1.34l1.787-.895L129 102.034l-5.127-8.946-1.34-.447-29.936 17.891h-.893l-14.297-8.051-.447-.447 37.53-21.47 1.341-1.342-42.892-74.25L69.81 2.29 67.131.947 64.45.5l-3.128.447-2.68 1.342-2.681 2.684-42.446 73.355v.894l37.978 22.812v.447l-12.51 8.051h-1.34L8.6 93.982l-2.234-1.341h-.894L0 102.48l62.216 37.124Zm1.787-13.418-13.404-8.499 13.85-8.498 13.851 8.498-14.297 8.499Zm.447-30.863L30.047 75.197l33.956-59.042.447-.895.893.895 33.51 59.041L64.45 95.325Z"
      clipRule="evenodd"
    />
    <path
      fill="#003049"
      d="M78.747 62.225c0 7.905-6.401 14.313-14.297 14.313-7.897 0-14.298-6.408-14.298-14.313s6.401-14.313 14.298-14.313c7.896 0 14.297 6.408 14.297 14.313Z"
    />
  </svg>
);
export default AlchemyIcon;
