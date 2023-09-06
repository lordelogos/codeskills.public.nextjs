"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Minus } from "@ui/icons/minus";
import { Plus } from "@ui/icons/plus";
import styles from "./faqs.module.css";
import { FAQCard } from "@/core/types";

// TODO: complete FAQs
const faqCards: FAQCard[] = [
  {
    question: "How can I join this community?",
    answer: `Becoming a part of our community is a breeze, 
      <a href="#">Click here</a>
     and fill the form to complete the registration process.`,
  },
  {
    question: "Are there any requirements to join the community",
    answer: "",
  },
  {
    question: "Can I join the community if I'm a beginner in web development",
    answer: "",
  },
  {
    question:
      "Is there a cost to join the community or participate in the sessions",
    answer: "",
  },
  {
    question: "What kind of activities and events are offered in the community",
    answer: "",
  },
];

const FAQCard: FC<FAQCard> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [componentHeight, setComponentHeight] = useState(0);
  const answerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const updateComponentHeight = () => {
      if (!answerRef.current || !headerRef.current) return;

      if (isExpanded) {
        setComponentHeight(
          answerRef.current.scrollHeight + headerRef.current.scrollHeight
        );
      } else {
        setComponentHeight(headerRef.current.scrollHeight);
      }
    };

    updateComponentHeight();

    window.addEventListener("resize", updateComponentHeight);

    return () => {
      window.removeEventListener("resize", updateComponentHeight);
    };
  }, [isExpanded]);

  return (
    <div className={styles.faqCard} data-expanded={isExpanded}>
      <div
        className={styles.faqCardContainer}
        style={{ maxHeight: `${componentHeight}px` }}
      >
        <div className={styles.faqHeader} onClick={handleClick} ref={headerRef}>
          <p>{question}</p>
          {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
        </div>
        <div className={styles.faqBody} ref={answerRef}>
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`section`}>
        <div className={styles.header}>
          <h2 className={`title ${styles.title}`}>
            Frequently Asked Questions
          </h2>
          <p className={styles.description}>
            You will find answers to the questions we get asked the most
          </p>
        </div>
        <div className={styles.faqs}>
          {faqCards.map((o, i) => (
            <FAQCard key={i} {...o} />
          ))}
        </div>
      </div>
    </section>
  );
};
