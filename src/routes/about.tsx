import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DSS Nails NYC" },
      { name: "description", content: "Meet DSS Nails — a NYC studio dedicated to Russian manicure artistry, hygiene, and timeless elegance." },
      { property: "og:title", content: "About — DSS Nails NYC" },
      { property: "og:description", content: "A NYC studio dedicated to Russian manicure artistry and timeless elegance." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="font-serif italic text-primary">In Loving Hands We Trust</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-rose-deep md:text-6xl">
          Crafted with care, finished with finesse
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            DSS Nails is a boutique nail studio in the heart of New York City, specializing in the
            celebrated Russian manicure technique. Our master technicians blend Old-World precision
            with modern artistry to deliver flawless, long-lasting results.
          </p>
          <p>
            Every appointment is a moment to slow down. From sterilized e-file tools to premium gels
            and hand-mixed colors, every detail is chosen so that your hands feel as cared for as
            they look.
          </p>
          <p>
            Whether you're after a sculpted natural look, an editorial accent, or a timeless French —
            we tailor each service to your shape, lifestyle, and story.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { k: "10+", v: "Years of artistry" },
            { k: "100%", v: "Sterilized tools" },
            { k: "5★", v: "Client experience" },
          ].map((s) => (
            <div key={s.v} className="float-3d rounded-3xl bg-blush p-6 text-center shadow-card">
              <div className="font-serif text-4xl font-semibold text-rose-deep">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
