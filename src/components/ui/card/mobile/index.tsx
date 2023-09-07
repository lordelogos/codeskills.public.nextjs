import { Link } from "@ui/link";
import { ArrowLink } from "@ui/icons/arrow-link";
import { CardProps } from "@/core/types";
import { FC } from "react";
import Image from "next/image";
import styles from "./mobile.module.css";
import { siteLinks } from "@/core/site-config";

export const CardMobile: FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  img,
  imgAlt,
  state,
  onClick,
}) => {
  return (
    <div className={styles.container} data-state={state} onClick={onClick}>
      <div className={styles.cardHeader}>
        <Icon className={styles.icon} size={24} />
        <div className={styles.divisorClosed}></div>
        <p className={styles.title}>{title}</p>
        <div className={styles.divisorOpen}></div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.description}>{description}</p>
        <Link
          href={siteLinks.communityForm}
          aria-label="join the codeskills community"
          tabIndex={state === "open" ? 0 : -1}
        >
          <span>Join our community</span>
          <ArrowLink />
        </Link>
        <Image src={img} alt={imgAlt} className={styles.showcase} />
      </div>
    </div>
  );
};
