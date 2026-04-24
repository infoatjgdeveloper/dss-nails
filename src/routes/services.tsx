import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/Pricing";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — DSS Nails NYC" },
      { name: "description", content: "Russian gel manicures, hard gel, classic manicures and luxury pedicures. Explore DSS Nails service packages and pricing in NYC." },
      { property: "og:title", content: "Services & Pricing — DSS Nails NYC" },
      { property: "og:description", content: "Curated nail care services designed by master technicians for every occasion." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="px-4 pt-12 text-center md:pt-16">
        <h1 className="font-serif text-4xl font-semibold text-rose-deep md:text-6xl">Our Services</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          Precision Russian manicures, gel artistry and luxury pedicures — crafted with care.
        </p>
      </div>
      <Pricing />
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
