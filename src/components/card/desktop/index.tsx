import Image from "next/image";
import education from "@static/education.jpg";
import styles from "./desktop.module.css";
import Link from "@/components/link";
import { ArrowLink } from "@/components/icons/arrow-link";
import { FC } from "react";
import { CardProps } from "@/core/types";

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
        <Link href="#">
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
