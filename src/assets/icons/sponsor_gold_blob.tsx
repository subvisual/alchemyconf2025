import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const SponsorGoldBlob = ({
  className,
  color = "#F4AC45",
  ...props
}: BlobProps) => {
  return (
    <div className={`relative -z-10 ${className}`}>
      <svg
        width="1119"
        height="668"
        viewBox="0 0 1119 668"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M879.49 113.601C719.503 88.8007 602.113 166.29 502.603 134.547C354.507 87.3049 334.961 -7.47936 223.127 0.652443C111.293 8.78418 -2.98133 101.136 0.14416 256.614C2.83289 390.366 69.728 489.605 182.253 516.318C299.102 544.056 403.406 472.533 506.139 563.23C608.229 653.359 736.693 679.54 855.514 662.929C974.335 646.318 1107.85 566.858 1118.19 396.888C1129.24 215.238 951.147 124.709 879.49 113.601Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SponsorGoldBlob;

<svg width="1119" height="668" viewBox="0 0 1119 668" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M879.49 113.601C719.503 88.8007 602.113 166.29 502.603 134.547C354.507 87.3049 334.961 -7.47936 223.127 0.652443C111.293 8.78418 -2.98133 101.136 0.14416 256.614C2.83289 390.366 69.728 489.605 182.253 516.318C299.102 544.056 403.406 472.533 506.139 563.23C608.229 653.359 736.693 679.54 855.514 662.929C974.335 646.318 1107.85 566.858 1118.19 396.888C1129.24 215.238 951.147 124.709 879.49 113.601Z" fill="#F4AC45"/>
</svg>
