import { Heart, ShieldCheck, Sparkles, Eye, Infinity as InfinityIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "./Reveal";

const values = [
  { icon: Heart, title: "Love", body: "Every action begins with genuine compassion for the people we serve." },
  { icon: ShieldCheck, title: "Integrity", body: "Honest stewardship of every donation, partnership and promise we make." },
  { icon: Sparkles, title: "Empowerment", body: "We don't give handouts — we build capacity and lasting independence." },
  { icon: Eye, title: "Transparency", body: "Open reporting, traceable funds and community-validated outcomes." },
  { icon: InfinityIcon, title: "Long-lasting Impact", body: "Programs designed for generational change, not seasonal relief." },
];

export function Values() {
  return (
    <section id="values" className="relative bg-secondary/60 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="container-page">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
            <span className="h-px w-8 bg-gold" /> Core Values
          </span>
        </Reveal>
        <Reveal delay={0.5}>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            The principles that guide every life we touch.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" staggerChildren={0.08}>
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
