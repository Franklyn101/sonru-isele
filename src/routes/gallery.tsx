import { createFileRoute, Link } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { PageHeader } from "@/components/site/PageHeader";
import headerImg from "../../public/assets/gallery-3.jpg";
import { ArrowRight, Heart } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SONRU ISELE Charity Foundation" },
      { name: "description", content: "Photographs from the field: outreach programs, youth empowerment and community development across Nigeria." },
      { property: "og:title", content: "Gallery — SONRU ISELE Charity Foundation" },
      { property: "og:description", content: "Photographs from outreach and community programs across Nigeria." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        crumb="Gallery"
        eyebrow="In Pictures"
        title="Moments from"
        highlight="the field."
        description="A growing archive of the people, partners and places that make this work possible."
        image={headerImg}
        imageAlt="Children laughing during a SONRU ISELE outreach program"
      />

      <Gallery />

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold">
            Help us capture the next chapter.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] hover:scale-[1.03] transition">
              <Heart className="h-4 w-4" /> Donate
            </Link>
            <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              Volunteer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
