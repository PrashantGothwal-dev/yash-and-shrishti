import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-07-22T10:15:00+05:30").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(d / 86400000),
    h: Math.floor((d / 3600000) % 24),
    m: Math.floor((d / 60000) % 60),
    s: Math.floor((d / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const blocks = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Minutes", value: t.m },
    { label: "Seconds", value: t.s },
  ];

  return (
    <section className="px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-royal-gold">Counting the moments</p>
        <h2 className="mt-3 font-serif text-3xl text-royal-maroon sm:text-4xl">Until we say "I do"</h2>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6">
          {blocks.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center rounded-3xl bg-card p-3 shadow-royal gold-border sm:p-6"
            >
              <span
                className="font-serif text-3xl font-bold text-gradient-royal tabular-nums sm:text-5xl"
              >
                {String(b.value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-royal-maroon/70 sm:text-xs">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
