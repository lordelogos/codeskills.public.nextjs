import { IconProps } from "@/core/types";
import { FC } from "react";

export const X: FC<IconProps> = ({ size = 24, className }) => {
  const width = Math.round(size * (24 / 24));

  return (
    <svg
      width={width}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="iconoir:cancel">
        <path
          id="Vector"
          d="M6.75781 17.243L12.0008 12L17.2438 17.243M17.2438 6.75696L11.9998 12L6.75781 6.75696"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
