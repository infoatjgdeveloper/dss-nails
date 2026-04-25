import { createFileRoute } from "@tanstack/react-router";
import { ServiceMenu } from "@/components/ServiceMenu";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — DSS Nails NYC" },
      { name: "description", content: "Explore our full menu of nail care services, from classic manicures to luxury volcanic spa pedicures at DSS Nails NYC." },
      { property: "og:title", content: "Services & Pricing — DSS Nails NYC" },
      { property: "og:description", content: "Check out our latest price list for manicures, pedicures, gel colors, and premium spa treatments." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="px-4 pt-12 text-center md:pt-16">
        <h1 className="font-serif text-4xl font-semibold text-rose-deep md:text-6xl animate-fade-up">Price List</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Relax and rejuvenate with our full suite of luxury nail care and beauty services.
        </p>
      </div>
      <ServiceMenu />
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
