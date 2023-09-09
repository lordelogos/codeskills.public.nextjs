import { DetailedHTMLProps, InputHTMLAttributes, Ref, forwardRef } from "react";
import styles from "./input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, className, error, ...rest }, ref: Ref<HTMLInputElement>) => {
    const hasError = !!error?.length;
    return (
      <div className={styles.container} ref={ref}>
        <label
          htmlFor={name}
          className={`${styles.label} ${hasError ? styles.labelError : ""}`}
        >
          {label}
        </label>
        <input
          name={name}
          className={`${styles.input} ${hasError ? styles.inputError : ""}`}
          {...rest}
        />
        {hasError && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
