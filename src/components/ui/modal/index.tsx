import { FC, ReactNode } from "react";
import styles from "./modal.module.css";
import { Fn } from "@/core/types";
import { useKey } from "@/core/hooks";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  visible: boolean;
  toggleVisibility: Fn;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  visible,
  toggleVisibility,
  children,
}) => {
  useKey("Escape", () => {
    if (visible) {
      toggleVisibility();
    }
  });

  return (
    <Dialog.Root open={visible} onOpenChange={toggleVisibility}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
