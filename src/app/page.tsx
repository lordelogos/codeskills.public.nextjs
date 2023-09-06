import { FAQs } from "@/components/faqs";
import styles from "./page.module.css";
import { FuelSuccess } from "@/components/fuel-success";
import { ShareInsights } from "@/components/share-insights";
import { Skillset } from "@/components/skillset";
import React from "react";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.body}>
      <FuelSuccess />
      <Skillset />
      <ShareInsights />
      <FAQs />
      <Footer />
    </main>
  );
}
