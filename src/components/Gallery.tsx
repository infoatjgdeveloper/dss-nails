import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { use3dTilt } from "@/hooks/use-3d-tilt";
import workCenter from "@/assets/work-center.jpg?w=680&format=webp";
import workCenterSet from "@/assets/work-center.jpg?w=320;480;680;880&format=webp&as=srcset";
import workLeft from "@/assets/work-left.jpg?w=680&format=webp";
import workLeftSet from "@/assets/work-left.jpg?w=320;480;680;880&format=webp&as=srcset";
import workRight from "@/assets/work-right.jpg?w=680&format=webp";
import workRightSet from "@/assets/work-right.jpg?w=320;480;680;880&format=webp&as=srcset";
import gallery1 from "@/assets/gallery-1.jpeg?w=680&format=webp";
import gallery1Set from "@/assets/gallery-1.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery2 from "@/assets/gallery-2.jpeg?w=680&format=webp";
import gallery2Set from "@/assets/gallery-2.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery3 from "@/assets/gallery-3.jpeg?w=680&format=webp";
import gallery3Set from "@/assets/gallery-3.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery4 from "@/assets/gallery-4.jpeg?w=680&format=webp";
import gallery4Set from "@/assets/gallery-4.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery5 from "@/assets/gallery-5.jpeg?w=680&format=webp";
import gallery5Set from "@/assets/gallery-5.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery6 from "@/assets/gallery-6.jpeg?w=680&format=webp";
import gallery6Set from "@/assets/gallery-6.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery7 from "@/assets/gallery-7.jpeg?w=680&format=webp";
import gallery7Set from "@/assets/gallery-7.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery8 from "@/assets/gallery-8.jpeg?w=680&format=webp";
import gallery8Set from "@/assets/gallery-8.jpeg?w=320;480;680;880&format=webp&as=srcset";
import nail1 from "@/assets/nail-1.jpg?w=680&format=webp";
import nail1Set from "@/assets/nail-1.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail2 from "@/assets/nail-2.jpg?w=680&format=webp";
import nail2Set from "@/assets/nail-2.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail3 from "@/assets/nail-3.jpg?w=680&format=webp";
import nail3Set from "@/assets/nail-3.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail4 from "@/assets/nail-4.jpg?w=680&format=webp";
import nail4Set from "@/assets/nail-4.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail5 from "@/assets/nail-5.jpg?w=680&format=webp";
import nail5Set from "@/assets/nail-5.jpg?w=320;480;680;880&format=webp&as=srcset";
import gallery9 from "@/assets/gallery-9.png?w=680&format=webp";
import gallery9Set from "@/assets/gallery-9.png?w=320;480;680;880&format=webp&as=srcset";
import gallery10 from "@/assets/gallery-10.png?w=680&format=webp";
import gallery10Set from "@/assets/gallery-10.png?w=320;480;680;880&format=webp&as=srcset";
import gallery11 from "@/assets/gallery-11.png?w=680&format=webp";
import gallery11Set from "@/assets/gallery-11.png?w=320;480;680;880&format=webp&as=srcset";
import gallery12 from "@/assets/gallery-12.png?w=680&format=webp";
import gallery12Set from "@/assets/gallery-12.png?w=320;480;680;880&format=webp&as=srcset";
import gallery13 from "@/assets/gallery-13.png?w=680&format=webp";
import gallery13Set from "@/assets/gallery-13.png?w=320;480;680;880&format=webp&as=srcset";


