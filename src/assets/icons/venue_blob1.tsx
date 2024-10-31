import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const VenueBlob1 = ({ className, color = "#003049", ...props }: BlobProps) => {
  return (
    <div className={` ${className}`}>
      <svg
        viewBox="0 0 1115 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.687069 373.773C0.686932 538.967 244.704 573.941 348.687 538.272C481.187 492.822 455.873 375.374 560.687 343.774C685.271 306.214 845.578 394.422 969.187 353.771C1084.19 315.951 1142.04 209.917 1101.69 86.271C1057.23 -49.9642 875.412 108.22 733.187 86.2708C617.615 68.4348 560.194 -16.9066 445.187 4.27203C321.986 26.9596 264.687 138.771 195.187 205.271C129.345 268.271 0.687172 237.771 0.687069 373.773Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default VenueBlob1;
