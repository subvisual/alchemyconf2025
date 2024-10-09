import { SVGProps } from "react";

interface ConnectVecProps extends SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 1 | 2 | 3 | 4;
}

const ConnectVector = ({
  className,
  variant = 1,
  ...props
}: ConnectVecProps) => {
  const connectVec = {
    1: {
      path: "M0 92.166C60.5 92.166 73.321 40.4264 125.5 17.9587C164.5 1.16581 263 -13.8331 264.5 57.3765C265.09 85.3712 220.344 82.9656 221 110.959C221.442 129.855 248.5 168.877 248.5 168.877",
      viewBox: "0 0 268 171",
      width: "264",
      height: "164",
    },
    2: {
      path: "M271.554 142.649C271.554 142.649 199.563 125.587 177.554 89.6487C163.604 66.8697 178.293 43.9637 161.554 23.1487C124.554 -22.8601 47.7085 22.0275 19.0539 73.6487C1.63686 105.026 0.0753608 130.826 10.5539 165.149C22.8947 205.571 95.9334 202.809 85.0539 243.649C76.9088 274.224 50.6122 292.951 19.0539 290.649",
      viewBox: "0 0 273 295",
      width: "268",
      height: "286",
    },
    3: {
      path: "M2.5 35.5C20.3107 21.6488 40.2179 10.0471 62.5 6.49958C89.1982 2.24894 107.626 2.91536 131 16.4996C154.839 30.3543 126.73 77.0057 144 98.5C160.928 119.568 211.5 86.9992 218.5 125.5C225.5 164 214.936 162.157 225.5 181.5C239.707 207.512 292 222.5 292 222.5",
      viewBox: "0 0 293 266",
      width: "290",
      height: "218",
    },
    4: {
      path: "M288.5 87.4977C268.964 92.2773 254.036 92.2773 234.5 87.4977C210.169 81.545 195.39 54.9948 178.5 36.4977C157.5 13.4997 88.4999 -9.00014 50.4999 13.4996C15.5903 34.1694 62.4174 73.6243 45.4999 110.499C36.3797 130.377 0.973742 130.839 3.99975 152.5C6.64357 171.425 25.9809 176.388 37 192",
      viewBox: "0 0 290 195",
      width: "285",
      height: "188",
    },
  };
  const currentConnectVec = connectVec[variant];

  return (
    <svg
      className={`${className} absolute z-0`}
      viewBox={currentConnectVec.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={currentConnectVec.width}
      height={currentConnectVec.height}
      {...props}
    >
      <path
        d={currentConnectVec.path}
        fill="none"
        stroke="#003049"
        strokeWidth="7"
      />
    </svg>
  );
};

export default ConnectVector;
