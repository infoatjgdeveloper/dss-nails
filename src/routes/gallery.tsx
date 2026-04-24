import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — DSS Nails NYC" },
      { name: "description", content: "Browse our gallery of Russian manicures, French tips, ombre and nail art crafted by DSS Nails technicians in NYC." },
      { property: "og:title", content: "Gallery — DSS Nails NYC" },
      { property: "og:description", content: "See the artistry of our skilled nail technicians at DSS Nails." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Gallery showGrid={true} />
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
