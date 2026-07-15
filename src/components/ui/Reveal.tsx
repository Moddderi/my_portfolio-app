import { motion, type Transition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Soft cinematic ease — decelerates smoothly, no bounce */
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const revealTransition = (
  duration: number,
  delay: number,
): Transition => ({
  duration,
  delay,
  ease: easeOutExpo,
  opacity: {
    duration: duration * 0.75,
    delay,
    ease: [0.4, 0, 0.2, 1],
  },
});

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
      return { y: 48 };
    case "down":
      return { y: -32 };
    case "left":
      return { x: 48 };
    case "right":
      return { x: -48 };
    default:
      return {};
  }
};

export const Reveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.9,
  once = true,
}: RevealProps) => {
  const offset = getOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      ...offset,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: revealTransition(duration, delay),
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15, margin: "0px 0px -8% 0px" }}
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
  stagger = 0.12,
  delay = 0.05,
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
      viewport={{ once, amount: 0.12, margin: "0px 0px -6% 0px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: revealTransition(0.85, 0),
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
