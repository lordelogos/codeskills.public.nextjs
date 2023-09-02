import { FC } from "react";

interface ArrowLinkProps {
  size?: number;
}

export const ArrowLink: FC<ArrowLinkProps> = ({ size = 20 }) => {
  const width = Math.round(size * (20 / 20));

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iconoir:arrow-tr">
        <path
          id="Vector"
          d="M5 15.8333L15.8333 5M15.8333 5V15.4M15.8333 5H5.43333"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
