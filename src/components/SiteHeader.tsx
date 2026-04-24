import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useRouterState();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent && !isOpen
          ? "bg-transparent py-6 md:py-8"
          : "bg-blush/80 py-4 backdrop-blur-md shadow-sm"
      } px-4 md:px-8`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="relative z-50 font-serif text-2xl font-semibold tracking-tight text-rose-deep md:text-3xl"
        >
          DSS <span className="italic text-primary">Nails</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="text-[15px] font-medium text-rose-deep/80 transition-smooth hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:9296342823"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-rose-deep shadow-soft transition-smooth hover:shadow-float lg:px-5 lg:py-2.5"
          >
            <Phone className="h-4 w-4" /> 
            <span className="hidden sm:inline">929-634-2823</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-rose-deep transition-smooth hover:bg-white lg:hidden"
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
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`text-3xl font-serif font-medium text-rose-deep transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              activeProps={{ className: "text-primary !opacity-100" }}
            >
              {l.label}
            </Link>
          ))}
          
          <div className={`mt-8 w-full border-t border-rose-deep/10 pt-8 text-center transition-all duration-500 delay-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-sm text-rose-deep/60">Ready for your transformation?</p>
            <a
              href="https://wa.me/19296342823"
              className="mt-4 inline-block font-serif text-2xl text-primary"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
