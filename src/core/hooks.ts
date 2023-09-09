import { useState, useEffect, useCallback, useMemo } from "react";
import { ConfigOptions, Fn, Handler, KeyboardKey, ModalActions } from "./types";

export function useMediaQuery() {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop" | null>(
    null
  );
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initial detection
    checkDevice();

    // Listener for windows resize
    window.addEventListener("resize", checkDevice);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}

const MODAL_DURATION = 280;

function sleep(timeInMs = 0) {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

export function useModalUtils(
  initialOpen = false,
  onOpen?: Fn,
  animationDuration = MODAL_DURATION
): ModalActions {
  const [visible, setVisible] = useState(initialOpen);

  const handleOpen = useCallback(() => {
    setVisible(true);
    onOpen?.();
  }, [onOpen]);

  const handleClose = useCallback(async () => {
    setVisible(false);
    await sleep(animationDuration);
    return Promise.resolve();
  }, [animationDuration]);

  const handleToggle = useCallback(() => {
    setVisible((o) => !o);
  }, []);

  const actions: ModalActions = useMemo(
    () => ({
      visible,
      open: handleOpen,
      close: handleClose,
      toggle: handleToggle,
    }),
    [handleClose, handleOpen, handleToggle, visible]
  );

  return actions;
}

export const useKey = (
  keyOrKeys: KeyboardKey | Array<KeyboardKey>,
  handler: Handler,
  options?: ConfigOptions
) => {
  useEffect(() => {
    const keys = (Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys]).map((o) =>
      o.toLowerCase()
    );
    const evt = options?.event ?? "keyup";

    const eventHandler = (e: KeyboardEvent) => {
      if (!keys.includes(e.key.toLowerCase())) return;

      handler(e);
    };

    document.addEventListener(evt, eventHandler);

    return () => {
      document.removeEventListener(evt, eventHandler);
    };
  }, [handler, keyOrKeys, options?.event]);
};
