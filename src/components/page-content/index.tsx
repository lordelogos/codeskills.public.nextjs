"use client";

import { useEffect } from "react";
import { FAQs } from "../faqs";
import { Footer } from "../footer";
import { FuelSuccess } from "../fuel-success";
import { Hero } from "../hero";
import { ShareInsights } from "../share-insights";
import { Skillset } from "../skillset";
import styles from "./page-content.module.css";
import Lenis from "@studio-freight/lenis";

export const PageContent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      orientation: "vertical",
      smoothWheel: true,
      lerp: 0.1,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <FuelSuccess />
      <Skillset />
      <ShareInsights />
      <div className={styles.grid}>
        <FAQs />
        <Footer />
      </div>
    </>
  );
};
