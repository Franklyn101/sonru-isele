import { createFileRoute, Link } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { PageHeader } from "@/components/site/PageHeader";
import headerImg from "../../public/assets/hero-community.jpg";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Calendar, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SONRU ISELE Charity Foundation" },
      { name: "description", content: "Learn the story, leadership and journey of SONRU ISELE Charity Foundation — a Nigerian humanitarian organization advancing inclusive human development." },
      { property: "og:title", content: "About — SONRU ISELE Charity Foundation" },
      { property: "og:description", content: "The story, leadership and journey of a Nigerian humanitarian foundation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2013", title: "Founded in Delta State", body: "Began as a family-led initiative supporting one village clinic." },
  { year: "2016", title: "First scholarship cohort", body: "120 secondary-school students placed and fully sponsored." },
  { year: "2019", title: "Statewide expansion", body: "Programs scaled across six Nigerian states." },
  { year: "2022", title: "Healthcare partnership", body: "Joined Lagos and Enugu hospital networks for outreach." },
  { year: "2025", title: "24,500+ lives impacted", body: "Now serving communities across Nigeria with four pillars." },
];

const facts = [
  { icon: MapPin, label: "Based in", value: "Lagos, Nigeria" },
  { icon: Users, label: "Team & volunteers", value: "180+" },
  { icon: Calendar, label: "Founded", value: "2013" },
  { icon: Award, label: "Active programs", value: "12" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Who We Are"
        title="A movement of"
        highlight="quiet, daily compassion."
        description="SONRU ISELE Charity Foundation began with a simple idea: that lifting one neighbor lifts a whole community. A decade later, that idea has become a Nigerian humanitarian movement."
        image={headerImg}
        imageAlt="SONRU ISELE volunteers gathered with community members in Nigeria"
      />

      <About />

      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> At a glance
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              The foundation, in numbers.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <motion.div key={f.label} variants={itemVariants} className="rounded-3xl border border-border bg-card p-6 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">{f.label}</div>
                <div className="mt-1 font-display text-2xl font-semibold text-foreground">{f.value}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Our journey
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mt-5 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
              From one village to a nationwide mission.
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
            <ol className="space-y-10">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative grid sm:grid-cols-2 sm:gap-12 ${i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""}`}
                >
                  <div className="pl-12 sm:pl-0 sm:pr-12 sm:text-right">
                    <div className="font-display text-3xl font-semibold text-gradient-gold">{m.year}</div>
                  </div>
                  <div className="pl-12 sm:pl-12">
                    <h3 className="text-xl font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground">{m.body}</p>
                  </div>
                  <span className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" aria-hidden />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold">
            Want to learn how we work, and where every gift goes?
          </h2>
          <Link to="/impact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
            See our impact <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
