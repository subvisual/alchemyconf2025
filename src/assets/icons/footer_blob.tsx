import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const FooterBlob = ({ className, color = "#7D1D3F", ...props }: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="2440"
        height="1145"
        viewBox="-70 0 2440 545"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-11.9567 217.816C-86.7926 356.843 -79.4987 479.403 -11.9567 622.116C82.7774 822.284 427.428 618.408 645.648 656.113C1012.35 719.473 1293.3 873.671 1466.15 544.115C1559.81 365.537 1548 191 1433 79C1224.21 -124.341 994.522 127.294 705.535 165.069C426.951 201.484 121.209 -29.5749 -11.9567 217.816Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default FooterBlob;
