import { PageContent } from "@/components/page-content";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageContent />
    </main>
  );
}
