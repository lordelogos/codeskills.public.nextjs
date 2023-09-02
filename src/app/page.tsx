import { Link } from "@ui/link";
import { ArrowLink } from "@ui/icons/arrow-link";
import styles from "./page.module.css";
import { FuelSuccess } from "@/components/fuel-success";

export default function Home() {
  return (
    <main className={styles.body}>
      <br />
      <br />
      <br />
      {/* <Link href="#">
        <span>Hello world</span>
        <ArrowLink />
      </Link>
      <Link href="#" variant="accent">
        <span>Hello world</span>
        <ArrowLink />
      </Link> */}
      <FuelSuccess />
      <br />
      <br />
      <br />
    </main>
  );
}
