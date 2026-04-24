import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Gallery />
      <Pricing />
      <footer className="border-t border-border bg-blush px-4 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} DSS Nails · NYC · 929-634-2823
      </footer>
      <WhatsAppFab />
    </main>
  );
}
