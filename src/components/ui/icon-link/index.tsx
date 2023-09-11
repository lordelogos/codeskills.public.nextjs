import { useMediaQuery } from "@/core/hooks";
import { Link } from "../link";
import styles from "./icon-link.module.css";
import { ArrowLink } from "../icons/arrow-link";

export const IconLink = ({
  href,
  className,
  label,
}: {
  href: string;
  className?: string;
  label?: string;
}) => {
  const { isMobile } = useMediaQuery();
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className={`${styles.cta} ${className}`}
      hoverDirection="horizontal"
    >
      <ArrowLink size={isMobile ? 16 : 40} className={styles.ctaIcon} />
    </Link>
  );
};
