import { SVGProps } from "react";

interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const ArrowRight = ({
  className,
  color = "#7D1D3F",
  ...props
}: ArrowRightProps) => (
  <svg
    className={`${className}`}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.666822 1.2502L0.666822 17.7502C0.667299 17.9173 0.709185 18.081 0.787971 18.2238C0.866757 18.3666 0.97946 18.4831 1.11395 18.5607C1.24844 18.6383 1.39962 18.6741 1.55123 18.6642C1.70283 18.6543 1.84911 18.5991 1.97432 18.5046L12.8077 10.2546C13.2568 9.9127 13.2568 9.08953 12.8077 8.7467L1.97432 0.4967C1.84937 0.401207 1.70302 0.345207 1.55116 0.334785C1.39931 0.324364 1.24776 0.359919 1.11298 0.437588C0.978209 0.515257 0.865361 0.63207 0.786703 0.775334C0.708044 0.918598 0.666583 1.08284 0.666822 1.2502Z"
      fill={color}
    />
  </svg>
);

export default ArrowRight;