const images = [
  // { src: workLeft, srcSet: workLeftSet, alt: "Subtle nude polish manicure", title: "Nude Elegance" },
  // { src: workCenter, srcSet: workCenterSet, alt: "French-style manicure with teardrop gem", title: "French Teardrop" },
  // { src: workRight, srcSet: workRightSet, alt: "Pink-to-nude ombre manicure", title: "Pink Ombre" },
  { src: gallery1, srcSet: gallery1Set, alt: "Butterfly wing nail art in blue, pink and black", title: "Butterfly Art" },
  { src: gallery2, srcSet: gallery2Set, alt: "Long French tips with pink floral nail art", title: "Floral French" },
  { src: gallery3, srcSet: gallery3Set, alt: "Glitter ombre French manicure", title: "Glitter French" },
  { src: gallery4, srcSet: gallery4Set, alt: "Pastel green French tips with pink flowers", title: "Pastel Garden" },
  { src: gallery5, srcSet: gallery5Set, alt: "Black and white floral French manicure", title: "Monochrome Floral" },
  { src: gallery6, srcSet: gallery6Set, alt: "Classic long French tips with crystal accents", title: "Crystal French" },
  { src: gallery7, srcSet: gallery7Set, alt: "Black French tips with daisy nail art", title: "Daisy French" },
  { src: gallery8, srcSet: gallery8Set, alt: "Almond nails with black and silver swirl design", title: "Swirl Design" },
  { src: nail1, srcSet: nail1Set, alt: "Iridescent purple chrome stiletto nails", title: "Chrome Stiletto" },
  { src: nail2, srcSet: nail2Set, alt: "Green and pink ombre nails with gold 3D accents", title: "3D Gold Accents" },
  { src: nail3, srcSet: nail3Set, alt: "Nude nails with silver stars and evil eye design", title: "Celestial Nude" },
  { src: nail4, srcSet: nail4Set, alt: "Pink French ombre nails with 3D flower detail", title: "3D Floral" },
  { src: nail5, srcSet: nail5Set, alt: "Detailed Japanese-style nail art with 3D accents", title: "Sculpted Details" },
  { src: gallery9, srcSet: gallery9Set, alt: "Almond nails with nude base and brown floral/leopard accents", title: "Safari Blossom" },
  { src: gallery10, srcSet: gallery10Set, alt: "Sky blue chrome stiletto nails", title: "Blue Horizon" },
  { src: gallery11, srcSet: gallery11Set, alt: "Soft pink almond nails", title: "Petal Pink" },
  { src: gallery12, srcSet: gallery12Set, alt: "Purple and black multichrome stiletto nails", title: "Midnight Galaxy" },
  { src: gallery13, srcSet: gallery13Set, alt: "Black and brown ombre almond nails", title: "Espresso Ombre" },
];

