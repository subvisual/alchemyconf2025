import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  link: string;
}

const WebIcon = ({
  className,
  color = "#F4AC45",
  link,
  ...props
}: IconProps) => {
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
            <path
              d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 6 C 23.495 6 6 23.495 6 45 s 17.495 39 39 39 s 39 -17.495 39 -39 S 66.505 6 45 6 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill={color}
            />
            <path
              d="M 45 90 c -1.657 0 -3 -1.343 -3 -3 V 3 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 84 C 48 88.657 46.657 90 45 90 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill={color}
            />
            <path
              d="M 45 90 c -13.892 0 -24.774 -19.767 -24.774 -45 S 31.108 0 45 0 c 13.893 0 24.774 19.767 24.774 45 S 58.893 90 45 90 z M 45 6 C 34.823 6 26.226 23.86 26.226 45 c 0 21.141 8.597 39 18.774 39 s 18.774 -17.859 18.774 -39 C 63.774 23.86 55.177 6 45 6 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill={color}
            />
            <path
              d="M 83.935 63.752 H 6.059 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 77.876 c 1.657 0 3 1.343 3 3 S 85.592 63.752 83.935 63.752 z"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              fill={color}
            />
            <path
              d="M 83.939 32.248 H 6.063 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 77.876 c 1.657 0 3 1.343 3 3 S 85.597 32.248 83.939 32.248 z"
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

export default WebIcon;
