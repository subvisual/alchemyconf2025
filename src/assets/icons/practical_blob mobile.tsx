import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const PracticalBlobMobile = ({
  className,
  color = "#003049",
  ...props
}: BlobProps) => {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="2290"
        height="881"
        viewBox="0 0 1290 881"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M534.999 400.503C550.274 329.503 558.443 223.607 517.499 147.002C486.342 88.7079 388.796 19.4979 293.999 4.50202C193.595 -11.3809 102.728 24.4019 15.4991 99.5023C-138.861 232.399 -345.483 31.6345 -452 223.499C-489.69 291.388 -442.348 447.507 -340.908 479.853C-252.032 508.193 -138.428 382.276 -16.3339 461.387C95.1307 533.611 199.467 599.304 330.499 575.002C455.666 551.788 516.392 486.994 534.999 400.503Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default PracticalBlobMobile;
