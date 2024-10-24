import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const SponsorMainBlob = ({
  className,
  color = "#F4AC45",
  ...props
}: BlobProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="548"
        height="426"
        viewBox="0 0 548 426"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M463.259 154.736C387.703 119.105 318.293 140.315 273.681 110.077C207.286 65.0756 211.451 15.3136 154.917 3.01041C98.3838 -9.29283 28.3469 19.7278 7.19411 97.1298C-11.0029 163.716 7.6146 222.595 59.403 252.244C113.181 283.031 175.243 262.863 212.844 322.747C250.209 382.257 309.963 413.969 371.192 423.096C432.421 432.223 510.097 412.391 540.03 329.783C572.021 241.499 497.1 170.695 463.259 154.736Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SponsorMainBlob;
