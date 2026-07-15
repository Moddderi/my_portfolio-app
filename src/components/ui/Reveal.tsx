import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
};

const getOffset = (direction: RevealProps["direction"]) => {
  switch (direction) {
    case "up":
      return { y: 36, x: 0 };
    case "down":
      return { y: -24, x: 0 };
    case "left":
      return { x: 40, y: 0 };
    case "right":
      return { x: -40, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
  once = true,
}: RevealProps) => {
  const offset = getOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: "0px 0px -40px 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
};

export const Stagger = ({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
}: StaggerProps) => {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);
