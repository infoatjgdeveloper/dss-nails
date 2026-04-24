import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — DSS Nails NYC" },
      { name: "description", content: "Book your Russian manicure at DSS Nails in NYC. Call 929-634-2823 or send a message — we respond within hours." },
      { property: "og:title", content: "Contact & Booking — DSS Nails NYC" },
      { property: "og:description", content: "Reach DSS Nails to book your next appointment in New York City." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="font-serif text-4xl font-semibold text-rose-deep md:text-6xl">Get in touch</h1>
          <p className="mt-4 text-muted-foreground">
            We'd love to host you. Reach out to book or ask about a custom design.
          </p>
          <ul className="mt-10 space-y-5 text-foreground">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:9296342823" className="hover:text-primary">929-634-2823</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:hello@dssnails.com" className="hover:text-primary">hello@dssnails.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>New York City, NY</span>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-4 text-rose-deep">
            <a href="#" aria-label="Instagram" className="transition-smooth hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="transition-smooth hover:text-primary"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = "tel:9296342823"; }}
          className="float-3d rounded-3xl bg-blush p-8 shadow-card"
        >
          <h2 className="font-serif text-2xl font-semibold text-rose-deep">Request a booking</h2>
          <div className="mt-6 space-y-4">
            <input required placeholder="Your name" className="w-full rounded-full border border-rose-deep/15 bg-white px-5 py-3 text-sm outline-none focus:border-primary" />
            <input required type="tel" placeholder="Phone number" className="w-full rounded-full border border-rose-deep/15 bg-white px-5 py-3 text-sm outline-none focus:border-primary" />
            <input placeholder="Service of interest" className="w-full rounded-full border border-rose-deep/15 bg-white px-5 py-3 text-sm outline-none focus:border-primary" />
            <textarea rows={4} placeholder="Tell us about your dream nails..." className="w-full rounded-3xl border border-rose-deep/15 bg-white px-5 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary-gradient px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-float transition-smooth hover:scale-[1.02]">
            Send Request
          </button>
        </form>
      </section>
      <SiteFooter />
      <WhatsAppFab />
    </main>
  );
}
