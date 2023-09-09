import { routes } from "@/core/site-config";
import DoubleTickIcon from "@static/doodles/double-tick.svg";
import Image from "next/image";
import { Modal } from "../modal";
import { Link } from "../link";
import { X } from "../icons/x";
import styles from "./join-success.module.css";
import { Fn } from "@/core/types";
import { FC } from "react";

interface JoinSuccessModalProps {
  visible: boolean;
  toggleVisibility: Fn;
}

export const JoinSuccessModal: FC<JoinSuccessModalProps> = ({
  visible,
  toggleVisibility,
}) => {
  return (
    <Modal visible={visible} toggleVisibility={toggleVisibility}>
      <div className={styles.container}>
        <Image
          src={DoubleTickIcon}
          alt="codeskills community successful join icon"
          className={styles.img}
        />
        <h2>Successful</h2>
        <p>
          Your registration form was submitted successfully, you will receive a
          email from us.
        </p>
        <Link href={routes.home} variant="accent" className={styles.cta}>
          <span>Go Home</span>
        </Link>
        <button
          tabIndex={1}
          className={styles.closeBtn}
          onClick={toggleVisibility}
        >
          <X className={styles.icon} />
        </button>
      </div>
    </Modal>
  );
};
