import { SkillsetCardProps } from "@/core/types";
import { FC } from "react";
import styles from "./skillset-card.module.css";

export const SkillsetCard: FC<SkillsetCardProps> = ({
  number,
  title,
  description,
  isActive = false,
  setActive,
}) => {
  const handleHoverState = () => {
    setActive?.();
  };

  return (
    <div
      className={styles.container}
      data-active={isActive}
      onMouseEnter={handleHoverState}
    >
      <p className={styles.number}>{number.toString().padStart(2, "0")}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
