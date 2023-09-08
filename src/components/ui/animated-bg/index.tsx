import styles from "./animated-bg.module.css";

export const AnimatedBg = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.gradientDiv} ${styles.div1}`}></div>
      <div className={`${styles.gradientDiv} ${styles.div2}`}></div>
      <div className={`${styles.gradientDiv} ${styles.div3}`}></div>
    </div>
  );
};
