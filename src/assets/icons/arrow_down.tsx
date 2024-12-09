import { SVGProps } from "react";

interface ArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const ArrowDown = ({
  className,
  color = "#7D1D3F",
  ...props
}: ArrowProps) => (
  <svg
    className={`${className}`}
    viewBox="0 0 16 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5625 1.1875L8 6.8125L1.4375 1.1875"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDown;
