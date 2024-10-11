import { SVGProps } from "react";

interface DropdownArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
}

const DropdownArrow = ({
  className,
  width,
  height,
  ...props
}: DropdownArrowProps) => (
  <svg
    className={`${className}`}
    width={width}
    height={height}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 1L7 7L1 1"
      stroke="#003049"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default DropdownArrow;
