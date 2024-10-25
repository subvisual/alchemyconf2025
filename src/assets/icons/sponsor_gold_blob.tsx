import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const SponsorGoldBlob = ({
  className,
  color = "#003049",
  ...props
}: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="1289"
        height="1047"
        viewBox="0 0 1289 1047"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.49991 795.019C-18.3472 683.341 109 586.015 143 505.511C177 425.008 29.2072 292.012 120 152.012C251 -49.9867 505.775 68.6634 650.5 113.011C814.716 163.332 946.247 -43.9615 1192.5 9.51112C1326 38.5 1327.88 359.886 1146.5 422.496C906 505.511 985 725.99 855.5 878.5C742.448 1011.64 598 1022.01 412 1042.51C245.601 1060.85 44.4999 1020.01 2.49991 795.019Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SponsorGoldBlob;
