import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  text?: string;
  textColor?: string;
  textSize?: string;
  stroke?: string;
  strokeWidth?: string;
}

const TheatroTitleBlob = ({
  className,
  color = "#F4AC45",
  text = "Theatro \nCirco",
  textColor = "#003049",
  textSize = "32px",
  stroke = `${color}`,
  strokeWidth = "4",
  ...props
}: BlobProps) => {
  const lines = text.split("\n");
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 290 394"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87.402 85.2096C80.6011 107.613 82.0277 122.938 83.4651 138.378C83.493 138.677 83.5208 138.977 83.5487 139.276C85.0225 155.145 86.331 171.242 78.3838 194.769C75.2551 204.031 68.7984 213.172 61.0629 222.168C55.1536 229.04 48.3913 235.946 41.651 242.829C39.5637 244.96 37.4785 247.09 35.4214 249.215C26.6759 258.252 18.4122 267.244 12.3332 276.272C6.24986 285.307 2.48829 294.184 2.48827 303C2.48829 333.483 23.8998 357.907 50.4126 373.405C63.6319 381.133 78.0061 386.565 91.3652 389.363C104.761 392.168 116.961 392.29 125.91 389.586C146.728 383.294 160.672 374.463 170.721 364.375C180.785 354.271 187.046 342.807 192.368 331.062C193.99 327.484 195.527 323.865 197.062 320.25C205.527 300.314 213.956 280.461 236.507 267.757C249.234 260.588 261.533 255.634 273.109 251.405C276.598 250.13 280.006 248.927 283.337 247.75C291.113 245.004 298.464 242.408 305.412 239.416C325.049 230.96 340.989 219.536 351.636 193.376C371.756 143.945 368.825 80.0285 328.219 46.6744C293.519 18.1715 255.431 0.0367654 210.979 2.62576C162.352 5.45787 104.045 30.3854 87.402 85.2096Z"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />

      {text && (
        <text
          x="50%"
          y="25%"
          textAnchor="start"
          fill={textColor}
          fontSize={textSize}
          className="font-alegreya_sans font-semibold"
        >
          {lines.map((line, index) => (
            <tspan
              key={index}
              x="45%"
              dy={index === 0 ? "0" : "32px"} // Adjust line spacing
            >
              {line}
            </tspan>
          ))}
        </text>
      )}
    </svg>
  );
};

export default TheatroTitleBlob;