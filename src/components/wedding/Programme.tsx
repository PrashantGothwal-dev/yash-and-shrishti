import { motion } from "framer-motion";

const events = [
  { name: "Chaak", date: "21 July 2026", time: "10:15 AM", venue: "Residence", theme: "from-pink-100 to-rose-50", icon: "🪔" },
  { name: "Ladies Sangeet", date: "21 July 2026", time: "1:15 PM", venue: "Milan Resort, Alwar", theme: "from-purple-100 to-pink-100", icon: "🎶" },
  { name: "Tika-Lagan", date: "21 July 2026", time: "6:15 PM", venue: "Milan Resort, Alwar", theme: "from-amber-100 to-yellow-50", icon: "🌼" },
  { name: "Bhaat", date: "22 July 2026", time: "9:15 AM", venue: "Residence", theme: "from-orange-100 to-amber-50", icon: "🍚" },
  { name: "Haldi", date: "22 July 2026", time: "10:15 AM", venue: "Milan Resort, Alwar", theme: "from-yellow-100 to-amber-100", icon: "🌻" },
  { name: "Departure of Baraat", date: "22 July 2026", time: "6:15 PM", venue: "Milan Resort, Alwar", theme: "from-pink-100 to-fuchsia-100", icon: "🐘" },
  { name: "Wedding Dinner", date: "22 July 2026", time: "8:15 PM", venue: "Milan Resort, Alwar", theme: "from-rose-100 via-amber-50 to-yellow-100", icon: "💍", featured: true },
];

export default function Programme() {
  return (
    <section className="px-5 py-16" style={{ background: "var(--gradient-pastel)" }}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-royal-gold">The Celebrations</p>
          <h2 className="mt-3 font-serif text-3xl text-royal-maroon sm:text-4xl">Programme</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold-gradient" />
        </motion.div>

        {/* Baraat notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl bg-royal-gradient p-5 text-center shadow-royal"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-royal-gold-light">Please Note</p>
          <p className="mt-2 font-serif text-lg text-royal-cream sm:text-xl">
            ✦ Baraat will proceed from <span className="text-royal-gold-light">Ahinsha Circle</span> to the Wedding Venue ✦
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gold-gradient sm:left-1/2" />
          {events.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className={`relative mb-8 grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-2 sm:gap-8 ${
                i % 2 ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Dot */}
              <div className="relative flex sm:hidden">
                <span className="absolute left-6 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gold-gradient ring-4 ring-background" />
              </div>
              <div className={`hidden sm:flex sm:items-center ${i % 2 ? "sm:justify-start sm:pl-8" : "sm:justify-end sm:pr-8"}`}>
                <span className="absolute left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gold-gradient ring-4 ring-background" />
                <div className="text-right sm:text-inherit">
                  <p className="font-script text-3xl text-gradient-royal">{e.icon}</p>
                </div>
              </div>

              <Card e={e} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ e }: { e: typeof events[0] }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br ${e.theme} p-5 shadow-royal gold-border ${
        e.featured ? "ring-2 ring-royal-gold" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-serif text-2xl font-semibold text-royal-maroon">{e.name}</h3>
          <p className="mt-1 text-sm text-royal-maroon/70">{e.date} · {e.time}</p>
        </div>
        <span className="shrink-0 text-3xl">{e.icon}</span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm text-royal-maroon/80">
        <span>📍</span> <span>{e.venue}</span>
      </div>
    </div>
  );
}
