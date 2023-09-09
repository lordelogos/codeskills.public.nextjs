"use client";

import { FAQCard } from "@/core/types";
import { Minus } from "@ui/icons/minus";
import { Plus } from "@ui/icons/plus";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./faqs.module.css";
import { routes, siteLinks } from "@/core/site-config";

const faqCards: FAQCard[] = [
  {
    question: "How can I join this community?",
    answer: `Becoming a part of our community is a breeze, 
      <a tabindex="-1" href=${routes.joinCommunity}>Click here</a>
     and fill the form to complete the registration process.`,
  },
  {
    question: "Are there any requirements to join the community",
    answer:
      "No, there are no specific requirements to join our community. We welcome individuals of all levels, whether you're a complete beginner or an experienced coder. Our goal is to create an inclusive space where everyone can learn and collaborate.",
  },
  {
    question: "Can I join the community if I'm a beginner in web development",
    answer:
      "Absolutely! Our community is open to beginners in web development. We provide resources and support tailored to individuals at all skill levels. Whether you're just starting your journey or looking to advance your skills, you'll find a supportive environment here.",
  },
  {
    question:
      "Is there a cost to join the community or participate in the sessions",
    answer:
      "No, there is no cost associated with joining our community or participating in any of our sessions. We are committed to providing free access to learning materials, events, and networking opportunities. Our aim is to make coding education and community engagement accessible to everyone.",
  },
  {
    question: "What kind of activities and events are offered in the community",
    answer: `Our community offers a diverse range of activities like Learning tutorials, coding challenges, projects, Interview preparation sessions, webinars, and workshops, networking opportunities, mentorship programs`,
  },
];

const FAQCard: FC<FAQCard & { id: number }> = ({ question, answer, id }) => {
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
    <li className={styles.faqCard} data-expanded={isExpanded}>
      <div
        className={styles.faqCardContainer}
        style={{ maxHeight: `${componentHeight}px` }}
      >
        <div
          className={styles.faqHeader}
          onClick={handleClick}
          ref={headerRef}
          role={"button"}
          aria-expanded={isExpanded}
          aria-controls={`content-${id}`}
        >
          <p>{question}</p>
          {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
        </div>
        <div
          tabIndex={-1}
          className={styles.faqBody}
          ref={answerRef}
          aria-hidden={!isExpanded}
          id={`content-${id}`}
        >
          <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      </div>
    </li>
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
        <ul
          className={styles.faqs}
          aria-label="Codeskills frequently asked questions"
        >
          {faqCards.map((o, i) => (
            <FAQCard key={i} id={i} {...o} />
          ))}
        </ul>
      </div>
    </section>
  );
};
