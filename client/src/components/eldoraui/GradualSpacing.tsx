import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface GradualSpacingProps {
  text?: string;
  className?: string;
  startDelay?: number; // in seconds
}

export const GradualSpacing: React.FC<GradualSpacingProps> = ({
  text = "",
  className = "",
  startDelay = 0,
}) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Split text into lines by '\n'
  const lines = text.split("\n");
  const perCharDelay = 0.1;

  return (
    <h1
      className={clsx(
        "text-left font-display font-bold drop-shadow-sm text-black",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        "whitespace-normal break-words w-full",
        className
      )}
      style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
    >
      <AnimatePresence>
        {lines.map((line, lineIdx) => (
          <React.Fragment key={lineIdx}>
            {line.split("").map((char, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={gradual}
                transition={{ duration: 0.5, delay: startDelay + i * perCharDelay + lineIdx * line.length * perCharDelay }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {lineIdx !== lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </h1>
  );
}; 