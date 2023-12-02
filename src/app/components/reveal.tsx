import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Show = ({ children, width = "100%" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const secondaryControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      secondaryControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
      <motion.div
      className="showBg"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--first-color) !important",
          zIndex: 100,
        }}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={secondaryControl}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
      </motion.div>
    </div>
  );
};
