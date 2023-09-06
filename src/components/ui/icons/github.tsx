import { IconProps } from "@/core/types";
import { FC } from "react";

export const Github: FC<IconProps> = ({ size = 28, className }) => {
  const width = Math.round(size * (28 / 28));

  return (
    <svg
      width={width}
      height={size}
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="mdi:github">
        <path
          id="Vector"
          d="M13.9999 2.33301C12.4678 2.33301 10.9507 2.63478 9.53528 3.22108C8.11981 3.80738 6.83369 4.66675 5.75034 5.7501C3.56242 7.93802 2.33325 10.9055 2.33325 13.9997C2.33325 19.1563 5.68159 23.5313 10.3133 25.083C10.8966 25.1763 11.0833 24.8147 11.0833 24.4997V22.528C7.85159 23.228 7.16325 20.9647 7.16325 20.9647C6.62659 19.6113 5.86825 19.2497 5.86825 19.2497C4.80659 18.5263 5.94992 18.5497 5.94992 18.5497C7.11659 18.6313 7.73492 19.7513 7.73492 19.7513C8.74992 21.5247 10.4649 20.9997 11.1299 20.7197C11.2349 19.9613 11.5383 19.448 11.8649 19.1563C9.27492 18.8647 6.55659 17.8613 6.55659 13.4163C6.55659 12.1213 6.99992 11.083 7.75825 10.2547C7.64159 9.96301 7.23325 8.74967 7.87492 7.17467C7.87492 7.17467 8.85492 6.85967 11.0833 8.36467C12.0049 8.10801 13.0083 7.97967 13.9999 7.97967C14.9916 7.97967 15.9949 8.10801 16.9166 8.36467C19.1449 6.85967 20.1249 7.17467 20.1249 7.17467C20.7666 8.74967 20.3583 9.96301 20.2416 10.2547C20.9999 11.083 21.4433 12.1213 21.4433 13.4163C21.4433 17.873 18.7133 18.853 16.1116 19.1447C16.5316 19.5063 16.9166 20.218 16.9166 21.303V24.4997C16.9166 24.8147 17.1033 25.188 17.6983 25.083C22.3299 23.5197 25.6666 19.1563 25.6666 13.9997C25.6666 12.4676 25.3648 10.9505 24.7785 9.53503C24.1922 8.11957 23.3328 6.83345 22.2495 5.7501C21.1661 4.66675 19.88 3.80738 18.4646 3.22108C17.0491 2.63478 15.532 2.33301 13.9999 2.33301Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};