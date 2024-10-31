import { SVGProps } from "react";

interface BurguerProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const Burguer = ({ className, ...props }: BurguerProps) => (
  <svg
    className={`h-auto ${className}`}
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 2H26M2 10H26M2 18H26"
      stroke="#003049"
      strokeWidth="3.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Burguer;
