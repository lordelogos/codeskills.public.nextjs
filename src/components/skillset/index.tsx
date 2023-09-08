"use client";

import { Link } from "@ui/link";
import { ArrowLink } from "@ui/icons/arrow-link";
import { SkillsetCard } from "@ui/skillset-card";
import { SkillsetCardNumber, SkillsetCardProps } from "@/core/types";
import frontendDevelopment from "@static/frontend.jpg";
import responsiveDesign from "@static/responsive-design.jpg";
import { StackedImageAnimation } from "@ui/stacked-image";
import { useState } from "react";
import uiUx from "@static/ui-ux.jpg";
import styles from "./skillset.module.css";

const DisplayCards: Array<SkillsetCardProps> = [
  {
    number: 1,
    title: "Frontend Development",
    description:
      "Learn the art of creating engaging user interfaces and seamless user experiences through HTML, CSS, and JavaScript.",
  },
  {
    number: 2,
    title: "Responsive Design",
    description:
      "Gain expertise in developing websites that adapt and function seamlessly across different devices and screen sizes.",
  },
  {
    number: 3,
    title: "UI/UX Design",
    description:
      "Craft intuitive and visually captivating user interfaces that prioritize the needs and goals of the end-users.",
  },
];

export const Skillset = () => {
  const [activeCard, setActiveCard] = useState<SkillsetCardNumber>(2);

  return (
    <section className={`section`}>
      <div className={`header`}>
        <h2 className={`title`}>
          We shape your <span>skillset</span>
        </h2>
        <div className={`description`}>
          <p>
            Our members enjoy benefits that empower them to excel in web
            development
          </p>
          <Link href="#">
            <span>Join our community</span>
            <ArrowLink />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.cards}>
          {DisplayCards.map((o, i) => (
            <SkillsetCard
              setActive={() => setActiveCard(o.number)}
              key={i}
              {...o}
              isActive={activeCard === o.number}
            />
          ))}
        </div>
        <div className={styles.images}>
          <StackedImageAnimation
            images={[uiUx, frontendDevelopment, responsiveDesign]}
            activeIndex={activeCard}
          />
        </div>
      </div>
    </section>
  );
};
