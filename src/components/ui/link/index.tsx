import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import styles from "./link.module.css";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
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
  ) => (
    <a
      className={`${styles.link} ${className} ${
        variant === "accent" ? styles.accent : styles.outline
      }`}
      ref={ref}
      {...rest}
    >
      <div
        className={`${styles.content}  ${
          hoverDirection === "horizontal" ? styles.horizontal : styles.vertical
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
    </a>
  )
);

Link.displayName = "Link";
