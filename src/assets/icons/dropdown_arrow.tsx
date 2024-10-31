import { SVGProps } from "react";

interface DropdownArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const DropdownArrow = ({
  className,
  width,
  height,
  color = "#003049",
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
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DropdownArrow;
