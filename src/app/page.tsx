import Link from "@/components/link";
import styles from "./page.module.css";
import { ArrowLink } from "@/components/icons/arrow-link";
import { CardMobile } from "@/components/card/mobile";
import { Pen } from "@/components/icons/pen";
import education from "@static/education.jpg";
import { CardDesktop } from "@/components/card/desktop";

export default function Home() {
  return (
    <main className={styles.body}>
      <Link href="#">
        <span>Hello world</span>
        <ArrowLink />
      </Link>
      <Link href="#" variant="accent">
        <span>Hello world</span>
        <ArrowLink />
      </Link>
      <CardMobile
        state="closed"
        icon={Pen}
        title="Education"
        img={education}
        imgAlt="Education training at Codeskills"
        description={
          "Master Web Development with Codeskills: Access tutorials, workshops, and resources to enhance your skills."
        }
      />
      <CardDesktop
        icon={Pen}
        title="Education"
        img={education}
        imgAlt="Education training at Codeskills"
        description={
          "Master Web Development with Codeskills: Access tutorials, workshops, and resources to enhance your skills."
        }
      />
    </main>
  );
}
