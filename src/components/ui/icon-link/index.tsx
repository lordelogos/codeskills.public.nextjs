import { useMediaQuery } from "@/core/hooks";
import { Link } from "../link";
import styles from "./icon-link.module.css";
import { ArrowLink } from "../icons/arrow-link";

export const IconLink = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  const { isMobile } = useMediaQuery();
  return (
    <Link
      href={href}
      className={`${styles.cta} ${className}`}
      hoverDirection="horizontal"
    >
      <ArrowLink size={isMobile ? 16 : 40} className={styles.ctaIcon} />
    </Link>
  );
};
