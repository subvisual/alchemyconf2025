import { SVGProps } from "react";

interface ArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const ArrowRight = ({
  className,
  color = "#7D1D3F",
  ...props
}: ArrowProps) => (
  <svg
    className={`${className}`}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.1875 1.4375L6.8125 8L1.1875 14.5625"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRight;
