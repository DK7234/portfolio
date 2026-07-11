"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
};

const directionValues = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 28,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = directionValues[direction];

  const initialPosition = {
    x:
      offset.x === 0
        ? 0
        : offset.x > 0
          ? distance
          : -distance,
    y:
      offset.y === 0
        ? 0
        : offset.y > 0
          ? distance
          : -distance,
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}