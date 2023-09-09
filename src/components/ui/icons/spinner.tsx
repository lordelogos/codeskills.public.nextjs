/**
 *
 * <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
 */

import { IconProps } from "@/core/types";
import { FC } from "react";

export const Spinner: FC<IconProps> = ({ size = 24, className }) => {
  const width = Math.round(size * (24 / 24));

  return (
    <svg
      width={width}
      height={size}
      className={`animate-spin ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity={0.25}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        opacity={0.75}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
