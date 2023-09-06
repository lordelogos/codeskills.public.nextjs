"use client";

import { ArrowLink } from "@ui/icons/arrow-link";
import { Link } from "@ui/link";
import { IconLink } from "@ui/icon-link";
import { siteLinks } from "@/core/site-config";
import styles from "./share-insights.module.css";

export const ShareInsights = () => {
  const currentDate = new Date().getFullYear();
  return (
    <section className={`section`}>
      <div className={`header`}>
        <h2 className={`title`}>
          We discover and <span>share insights</span>
        </h2>
        <div className={`description`}>
          <p>
            Gain knowledge, stay current, and get inspired by our diverse
            articles.
          </p>
          <Link href={siteLinks.blog}>
            <span>View blog</span>
            <ArrowLink />
          </Link>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}></div>
        <a
          href="https://blog.codeskills.dev/posts/css-selectors-and-properties"
          target="__blank"
          className={styles.gridItem2}
        >
          <p>CSS</p>
          <h3>Mastering Selectors and Properties: A Beginner guide</h3>
          <p>{currentDate}</p>
        </a>
        <a
          href="https://blog.codeskills.dev/posts/basic-html-synthax"
          target="__blank"
          className={styles.gridItem3}
        >
          <p>HTML</p>
          <h3>Mastering Basic HTML Syntax: A Beginner guide</h3>
          <p>{currentDate}</p>
        </a>
        <div className={styles.gridItem4}>
          <div>
            <p>Over 20+ articles</p>
            <h3>See all articles</h3>
          </div>
          <IconLink href={siteLinks.blog} className={styles.hoverLink} />
        </div>
      </div>
    </section>
  );
};
