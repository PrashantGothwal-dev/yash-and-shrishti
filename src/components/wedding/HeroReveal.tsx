import { motion } from "framer-motion";
import { useState } from "react";
import coupleAsset from "@/assets/couple.jpg.asset.json";

export default function HeroReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:pt-32">
      {/* corner ornaments */}
      <Ornament className="pointer-events-none absolute left-2 top-2 h-20 w-20 opacity-70" />
      <Ornament className="pointer-events-none absolute right-2 top-2 h-20 w-20 rotate-90 opacity-70" />

      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.4em] text-royal-gold"
        >
          ✦ Shubh Vivah ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-serif text-3xl leading-tight text-royal-maroon sm:text-5xl"
        >
          With immense joy and love,
          <br /> we invite you to the celebration of the wedding of
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-8 flex items-center justify-center gap-4"
        >
          <span className="font-script text-6xl text-gradient-royal sm:text-7xl">Dr.Yash</span>
          <span className="font-serif text-3xl text-royal-gold">&</span>
          <span className="font-script text-6xl text-gradient-royal sm:text-7xl">Dr.Shrishti</span>
        </motion.div>

        <div className="mx-auto h-px w-24 bg-gold-gradient" />

        <p className="mt-6 font-serif text-lg text-royal-maroon/80">
          22 July 2026 · Milan Resort, Alwar
        </p>

        {/* Scratch / Tap to reveal */}
        <div className="mt-12">
          {!revealed ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setRevealed(true)}
              className="animate-shimmer relative overflow-hidden rounded-full px-10 py-4 font-serif text-lg font-semibold text-royal-maroon shadow-gold gold-border"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.92 0.08 90), oklch(0.75 0.14 85), oklch(0.92 0.08 90))",
              }}
            >
              ✧ Tap to Reveal the Couple ✧
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1 }}
              className="mx-auto mt-4 max-w-md"
            >
              <CoupleIllustration />
              <p className="mt-4 font-script text-3xl text-gradient-royal">Dr.Yash & Dr.Shrishti</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function Ornament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <g fill="none" stroke="oklch(0.75 0.14 85)" strokeWidth="1.5">
        <path d="M5,5 Q40,5 40,40 Q40,60 20,60 Q10,60 10,50 Q10,42 18,42" />
        <circle cx="40" cy="40" r="3" fill="oklch(0.62 0.2 355)" stroke="none" />
        <path d="M5,5 L50,50" />
        <circle cx="5" cy="5" r="2.5" fill="oklch(0.75 0.14 85)" stroke="none" />
      </g>
    </svg>
  );
}

function CoupleIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] shadow-royal gold-border">
      <div className="absolute inset-0" style={{ background: "var(--gradient-pastel)" }} />
      <img
        src={coupleAsset.url}
        alt="Dr. Yash & Dr. Shrishti"
        className="relative h-full w-full object-cover"
      />
      {/* golden arch overlay */}
      <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="goldArch" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.1 90)" />
            <stop offset="100%" stopColor="oklch(0.68 0.16 80)" />
          </linearGradient>
        </defs>
        <path
          d="M20,395 L20,180 Q20,40 200,40 Q380,40 380,180 L380,395"
          fill="none"
          stroke="url(#goldArch)"
          strokeWidth="2.5"
          opacity="0.8"
        />
      </svg>
      {/* petals */}
      <svg viewBox="0 0 400 400" className="pointer-events-none absolute inset-0 h-full w-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i}
            cx={30 + (i * 41) % 340}
            cy={15 + (i * 13) % 40}
            r="3.5"
            fill={i % 2 ? "oklch(0.75 0.14 85)" : "oklch(0.72 0.18 355)"}
            opacity="0.85"
          />
        ))}
      </svg>
    </div>
  );
}
