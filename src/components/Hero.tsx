import { useState, useEffect } from "react";
import { Instagram, Facebook, Phone, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroHands from "@/assets/hero-hands.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.16Z" />
    </svg>
  );
}

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { to: "/gallery", label: "Gallery" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient px-4 pb-16 pt-6 md:px-8 md:pt-8">
      {/* Nav */}
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight text-rose-deep md:text-3xl">
          DSS <span className="italic text-primary">Nails</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[15px] font-medium text-rose-deep/80 transition-smooth hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-3 text-rose-deep/60 md:flex">
            <a href="#" aria-label="TikTok" className="transition-smooth hover:text-primary"><TikTokIcon className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="transition-smooth hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="transition-smooth hover:text-primary"><Facebook className="h-5 w-5" /></a>
          </div>
          <a href="tel:9296342823" className="hidden items-center gap-2 rounded-full border border-rose-deep/10 bg-white/40 px-5 py-2.5 text-sm font-medium text-rose-deep backdrop-blur transition-smooth hover:bg-white sm:inline-flex">
            <Phone className="h-4 w-4" /> Call
          </a>
          <Link to="/contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-rose-deep shadow-soft transition-smooth hover:shadow-float sm:inline-flex">
            Book Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-rose-deep transition-smooth hover:bg-white lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-blush/95 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 pt-20">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`text-4xl font-serif font-semibold text-rose-deep transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Home
          </Link>
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${(i + 1) * 50}ms` }}
              className={`text-3xl font-serif font-medium text-rose-deep transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {l.label}
            </Link>
          ))}
          
          <div className={`mt-8 flex items-center gap-6 text-rose-deep transition-all duration-500 delay-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
            <a href="#" className="hover:text-primary"><Instagram className="h-7 w-7" /></a>
            <a href="#" className="hover:text-primary"><TikTokIcon className="h-7 w-7" /></a>
            <a href="#" className="hover:text-primary"><Facebook className="h-7 w-7" /></a>
          </div>

          <div className={`mt-12 w-full px-10 transition-all duration-500 delay-400 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-primary py-4 text-lg font-semibold text-white shadow-float"
            >
              Book My Session
            </Link>
          </div>
        </div>
      </div>

      {/* Hero card */}
      <div className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-[2.5rem] shadow-float md:mt-16">
        <img
          src={heroHands}
          alt="Elegant hands with French-tip Russian manicure holding white peonies"
          width={1080}
          height={1600}
          className="h-[70vh] min-h-[520px] w-full object-cover md:h-[80vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center text-white md:px-16 md:pb-16">
          <p className="mb-3 font-serif text-base italic tracking-wide opacity-90 md:text-lg animate-fade-up">
            In Loving Hands We Trust
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Russian Manicure<br />in NYC
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed opacity-95 md:text-base animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transform your nails into masterpieces at DSS Nails. Embrace finesse and sophistication with our exceptional services.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#book"
              className="float-3d inline-flex items-center justify-center rounded-full bg-primary-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-float"
            >
              Book Your Session
            </a>
            <a
              href="tel:9296342823"
              className="float-3d inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-smooth hover:bg-white hover:text-rose-deep"
            >
              <Phone className="h-4 w-4" /> 929-634-2823
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}