function InteractiveCard({ img }: { img: (typeof images)[0] }) {
  const tilt = use3dTilt({ max: 12, perspective: 1000, scale: 1.05 });

  return (
    <article
      className="group relative h-full w-full will-change-transform"
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white shadow-soft transition-smooth group-hover:shadow-float">
        <img
          srcSet={img.srcSet}
          alt={img.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
        />

        {/* Shimmer Overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/30 to-transparent" />
          <Sparkles className="absolute right-6 top-6 h-6 w-6 animate-pulse text-white/80" />
        </div>

        {/* Floating Tag */}
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-md">
            <p className="font-serif text-lg font-medium text-white">{img.title}</p>
            <p className="text-xs font-medium uppercase tracking-widest text-white/80">View Detail</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Gallery({ showGrid = false }: { showGrid?: boolean }) {
  const [active, setActive] = useState(1);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeHandled = useRef(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerWidth = useRef(0);

  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    swipeHandled.current = false;
    containerWidth.current = e.currentTarget.clientWidth;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;
    if (!swipeHandled.current && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      const max = containerWidth.current || 320;
      const sign = dx < 0 ? -1 : 1;
      const abs = Math.abs(dx);
      const eased = (1 - Math.exp(-abs / (max * 0.6))) * max * 0.6;
      setDragX(sign * eased);
    }
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      swipeHandled.current = true;
    }
  };

  const onTouchEnd = () => {
    if (swipeHandled.current && dragX !== 0) {
      if (dragX < 0) next();
      else prev();
    }
    setDragX(0);
    setIsDragging(false);
    touchStartX.current = null;
    touchStartY.current = null;
  };

  useEffect(() => {
    // Pre-warm the current and neighbor images
    const targetIndices = [
      (active - 2 + images.length) % images.length,
      (active - 1 + images.length) % images.length,
      active,
      (active + 1) % images.length,
      (active + 2) % images.length,
    ];

    targetIndices.forEach((i) => {
      const img = new Image();
      img.src = images[i].src;
      img.srcset = images[i].srcSet;
      img.sizes = "(min-width: 768px) 440px, 300px";
      if (img.complete) {
        setLoaded((s) => (s[i] ? s : { ...s, [i]: true }));
      } else {
        img.onload = () => setLoaded((s) => (s[i] ? s : { ...s, [i]: true }));
      }
    });
  }, [active]);

  return (
    <section className="relative bg-blush px-4 pb-20 pt-20 md:pb-28 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-px overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="block h-[80px] w-full md:h-[140px]"
        >
          <path
            d="M0,0 L1440,0 L1440,140 C1080,10 360,10 0,140 Z"
            fill="oklch(0.97 0.02 350)"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="font-serif text-4xl font-semibold text-rose-deep md:text-5xl">Our Work</h2>
        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          Discover our gallery to see the artistry of our skilled nail technicians.
        </p>

        <div
          className="relative mt-14 flex items-center justify-center gap-4 md:gap-8 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-rose-deep shadow-soft transition-smooth hover:bg-white hover:scale-110 md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex w-full items-center justify-center gap-3 [perspective:1200px] md:gap-6">
            {[
              (active - 1 + images.length) % images.length,
              active,
              (active + 1) % images.length,
            ].map((i, pos) => {
              const img = images[i];
              const isActive = pos === 1;
              const isLoaded = loaded[i];
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    transform: isActive
                      ? `translateX(${dragX}px) scale(${1 - Math.min(Math.abs(dragX) / 1200, 0.05)}) translateZ(0) rotateY(${dragX * -0.02}deg)`
                      : pos === 0
                        ? `translateX(${dragX * 0.4}px) scale(0.85) translateZ(-80px) rotateY(15deg)`
                        : `translateX(${dragX * 0.4}px) scale(0.85) translateZ(-80px) rotateY(-15deg)`,
                    transitionTimingFunction: isDragging
                      ? "linear"
                      : "cubic-bezier(0.22, 1, 0.36, 1)",
                    transitionDuration: isDragging ? "0ms" : "700ms",
                    transitionProperty: "transform, opacity, filter, box-shadow",
                  }}
                  className={`group relative shrink-0 overflow-hidden rounded-3xl will-change-transform [transform-style:preserve-3d] ${isActive
                      ? "z-20 h-[460px] w-[300px] opacity-100 blur-0 shadow-float ring-2 ring-white md:h-[600px] md:w-[440px]"
                      : "z-10 hidden h-[380px] w-[240px] opacity-40 blur-[3px] hover:opacity-80 hover:blur-0 md:block md:h-[500px] md:w-[340px]"
                    }`}
                >
                  {!isLoaded && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-3xl bg-rose-soft/60" />
                  )}
                  <img
                    src={img.src}
                    srcSet={img.srcSet}
                    alt={img.alt}
                    sizes={isActive ? "(min-width: 768px) 440px, 300px" : "(min-width: 768px) 340px, 240px"}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onLoad={(e) => {
                      if (e.currentTarget.complete) {
                        setLoaded((s) => ({ ...s, [i]: true }));
                      }
                    }}
                    className={`h-full w-full object-cover transition-opacity duration-500 ease-out group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-rose-deep shadow-soft transition-smooth hover:bg-white hover:scale-110 md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-smooth ${i === active ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
            />
          ))}
        </div>

        {showGrid && (
          <div className="mt-32">
            <h3 className="font-serif text-3xl font-semibold text-rose-deep md:text-4xl">Gallery</h3>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Explore our complete collection of bespoke nail designs.
            </p>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, i) => (
                <div key={i} className="aspect-[4/5] bg-transparent">
                  <InteractiveCard img={img} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}