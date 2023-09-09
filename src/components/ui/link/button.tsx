import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";
import styles from "./link.module.css";
import { Spinner } from "../icons/spinner";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  variant?: "outline" | "accent";
  hoverDirection?: "vertical" | "horizontal";
  showActivity?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      hoverDirection = "vertical",
      variant = "outline",
      className,
      showActivity,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={`${styles.link} ${styles.button} ${className} ${
          variant === "accent" ? styles.accent : styles.outline
        } ${disabled ? styles.disabled : ""}`}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        <div
          className={`${styles.content}  ${
            hoverDirection === "horizontal"
              ? styles.horizontal
              : styles.vertical
          }`}
        >
          <div className={`${styles.text}`}>{children}</div>
          <div className={`${styles.hoverText}`}>{children}</div>
        </div>
        {showActivity && <Spinner size={16} />}
      </button>
    );
  }
);

Button.displayName = "Button";
