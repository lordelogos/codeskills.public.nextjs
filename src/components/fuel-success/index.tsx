"use client";

import { CardDesktop } from "@ui/card/desktop";
import { Pen } from "@ui/icons/pen";
import { CardMobile } from "@ui/card/mobile";
import { CardProps, displayCard } from "@/core/types";
import { useMediaQuery } from "@/core/hooks";
import { Help } from "@ui/icons/help";
import { Transfer } from "@ui/icons/transfer";
import { Update } from "@ui/icons/update";
import { Join } from "@ui/icons/join";
import { useState } from "react";
import education from "@static/education.jpg";
import support from "@static/support.jpg";
import networking from "@static/networking.jpg";
import collaboration from "@static/collaboration.jpg";
import industryUpdates from "@static/industry-updates.jpg";
import styles from "./fuel-success.module.css";

const DisplayCards: Array<CardProps & { type: displayCard }> = [
  {
    title: "Education",
    description:
      "Master Web Development with Codeskills: Access tutorials, workshops, and resources to enhance your skills.",
    icon: Pen,
    img: education,
    imgAlt: "Education training at Codeskills",
    type: "education",
  },
  {
    title: "Support",
    description:
      "Codeskills, your Web Development Support System: Connect with mentors and developers for personalized assistance.",
    icon: Help,
    img: support,
    imgAlt: "Support at Codeskills",
    type: "support",
  },
  {
    title: "Networking",
    description:
      "Codeskills Community: Expand Your Web Development Network: Connect, collaborate, and grow with like-minded professionals.",
    icon: Transfer,
    img: networking,
    imgAlt: "Networking at Codeskills",
    type: "networking",
  },
  {
    title: "Collaboration",
    description:
      "Unlock Innovation with Codeskills: Join collaborative projects and ignite creativity in web development.",
    icon: Join,
    img: collaboration,
    imgAlt: "Collaboration at Codeskills",
    type: "collaboration",
  },
  {
    title: "Industry Updates",
    description:
      "Stay Ahead with Codeskills: Get real-time web development insights and industry news.",
    icon: Update,
    img: industryUpdates,
    imgAlt: "Industry updates at Codeskills",
    type: "industry updates",
  },
];

export const FuelSuccess = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        How we <span>fuel success</span> in web development
      </h2>
      <FuelSuccessCards />
    </section>
  );
};

const FuelSuccessCards = () => {
  const [displayCard, setDisplayCard] = useState<displayCard>("collaboration");
  const { isDesktop } = useMediaQuery();

  const handleDisplayCard = (card: displayCard) => {
    setDisplayCard(card);
  };

  if (!isDesktop) {
    return (
      <div className={styles.container}>
        {DisplayCards.map((o, i) => (
          <CardMobile
            key={i}
            onClick={() => handleDisplayCard(o.type)}
            state={displayCard === o.type ? "open" : "closed"}
            {...o}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {DisplayCards.map((o, i) => (
        <CardDesktop
          key={i}
          onClick={() => handleDisplayCard(o.type)}
          state={displayCard === o.type ? "open" : "closed"}
          {...o}
        />
      ))}
    </div>
  );
};
