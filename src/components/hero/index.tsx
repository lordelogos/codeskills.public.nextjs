import { siteLinks } from "@/core/site-config";
import { BrandIcon } from "@ui/brand-icon";
import styles from "./hero.module.css";
import { Link } from "@ui/link";
import { ArrowLink } from "@ui/icons/arrow-link";

export const Hero = () => {
  return (
    <section className={`section ${styles.section}`}>
      <nav className={styles.nav}>
        <BrandIcon />
      </nav>
      <h1 className={`title ${styles.title}`}>
        Unlock the secrets of <span>web development</span> with the support of
        our community
      </h1>
      <div className={styles.links}>
        <Link href={siteLinks.communityForm} variant="accent">
          <span>Join our community</span>
          <ArrowLink />
        </Link>
        <Link href={siteLinks.communityForm}>
          <span>View blog</span>
          <ArrowLink />
        </Link>
      </div>
    </section>
  );
};
