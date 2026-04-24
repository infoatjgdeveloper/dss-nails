import { Sparkles } from "lucide-react";
import { use3dTilt } from "@/hooks/use-3d-tilt";
import pkg1 from "@/assets/pkg-1.jpg";
import pkg2 from "@/assets/pkg-2.jpg";
import pkg3 from "@/assets/pkg-3.jpg";
import pkg4 from "@/assets/pkg-4.jpg";

const packages = [
  { title: "Classic Manicure", desc: "Shape, cuticle care & polish for everyday elegance.", price: "$45", img: pkg1, popular: false },
  { title: "Hard Gel Manicure", desc: "Long-lasting strength with a flawless glossy finish.", price: "$100", img: pkg2, popular: true },
  { title: "Russian Gel Manicure", desc: "Precision Russian technique for clean, sculpted nails.", price: "$120", img: pkg3, popular: false },
  { title: "Luxury Pedicure", desc: "Spa-grade pedicure with massage & finishing polish.", price: "$75", img: pkg4, popular: false },
];

function PricingCard({ p }: { p: (typeof packages)[0] }) {
  const tilt = use3dTilt({ max: 10, perspective: 1000, scale: 1.05 });
  
  return (
    <article
      className={`float-3d group relative flex flex-col overflow-hidden rounded-3xl will-change-transform ${
        p.popular
          ? "bg-blush ring-1 ring-primary/20 shadow-float lg:-my-4 lg:scale-105"
          : "bg-white shadow-card"
      }`}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
    >
      {p.popular && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-rose-deep px-3 py-1 text-xs font-medium text-white">
          Popular
        </span>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-smooth group-hover:scale-110"
        />
        {/* Card Overlay Sparkle */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Sparkles className="absolute left-6 top-6 h-5 w-5 text-white/50" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-serif text-xl font-semibold ${p.popular ? "text-rose-deep" : "text-foreground"}`}>
          {p.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
        <div className="mt-5 flex items-baseline justify-between">
          <span className="font-serif text-3xl font-semibold text-rose-deep">{p.price}</span>
          <a
            href="https://wa.me/13312037251?text=Can%20i%20get%20More%20Infor%20about%20my%20session"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-smooth ${
              p.popular
                ? "bg-primary-gradient text-primary-foreground shadow-soft hover:shadow-float"
                : "border border-rose-deep/20 text-rose-deep hover:bg-blush"
            }`}
          >
            Book
          </a>
        </div>
      </div>
    </article>
  );
}

export function Pricing() {
  return (
    <section id="book" className="relative bg-background px-4 py-20 md:py-28 overflow-hidden">
      {/* Decorative Parallax Circles */}
      <div className="pointer-events-none absolute -right-[5%] top-[10%] h-64 w-64 animate-gentle-float rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-[5%] bottom-[10%] h-80 w-80 animate-gentle-float rounded-full bg-rose-deep/5 blur-3xl" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-4xl font-semibold text-rose-deep md:text-5xl">
          Choose Your Nail Care Package
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground md:text-base">
          Curated services designed by our master technicians for every occasion.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <PricingCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}