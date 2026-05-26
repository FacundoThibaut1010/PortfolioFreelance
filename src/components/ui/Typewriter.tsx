import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Typewriter = ({
  text,
  delay = 0,
  speed = 40,
  showCursor = false,
  trigger = true,
}: {
  text: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
  trigger?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [prevText, setPrevText] = useState(text);

  // reset when language switches
  useEffect(() => {
    if (text !== prevText) {
      setDisplayedText(text);
      setPrevText(text);
    }
  }, [text, prevText]);

  // start delay only when trigger is true
  useEffect(() => {
    if (!trigger) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay, trigger]);

  useEffect(() => {
    if (!started || displayedText.length >= text.length) return;
    const nextChar = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);
    return () => clearTimeout(nextChar);
  }, [displayedText, started, text, speed]);

  return (
    <>
      {displayedText}
      {showCursor && started && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" as any }}
          className="inline-block w-2 h-5 bg-orange-500 ml-1 translate-y-1"
        />
      )}
    </>
  );
};
