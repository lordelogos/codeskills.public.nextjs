import Link from "@/components/link";
import styles from "./page.module.css";
import { ArrowLink } from "@/components/icons/arrow-link";

export default function Home() {
  return (
    <main className={styles.body}>
      <Link href="#">
        <span>Hello world</span>
        <ArrowLink size={16} />
      </Link>
      <Link href="#" variant="accent">
        <span>Hello world</span>
        <ArrowLink size={16} />
      </Link>
    </main>
  );
}
