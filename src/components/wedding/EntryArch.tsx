import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onOpen: () => void;
}

export default function EntryArch({ onOpen }: Props) {
  const [opening, setOpening] = useState(false);

  const trigger = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1800);
  };

  useEffect(() => {
    const t = setTimeout(() => trigger(), 4000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={trigger}
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-pastel)" }}
    >
      {/* Falling petals */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute h-3 w-3 rounded-full"
          style={{
            left: `${(i * 97) % 100}%`,
            top: `-5%`,
            background: i % 2 ? "var(--royal-pink)" : "var(--royal-gold)",
            opacity: 0.7,
            animation: `float-petal ${8 + (i % 6)}s linear ${i * 0.4}s infinite`,
          }}
        />
      ))}

      {/* Arch */}
      <div className="relative flex h-[85vh] w-[95vw] max-w-[520px] items-end justify-center">
        {/* Arch backdrop */}
        <svg
          viewBox="0 0 400 600"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.18 355)" />
              <stop offset="100%" stopColor="oklch(0.42 0.16 10)" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.9 0.1 90)" />
              <stop offset="100%" stopColor="oklch(0.62 0.16 75)" />
            </linearGradient>
          </defs>
          {/* Outer arch */}
          <path
            d="M40,600 L40,240 Q40,40 200,40 Q360,40 360,240 L360,600 Z"
            fill="url(#pinkGrad)"
          />
          {/* Gold trim */}
          <path
            d="M60,600 L60,245 Q60,60 200,60 Q340,60 340,245 L340,600"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="3"
          />
          {/* Inner arch cutout indicator */}
          <path
            d="M90,600 L90,260 Q90,110 200,110 Q310,110 310,260 L310,600 Z"
            fill="oklch(0.97 0.02 80)"
          />
          {/* Decorative dots */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = Math.PI + (i / 13) * Math.PI;
            const cx = 200 + Math.cos(angle) * 130;
            const cy = 245 + Math.sin(angle) * 130;
            return <circle key={i} cx={cx} cy={cy} r="4" fill="url(#goldGrad)" />;
          })}
          {/* Toran hanging */}
          {Array.from({ length: 9 }).map((_, i) => (
            <g key={i}>
              <line
                x1={110 + i * 22.5}
                y1={110}
                x2={110 + i * 22.5}
                y2={135 + (i % 2) * 10}
                stroke="oklch(0.62 0.16 75)"
                strokeWidth="1.5"
              />
              <circle
                cx={110 + i * 22.5}
                cy={140 + (i % 2) * 10}
                r="5"
                fill={i % 2 ? "oklch(0.62 0.2 355)" : "oklch(0.82 0.14 85)"}
              />
            </g>
          ))}
        </svg>

        {/* Doors */}
        <motion.div
          initial={{ x: 0 }}
          animate={opening ? { x: "-110%", rotateY: -15 } : {}}
          transition={{ duration: 1.6, ease: [0.7, 0, 0.3, 1] }}
          className="absolute left-[calc(50%-110px)] bottom-0 h-[490px] w-[110px] origin-left overflow-hidden rounded-tl-[110px]"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.35 0.14 10), oklch(0.55 0.18 355))",
            boxShadow: "inset -10px 0 30px oklch(0.2 0.1 15 / 0.6)",
          }}
        >
          <div className="absolute inset-3 rounded-tl-[100px] border-2" style={{ borderColor: "oklch(0.82 0.14 85 / 0.6)" }} />
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-gradient shadow-gold" />
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={opening ? { x: "110%", rotateY: 15 } : {}}
          transition={{ duration: 1.6, ease: [0.7, 0, 0.3, 1] }}
          className="absolute left-1/2 bottom-0 h-[490px] w-[110px] origin-right overflow-hidden rounded-tr-[110px]"
          style={{
            background:
              "linear-gradient(270deg, oklch(0.35 0.14 10), oklch(0.55 0.18 355))",
            boxShadow: "inset 10px 0 30px oklch(0.2 0.1 15 / 0.6)",
          }}
        >
          <div className="absolute inset-3 rounded-tr-[100px] border-2" style={{ borderColor: "oklch(0.82 0.14 85 / 0.6)" }} />
        </motion.div>

        {/* Monogram behind doors */}
        <AnimatePresence>
          {opening && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <div className="grid h-32 w-32 place-items-center rounded-full bg-gold-gradient shadow-gold">
                <span className="font-script text-6xl text-royal-maroon">YS</span>
              </div>
              <p className="mt-3 font-serif text-lg italic text-royal-maroon">Dr.Yash & Dr.Shrishti</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tap prompt */}
      {!opening && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center px-6 text-center"
        >
          <motion.p
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="font-serif text-2xl font-semibold text-royal-maroon sm:text-3xl"
          >
            ✦ Tap to Open the Card ✦
          </motion.p>
          <p className="mt-2 text-sm text-royal-maroon/70">A royal invitation awaits</p>
        </motion.div>
      )}
    </div>
  );
}
