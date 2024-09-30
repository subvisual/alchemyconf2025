import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  text?: string;
  textColor?: string;
  textSize?: string;
  stroke?: string;
}

const Blob = ({
  className,
  text,
  textColor = "#003049",
  textSize = "22px",
  stroke = "#7D1D3F",
  ...props
}: BlobProps) => (
  <svg
    className={`${className}`}
    viewBox="0 0 373 348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.921 152.071C73.9136 138.57 70.7083 115.824 84.9397 106.886C100.009 97.4226 125.168 118.243 137.773 105.691C162.653 80.9155 150.004 27.1608 181.207 11.0243C203.552 -0.53136 227.337 32.1702 244.706 50.3904C260.26 66.7064 257.863 95.5946 275.369 109.801C299.127 129.08 344.027 117.343 359.625 143.646C373.279 166.669 341.802 194.082 341.207 220.819C340.502 252.494 381.657 295.321 355.841 313.704C322.879 337.176 277.49 298.162 237.11 294.943C220.577 293.626 203.492 293.939 188.205 300.343C167.067 309.198 153.906 346.333 132.211 338.888C109.577 331.121 127.469 285.164 107.149 272.528C82.4663 257.178 43.9619 287.47 20.9595 269.705C2.63979 255.555 7.08275 223.074 15.0109 201.365C23.0371 179.389 50.0002 170.878 63.921 152.071Z"
      fill="#C4C4C4"
      stroke={stroke}
      strokeWidth="16"
    />

    {text && (
      <text
        x="50%"
        y="59%"
        textAnchor="middle"
        fill={textColor}
        fontSize={textSize}
        className="font-zilla_slab text-[36px] font-semibold uppercase"
      >
        {text}
      </text>
    )}
  </svg>
);

export default Blob;
