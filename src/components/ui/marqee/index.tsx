import { FC } from "react";
import Marquee from "react-fast-marquee";
import styles from "./marqee.module.css";

interface MarqeeProps {
  text: string;
}

export const Marqee: FC<MarqeeProps> = ({ text }) => {
  return (
    <Marquee autoFill speed={100} className={styles.marqee}>
      <span className={styles.text}>{text}&nbsp;</span>
    </Marquee>
  );
};
