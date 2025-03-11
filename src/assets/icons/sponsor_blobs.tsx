import { SVGProps } from "react";

interface BlobProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  imageSrc: string;
  blobVariant?: number;
  scale?: number;
  typeStart?: number;
  x?: string;
  y?: string;
  id?: string;
}

const blobPaths = [
  "M8 0C3.58172 0 0 3.58171 0 7.99999V188.043C7.65573 186.122 15.6819 185.045 24.025 184.876C44.1143 184.469 61.8806 189.781 79.1407 194.943C107.002 203.274 133.544 211.21 166.407 194.058C207.907 172.398 250.209 163.016 290 168.221V8C290 3.58172 286.418 0 282 0H8Z",
  "M8 0C3.58173 0 0 3.58173 0 8V162.52C6.4375 162.602 12.9758 163.165 19.593 164.226C43.9384 168.132 64.2271 178.435 83.9376 188.445C115.754 204.603 146.064 219.995 189.499 206.479C224.057 195.724 257.933 190.925 290 192.596V8C290 3.58173 286.418 0 282 0H8Z",
  "M8 0C3.58172 0 0 3.58171 0 7.99999V191.81C6.52753 190.058 13.304 188.788 20.3102 188.027C44.8227 185.365 67.112 189.945 88.7661 194.394C123.72 201.576 157.019 208.418 195.342 183.912C226.285 164.125 258.168 150.438 290 143.682V8C290 3.58172 286.418 0 282 0H8Z",
  "M8 204.66C3.58172 204.66 0 201.078 0 196.66V16.6172C7.65573 18.5386 15.6819 19.6147 24.025 19.7839C44.1143 20.1913 61.8806 14.8787 79.1407 9.71759C107.002 1.38649 133.544 -6.55016 166.407 10.602C207.907 32.2618 250.209 41.6438 290 36.4387V196.66C290 201.078 286.418 204.66 282 204.66H8Z",
  "M8 211.66C3.58172 211.66 0 208.078 0 203.66V49.1398C6.43752 49.0582 12.9758 48.4954 19.593 47.4339C43.9384 43.5284 64.227 33.2251 83.9374 23.2153C115.754 7.0576 146.064 -8.33507 189.499 5.18134C224.057 15.9357 257.933 20.7352 290 19.064V203.66C290 208.078 286.418 211.66 282 211.66H8Z",
  "M8 201.66C3.58172 201.66 0 198.078 0 193.66V9.84999C6.52753 11.6023 13.304 12.8722 20.3102 13.6331C44.8227 16.2953 67.112 11.7154 88.7661 7.26607C123.72 0.0839386 157.019 -6.75813 195.342 17.7485C226.285 37.5352 258.168 51.222 290 57.9778V193.66C290 198.078 286.418 201.66 282 201.66H8Z",
];

const SponsorBlobs = ({
  className,
  color = "#F4AC45",
  imageSrc,
  blobVariant = 0,
  scale = 1,
  x = "50",
  y = "-25",
  id,
  typeStart = 0,
  ...props
}: BlobProps) => {
  const selectedPath = blobPaths[blobVariant];

  const rotation = typeStart === 0 
    ? (parseInt(id ?? "0") % 2 === 0 ? -4 : 4)
    : (parseInt(id ?? "0") % 2 === 0 ? 4 : -4);

  return (
    <div className={`relative ${className}`}>
      <svg
        width="290"
        height="220"
        viewBox="0 0 290 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotation}deg)` }}
        {...props}
      >
        <defs>
          <clipPath id={`blobClip-${id}`}>
            <path d={selectedPath} />
          </clipPath>
        </defs>
        <g clipPath={`url(#blobClip-${id})`}>
          <path d={selectedPath} fill="white" />
          <image
            href={imageSrc}
            width="70%"
            height="100%"
            transform={`translate(${x}, ${y}) rotate(${-rotation}, 143, 100) scale(${scale})`}
          />
        </g>
      </svg>
    </div>
  );
};

export default SponsorBlobs;
