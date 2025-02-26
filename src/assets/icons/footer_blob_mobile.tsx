import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const FooterBlobMobile = ({ className, color = "#7D1D3F", ...props }: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="1480"
        height="960"
        viewBox="-50 0 1280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.1355 860.578H1460.56C1530.77 503.486 1430.28 244.539 993.445 72.4063C746.996 -24.7062 399.418 -28.0169 244.85 91.2229C-35.7755 307.708 -21.0516 538.359 31.0804 838C32.384 845.493 33.7349 853.02 35.1355 860.578Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default FooterBlobMobile;
