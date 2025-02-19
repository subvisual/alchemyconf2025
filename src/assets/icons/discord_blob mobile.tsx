import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const DiscordBlobMobile = ({
  className,
  color = "#F4AC45",
  ...props
}: BlobProps) => {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="1390"
        height="1580"
        viewBox="0 0 390 1580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-427.29 399.706C-442.565 328.706 -450.734 222.81 -409.79 146.205C-378.633 87.911 -281.087 18.7011 -186.29 3.70514C-85.8858 -12.1778 4.98055 23.605 92.2099 98.7054C246.57 231.602 453.192 30.8376 559.709 222.702C597.399 290.591 550.057 446.71 448.617 479.056C359.741 507.396 246.137 381.48 124.043 460.591C12.5783 532.814 -91.7584 598.507 -222.79 574.205C-347.957 550.991 -408.683 486.197 -427.29 399.706Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default DiscordBlobMobile;
