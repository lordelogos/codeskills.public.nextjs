import { Link } from "@ui/link";
import { ArrowLink } from "@ui/icons/arrow-link";
import { CardProps } from "@/core/types";
import { FC } from "react";
import Image from "next/image";
import styles from "./desktop.module.css";
import { routes } from "@/core/site-config";

export const CardDesktop: FC<CardProps> = ({
  icon: Icon,
  description,
  img,
  imgAlt,
  title,
  state,
  onClick,
}) => {
  return (
    <div className={styles.container} data-state={state} onClick={onClick}>
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <Icon className={styles.icon} size={40} />
          <p className={styles.title}>{title}</p>
          <div className={styles.divisor}></div>
        </div>
        <p className={styles.description}>{description}</p>
        <Link
          href={routes.joinCommunity}
          aria-label="Join our community"
          tabIndex={state === "open" ? 0 : -1}
        >
          <span>Join our community</span>
          <ArrowLink />
        </Link>
        <Image src={img} alt={imgAlt} className={styles.showcase} />
      </div>
      <div className={styles.cardHeader}>
        <Icon className={styles.icon} size={32} />
        <div className={styles.divisor}></div>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
