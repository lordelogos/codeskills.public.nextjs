import { ReactNode, forwardRef } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styles from "./link.module.css";

type ForwardedLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps;

interface LinkProps extends ForwardedLinkProps {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "accent";
  type?: "text" | "arrow";
  hoverDirection?: "vertical" | "horizontal";
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      hoverDirection = "vertical",
      type = "text",
      variant = "outline",
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <NextLink
        className={`${styles.link} ${className} ${
          variant === "accent" ? styles.accent : styles.outline
        }`}
        ref={ref}
        {...rest}
      >
        <div
          className={`${styles.content}  ${
            hoverDirection === "horizontal"
              ? styles.horizontal
              : styles.vertical
          }`}
        >
          <div
            className={`${styles.text} ${type === "arrow" ? styles.arrow : ""}`}
          >
            {children}
          </div>
          <div
            className={`${styles.hoverText} ${
              type === "arrow" ? styles.arrow : ""
            }`}
          >
            {children}
          </div>
        </div>
      </NextLink>
    );
  }
);

Link.displayName = "Link";
