import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  link: string;
}

const XIcon = ({ className, color = "#F4AC45", link, ...props }: IconProps) => {
  return (
    <div className={`relative ${className}`}>
      <a href={link} target="_blank">
        <svg
          width="32"
          height="32"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          {...props}
        >
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <polygon
              points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 "
              transform="  matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill={color}
            />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default XIcon;