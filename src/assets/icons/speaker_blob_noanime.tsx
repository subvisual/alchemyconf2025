import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const SpeakerBlob = ({ className, color = "#003049", ...props }: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="358"
        height="560"
        viewBox="0 0 358 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.9992 229.499C56.2601 189.423 28.9654 170.703 32 129.999C36.2597 72.8633 104.414 21.2278 164.5 8.49999C224.592 -4.22923 297.352 11.1226 334.001 60.0004C365.528 102.048 304.466 175.982 317.001 260.5C322.952 300.629 327 332.184 317.001 371.5C302.814 427.281 241.531 433.315 184 435C134.561 436.448 98.1804 438.381 63.9992 394.499C32.9 354.575 76.2166 292.767 63.9992 229.499Z"
          stroke={color}
        />
      </svg>
    </div>
  );
};

export default SpeakerBlob;
