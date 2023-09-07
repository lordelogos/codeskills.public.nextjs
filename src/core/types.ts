import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType, ReactNode } from "react";

export type displayCard =
  | "education"
  | "support"
  | "networking"
  | "collaboration"
  | "industry updates";

export type HeroCard = "community" | "articles" | "projects";

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

export type SkillsetCardNumber = "01" | "02" | "03";

export type SkillsetCardProps = {
  number: SkillsetCardNumber;
  title: string;
  description: string;
  isActive?: boolean;
  setActive?: () => void;
};

export type FAQCard = {
  question: string;
  answer: string | TrustedHTML;
};
