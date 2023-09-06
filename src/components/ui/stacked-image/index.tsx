"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useMemo, useRef, useEffect, FC } from "react";

import styles from "./stacked-image.module.css";
import { Link } from "../link";
import { ArrowLink } from "../icons/arrow-link";
import { useMediaQuery } from "@/core/hooks";
import { IconLink } from "../icon-link";
import { siteLinks } from "@/core/site-config";

type StackedImageAnimationProps = {
  images: StaticImageData[];
  activeIndex: number;
};

export const StackedImageAnimation: FC<StackedImageAnimationProps> = ({
  images,
  activeIndex,
}) => {
  const { isMobile } = useMediaQuery();
  const size = useMemo(() => images.length, [images.length]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const map = useMemo(() => {
    const map = new Map<number, number>();
    const len = images.length;
    let i = len;

    if (len < activeIndex || activeIndex < 0)
      throw new Error("Invalid index set as active index");

    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }

    return map;
  }, [activeIndex, images.length]);

  return (
    <div className={styles.container} ref={containerRef}>
      {images.map((image, i) => {
        const factor = size - 1 - map.get(i)!;

        return (
          <Image
            className={styles.img}
            src={image}
            alt="Codeskills skillset"
            key={i}
            style={{
              top: 0,
              transform: `scale(${1 - 0.09 * factor}) rotate(${
                10 * factor
              }deg)`,
              zIndex: map.get(i),
            }}
          />
        );
      })}
      <div className={styles.hoverLink}>
        <IconLink
          href={siteLinks.communityForm}
          label="Join the codeskills community"
        />
      </div>
    </div>
  );
};
