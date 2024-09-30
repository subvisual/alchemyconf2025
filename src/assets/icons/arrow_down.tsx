import { SVGProps } from "react";

interface ArrowDownProps extends SVGProps<SVGSVGElement> {
  className?: string;
}
const ArrowDown = ({ className, ...props }: ArrowDownProps) => (
  <svg
    className={`h-auto ${className}`}
    viewBox="0 0 23 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.148 0.000383377L1.77581 0.000383377C1.57967 0.000954628 1.38742 0.051218 1.21974 0.145761C1.05206 0.240305 0.915314 0.375548 0.824205 0.536936C0.733099 0.698323 0.691086 0.879744 0.70269 1.06167C0.714296 1.24359 0.779078 1.41913 0.890066 1.56938L10.5762 14.5694C10.9776 15.1084 11.9441 15.1084 12.3466 14.5694L22.0327 1.56938C22.1448 1.41944 22.2105 1.24381 22.2228 1.06159C22.235 0.879362 22.1933 0.697505 22.1021 0.535776C22.0109 0.374047 21.8737 0.238629 21.7055 0.144239C21.5373 0.0498495 21.3445 9.53674e-05 21.148 0.000383377Z"
      fill="black"
    />
  </svg>
);

export default ArrowDown;
