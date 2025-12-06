"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Golden-ish moving light on each edge
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(252,211,77,0.9) 0%, rgba(252,211,77,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(252,211,77,0.9) 0%, rgba(252,211,77,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, rgba(252,211,77,0.9) 0%, rgba(252,211,77,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, rgba(252,211,77,0.9) 0%, rgba(252,211,77,0) 100%)",
  };

  // Central golden highlight when hovered
  const highlight =
    "radial-gradient(75% 181% at 50% 50%, rgba(252,211,77,1) 0%, rgba(252,211,77,0) 60%, rgba(252,211,77,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={(_event: React.MouseEvent<HTMLElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        // outer container with “border thickness” given by p-px
        "relative inline-flex w-fit items-center justify-center overflow-visible rounded-md border border-yellow-400/60 bg-transparent p-px transition duration-500",
        containerClassName,
      )}
      {...props}
    >
      {/* INNER CONTENT WRAPPER – YOU CONTROL BG/TEXT WITH `className` */}
      <div
        className={cn(
          "relative z-10 rounded-[inherit]",
          className,
        )}
      >
        {children}
      </div>

      {/* MOVING GOLDEN BORDER LIGHT */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
    </Tag>
  );
}
