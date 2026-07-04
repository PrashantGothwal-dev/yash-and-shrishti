import { motion } from "framer-motion";

export default function FamilyVenue() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-royal-gold">With Blessings Of</p>
          <h2 className="mt-3 font-serif text-3xl text-royal-maroon sm:text-4xl">The Families</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gold-gradient" />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <FamilyCard
            title="Groom's Family"
            name="Dr. Yash"
            details={[
              "Grand S/o Smt. Teej Kaur",
              "& Lt. Sh. Chiranji Lal Arya",
            ]}
          />
          <FamilyCard
            title="Bride's Family"
            name="Dr. Shrishti"
            details={[
              "Grand D/o Lt. Smt. Shanti Devi",
              "& Late Sh. Mahesh Chand Agarwal",
              "D/o Smt. Poonam",
              "& Late Sh. Manoj Kumar Agarwal",
              "R/o Firozabad (U.P.)",
            ]}
          />
        </div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-royal-gold">Find Us Here</p>
            <h2 className="mt-3 font-serif text-3xl text-royal-maroon sm:text-4xl">The Venue</h2>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl bg-card shadow-royal gold-border">
            <div className="p-6 text-center">
              <h3 className="font-serif text-2xl text-royal-maroon">Milan Resort</h3>
              <p className="mt-1 text-sm text-royal-maroon/70">Alwar, Rajasthan</p>
            </div>
            <div className="relative h-64 w-full">
              <iframe
                title="Milan Resort Alwar map"
                src="https://www.google.com/maps?q=Milan+Resort+Alwar+Rajasthan&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Milan+Resort+Alwar+Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full bg-royal-gradient px-6 py-3 text-center font-serif text-lg font-semibold text-royal-cream shadow-gold transition hover:opacity-95"
              >
                ✦ Get Directions ✦
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto h-px w-24 bg-gold-gradient" />
          <p className="mt-6 font-script text-4xl text-gradient-royal">Yash & Shrishti</p>
          <p className="mt-2 font-serif italic text-royal-maroon/70">
            Request the pleasure of your company · 22 July 2026
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-royal-gold">✦ With love & blessings ✦</p>
        </motion.div>
      </div>
    </section>
  );
}

function FamilyCard({ title, name, details }: { title: string; name: string; details: string[] }) {
  return (
    <div className="rounded-3xl bg-card p-6 text-center shadow-royal gold-border">
      <p className="text-[11px] uppercase tracking-[0.3em] text-royal-gold">{title}</p>
      <h3 className="mt-3 font-script text-4xl text-gradient-royal">{name}</h3>
      <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
      <div className="mt-4 space-y-1 font-serif text-royal-maroon/80">
        {details.map((d) => (
          <p key={d}>{d}</p>
        ))}
      </div>
    </div>
  );
}
