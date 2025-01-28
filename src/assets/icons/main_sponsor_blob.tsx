import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  imageSrc: string;
}

const SponsorMainBlob = ({
  className,
  color = "#F4AC45",
  imageSrc,
  ...props
}: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="490"
        height="440"
        viewBox="0 0 290 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-4deg)' }}
        {...props}
      >
        <defs>
          <clipPath id="blobClip">
            <path
              d="M8 0C3.58172 0 0 3.58171 0 7.99999V182.887C13.9738 175.714 30.3824 169.001 50.9838 164.11C77.0679 157.917 103.608 168.275 133.61 179.984C166.476 192.811 203.497 207.259 248.624 203.349C258.973 202.452 273.775 197.727 290 189.503V8C290 3.58172 286.418 0 282 0H8Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#blobClip)">
          <path
            d="M8 0C3.58172 0 0 3.58171 0 7.99999V182.887C13.9738 175.714 30.3824 169.001 50.9838 164.11C77.0679 157.917 103.608 168.275 133.61 179.984C166.476 192.811 203.497 207.259 248.624 203.349C258.973 202.452 273.775 197.727 290 189.503V8C290 3.58172 286.418 0 282 0H8Z"
            fill="white"
          />
          <image
            href={imageSrc}
            width="70%"
            height="100%"
            // preserveAspectRatio="xMidYMid meet"
            transform="translate(50, -25) rotate(4, 143, 100)"
          />
        </g>
      </svg>
    </div>
  );
};

export default SponsorMainBlob;

