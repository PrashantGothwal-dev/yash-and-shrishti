import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import EntryArch from "@/components/wedding/EntryArch";
import HeroReveal from "@/components/wedding/HeroReveal";
import Countdown from "@/components/wedding/Countdown";
import Programme from "@/components/wedding/Programme";
import FamilyVenue from "@/components/wedding/FamilyVenue";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yash & Shrishti · Wedding Invitation · 22 July 2026" },
      {
        name: "description",
        content:
          "With immense joy, Dr. Yash & Dr. Shrishti invite you to their royal wedding celebration at Milan Resort, Alwar on 22 July 2026.",
      },
      { property: "og:title", content: "Yash & Shrishti · Royal Wedding Invitation" },
      { property: "og:description", content: "Join us at Milan Resort, Alwar · 22 July 2026" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--royal-ivory)" }}>
      <AnimatePresence>
        {!entered && (
          <motion.div key="arch" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <EntryArch onOpen={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroReveal />
          <Countdown />
          <Programme />
          <FamilyVenue />
        </motion.div>
      )}
    </main>
  );
}
