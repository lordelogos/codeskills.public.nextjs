import { BrandIcon } from "@/components/ui/brand-icon";
import styles from "./join-community.module.css";
import Image from "next/image";
import joinCommunityImg from "@static/join-community.jpg";
import { JoinCommunityForm } from "@/components/join-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Codeskills",
};

const JoinCommunity = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.branding}>
        <Image
          src={joinCommunityImg}
          alt="Join the codeskills community"
          className={styles.img}
        />
        <BrandIcon />
        <h1 className="title">
          Unlock the secrets of <span>web development</span>
        </h1>
      </div>
      <div className={styles.form}>
        <Image
          priority={false}
          src={joinCommunityImg}
          alt="Join the codeskills community"
          className={styles.img}
        />
        <JoinCommunityForm />
      </div>
    </section>
  );
};

export default JoinCommunity;
