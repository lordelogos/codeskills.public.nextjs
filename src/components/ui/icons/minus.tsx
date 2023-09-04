import { IconProps } from "@/core/types";
import { FC } from "react";

export const Minus: FC<IconProps> = ({ size = 24, className }) => {
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
      <g id="icons8:minus">
        <path
          id="Vector"
          d="M12 2.25C6.624 2.25 2.25 6.624 2.25 12C2.25 17.376 6.624 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.624 17.376 2.25 12 2.25ZM12 3.75C16.5653 3.75 20.25 7.43475 20.25 12C20.25 16.5653 16.5653 20.25 12 20.25C7.43475 20.25 3.75 16.5653 3.75 12C3.75 7.43475 7.43475 3.75 12 3.75ZM7.5 11.25V12.75H16.5V11.25H7.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
