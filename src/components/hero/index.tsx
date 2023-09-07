"use client";

import { siteLinks } from "@/core/site-config";
import { BrandIcon } from "@ui/brand-icon";
import styles from "./hero.module.css";
import { ArrowLink } from "@ui/icons/arrow-link";
import { Marqee } from "@ui/marqee";
import Link from "next/link";
import Image from "next/image";
import square from "@static/doodles/square.svg";
import x from "@static/doodles/x.svg";
import o from "@static/doodles/o.svg";
import { FC, useState } from "react";
import { HeroCard } from "@/core/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useMediaQuery } from "@/core/hooks";

type HeroCardProps = {
  type: HeroCard;
  title: string;
  marqeeText: string;
  image: StaticImport;
  href: string;
};

const HeroCards: Array<Omit<HeroCardProps, "activeCard" | "toggleActiveCard">> =
  [
    {
      type: "community",
      image: x,
      href: siteLinks.communityForm,
      title: "Community",
      marqeeText: "Join our thriving community of developers.",
    },
    {
      type: "articles",
      image: square,
      href: siteLinks.blog,
      title: "Articles",
      marqeeText: "Read our blog articles.",
    },
    {
      type: "projects",
      image: o,
      href: siteLinks.githubOrg,
      title: "Open source",
      marqeeText: "Check out our open source projects.",
    },
  ];

const HeroCard: FC<HeroCardProps> = ({
  title,
  type,
  marqeeText,
  image,
  href,
}) => {
  const { isMobile } = useMediaQuery();
  return (
    <Link href={href} target="_blank" className={styles[type]}>
      <div className={styles.link}>
        <p>{title}</p>
        <ArrowLink size={isMobile ? 16 : 24} />
      </div>
      <div className={styles.marqee}>
        <Marqee text={marqeeText} />
      </div>
      <Image
        src={image}
        alt="Codeskills community doodle"
        className={styles.doodle}
      />
    </Link>
  );
};

export const Hero = () => {
  return (
    <section className={`section`}>
      <div className={`${styles.banner}`}>
        <BrandIcon />
        <h1 className={`title`}>
          Unlock the secrets of <span>web development</span> with the support of
          our community
        </h1>
        <div className={styles.grid}>
          {HeroCards.map((o, i) => (
            <HeroCard key={i} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
};
