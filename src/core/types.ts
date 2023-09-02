import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType } from "react";

export type IconProps = {
  size?: number;
  className?: string;
};

export type CardProps = {
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  img: StaticImport;
  imgAlt: string;
  state?: "open" | "closed";
  onClick?: () => void;
};
