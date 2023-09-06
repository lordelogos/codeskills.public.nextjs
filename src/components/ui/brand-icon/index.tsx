import Link from "next/link";
import { Logo } from "../icons/logo";
import styles from "./brand-icon.module.css";

export const BrandIcon = () => {
  return (
    <Link href="#" className={styles.container}>
      <Logo className={styles.icon} />
      <span>Codeskills</span>
    </Link>
  );
};
