import { IconProps } from "@/core/types";
import { FC } from "react";

export const Pen: FC<IconProps> = ({ size = 24, className }) => {
  const width = Math.round(size * (40 / 40));

  return (
    <svg
      className={className}
      width={width}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M38.125 15.7312C38.1261 15.3207 38.0458 14.9141 37.8886 14.5348C37.7314 14.1556 37.5006 13.8113 37.2094 13.5219L26.4781 2.78906C26.1879 2.49874 25.8434 2.26844 25.4642 2.11132C25.0849 1.95419 24.6785 1.87332 24.268 1.87332C23.8575 1.87332 23.451 1.95419 23.0718 2.11132C22.6926 2.26844 22.348 2.49874 22.0578 2.78906L17.7109 7.13594L8.76719 10.4906C8.25356 10.6831 7.79964 11.0074 7.45104 11.4308C7.10244 11.8543 6.87144 12.3621 6.78125 12.9031L3.15 34.6875C3.10454 34.9565 3.11831 35.2321 3.19035 35.4952C3.2624 35.7583 3.39097 36.0025 3.56712 36.2108C3.74327 36.4191 3.96273 36.5864 4.21021 36.7011C4.4577 36.8158 4.72723 36.8752 5 36.875C5.10469 36.8755 5.20923 36.8671 5.3125 36.85L27.1016 33.2172C27.642 33.1261 28.1492 32.8949 28.5725 32.5468C28.9958 32.1986 29.3204 31.7456 29.5141 31.2328L32.8672 22.2875L37.2141 17.9406C37.5045 17.6509 37.7345 17.3064 37.8909 16.9272C38.0472 16.548 38.1268 16.1415 38.125 15.7312ZM26.125 29.5781L10.4688 32.1875L15.625 27.0312C16.7583 27.5428 18.035 27.6407 19.233 27.3078C20.431 26.9749 21.4743 26.2324 22.1812 25.2095C22.8881 24.1867 23.2138 22.9482 23.1016 21.7099C22.9894 20.4716 22.4465 19.3119 21.5673 18.4327C20.6881 17.5535 19.5284 17.0106 18.2901 16.8984C17.0518 16.7862 15.8133 17.1119 14.7905 17.8188C13.7676 18.5257 13.0251 19.569 12.6922 20.767C12.3593 21.965 12.4572 23.2417 12.9688 24.375L7.8125 29.5312L10.4219 13.875L18.2813 10.9281L29.0703 21.7187L26.125 29.5781ZM16.25 22.1875C16.25 21.8785 16.3416 21.5764 16.5133 21.3194C16.685 21.0625 16.9291 20.8622 17.2146 20.7439C17.5001 20.6257 17.8142 20.5947 18.1173 20.655C18.4204 20.7153 18.6988 20.8641 18.9174 21.0826C19.1359 21.3012 19.2847 21.5796 19.345 21.8827C19.4053 22.1858 19.3743 22.4999 19.2561 22.7854C19.1378 23.0709 18.9375 23.315 18.6806 23.4867C18.4236 23.6584 18.1215 23.75 17.8125 23.75C17.3981 23.75 17.0007 23.5854 16.7077 23.2924C16.4146 22.9993 16.25 22.6019 16.25 22.1875ZM31.25 18.5937L21.4063 8.75L24.2719 5.88437L34.1156 15.7281L31.25 18.5937Z"
        fill="currentColor"
      />
    </svg>
  );
};
