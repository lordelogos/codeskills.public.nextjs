import { IconProps } from "@/core/types";
import { FC } from "react";

export const Logo: FC<IconProps> = ({ size = 24, className }) => {
  const width = Math.round(size * (24 / 24));

  return (
    <svg
      width={width}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline stroke="white" points="7 8 3 12 7 16"></polyline>
      <polyline stroke="white" points="17 8 21 12 17 16"></polyline>
      <line stroke="#f52929" x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  );
};
