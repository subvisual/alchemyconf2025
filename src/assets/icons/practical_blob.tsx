import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const PracticalBlob = ({ className, color = "#003049", ...props }: BlobProps) => {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="1181"
        height="519"
        viewBox="0 0 1181 519"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.25187 203.282C-11.7298 34.3552 235.052 -20.5844 344.189 7.71877C483.255 43.7837 466.598 165.875 576.264 189.952C706.614 218.57 859.761 148.911 993.21 147.627C1146.17 146.156 1242.91 320.762 1134.47 402.129C1026.03 483.495 944.937 378.634 811.526 409.459C694.668 436.459 681.49 531.059 506.549 516.73C367.259 505.321 375.835 419.519 229.36 349.793C135.403 305.066 11.9395 342.357 1.25187 203.282Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default PracticalBlob;
