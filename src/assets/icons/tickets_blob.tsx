import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const TicketsBlob = ({ className, color = "#F4AC45", ...props }: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="1292"
        height="842"
        viewBox="0 0 1292 842"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1245.5 648.377C1299.99 524.46 1302.5 377.882 1270 268.377C1245.27 185.047 1149.66 69.7462 1031.5 25.3726C906.358 -21.6258 817.499 0.876731 685.28 74.5659C451.307 204.965 246.928 -60.6318 59.0006 158.376C-7.49589 235.869 -39.1251 440.396 83.0003 508.876C190 568.875 369.627 436.695 506 570.877C630.5 693.377 747.78 838.55 923 841.878C1090.38 845.056 1198.67 754.877 1245.5 648.377Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default TicketsBlob;
