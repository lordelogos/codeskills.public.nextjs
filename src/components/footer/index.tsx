import { siteLinks } from "@/core/site-config";
import { BrandIcon } from "../ui/brand-icon";
import { ArrowLink } from "../ui/icons/arrow-link";
import { Discord } from "../ui/icons/discord";
import { Github } from "../ui/icons/github";
import { Whatsapp } from "../ui/icons/whatsapp";
import { Link } from "../ui/link";
import styles from "./footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.grid}>
      <section className={`section ${styles.container}`}>
        <h2 className={styles.title}>
          Unlock the secrets of <span>web development</span> with our community
        </h2>
        <p className={styles.description}>
          Dive into the world of web development as we uncover its mysteries
          together
        </p>
        <Link href={siteLinks.communityForm} variant="accent">
          <span>Join our community</span>
          <ArrowLink />
        </Link>
      </section>
      <footer className={`section ${styles.footer}`}>
        <BrandIcon />
        <p>&copy; Codeskills, {currentYear}</p>
        <div>
          <a href={siteLinks.whatsApp} target="_blank" className={styles.link}>
            <Whatsapp />
          </a>
          <a href={siteLinks.discord} target="_blank" className={styles.link}>
            <Discord />
          </a>
          <a href={siteLinks.githubOrg} target="_blank" className={styles.link}>
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
};
