import Link from "next/link";
import { Logo } from "../icons/logo";
import styles from "./brand-icon.module.css";
import { routes } from "@/core/site-config";

export const BrandIcon = () => {
  return (
    <Link href={routes.home} className={styles.container}>
      <Logo className={styles.icon} />
      <span>Codeskills</span>
    </Link>
  );
};
