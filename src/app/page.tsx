import styles from "./page.module.css";
import { FuelSuccess } from "@/components/fuel-success";
import { Skillset } from "@/components/skillset";

export default function Home() {
  return (
    <main className={styles.body}>
      <FuelSuccess />
      <Skillset />
    </main>
  );
}
