import { IconProps } from "@/core/types";
import { FC } from "react";

export const ArrowLink: FC<IconProps> = ({ size = 16, className }) => {
  const width = Math.round(size * (20 / 20));

  return (
    <svg
      width={width}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iconoir:arrow-tr">
        <path
          id="Vector"
          d="M5 15.8333L15.8333 5M15.8333 5V15.4M15.8333 5H5.43333"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
