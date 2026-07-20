import { createFileRoute, Link } from "@tanstack/react-router";
import { Values } from "@/components/site/Values";
import { PageHeader } from "@/components/site/PageHeader";
import headerImg from "../../public/assets/avatar-2.jpg";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/value")({
  head: () => ({
    meta: [
      { title: "Core Values — SONRU ISELE Charity Foundation" },
      { name: "description", content: "The principles that guide every program, partnership and gift at SONRU ISELE Charity Foundation: love, integrity, empowerment, transparency and lasting impact." },
      { property: "og:title", content: "Core Values — SONRU ISELE Charity Foundation" },
      { property: "og:description", content: "Love, integrity, empowerment, transparency and lasting impact." },
      { property: "og:url", content: "/values" },
    ],
    links: [{ rel: "canonical", href: "/values" }],
  }),
  component: ValuesPage,
});

function ValuesPage() {
  return (
    <>
      <PageHeader
        crumb="Values"
        eyebrow="Core Values"
        title="The principles that"
        highlight="guide every life we touch."
        description="Five non-negotiable commitments that shape how we serve, partner and steward every gift."
        image={headerImg}
        imageAlt="A SONRU ISELE team member sharing a tender moment with a community elder"
      />

      <Values />

      <section className="bg-background py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/80">
              <span className="h-px w-8 bg-gold" /> Our promise
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <figure className="mt-8 rounded-3xl border border-border bg-secondary/60 p-8 sm:p-12">
              <Quote className="h-10 w-10 text-gold" aria-hidden />
              <blockquote className="mt-5 font-display text-2xl sm:text-3xl italic leading-relaxed text-foreground/90">
                "We measure ourselves not by what we raise, but by who we lift. Every naira, every
                hour, every promise — held to that single standard."
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                — Board of Trustees, SONRU ISELE Charity Foundation
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold">
            Values you can stand with. Action you can take today.
          </h2>
          <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
            Get Involved <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
