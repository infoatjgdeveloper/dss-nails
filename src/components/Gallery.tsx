import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import workCenter from "@/assets/work-center.jpg?w=320;480;680;880&format=webp&as=srcset";
import workLeft from "@/assets/work-left.jpg?w=320;480;680;880&format=webp&as=srcset";
import workRight from "@/assets/work-right.jpg?w=320;480;680;880&format=webp&as=srcset";
import gallery1 from "@/assets/gallery-1.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery2 from "@/assets/gallery-2.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery3 from "@/assets/gallery-3.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery4 from "@/assets/gallery-4.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery5 from "@/assets/gallery-5.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery6 from "@/assets/gallery-6.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery7 from "@/assets/gallery-7.jpeg?w=320;480;680;880&format=webp&as=srcset";
import gallery8 from "@/assets/gallery-8.jpeg?w=320;480;680;880&format=webp&as=srcset";
import nail1 from "@/assets/nail-1.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail2 from "@/assets/nail-2.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail3 from "@/assets/nail-3.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail4 from "@/assets/nail-4.jpg?w=320;480;680;880&format=webp&as=srcset";
import nail5 from "@/assets/nail-5.jpg?w=320;480;680;880&format=webp&as=srcset";

const images = [
  { srcSet: workLeft, alt: "Subtle nude polish manicure" },
  { srcSet: workCenter, alt: "French-style manicure with teardrop gem" },
  { srcSet: workRight, alt: "Pink-to-nude ombre manicure" },
  { srcSet: gallery1, alt: "Butterfly wing nail art in blue, pink and black" },
  { srcSet: gallery2, alt: "Long French tips with pink floral nail art" },
  { srcSet: gallery3, alt: "Glitter ombre French manicure" },
  { srcSet: gallery4, alt: "Pastel green French tips with pink flowers" },
  { srcSet: gallery5, alt: "Black and white floral French manicure" },
  { srcSet: gallery6, alt: "Classic long French tips with crystal accents" },
  { srcSet: gallery7, alt: "Black French tips with daisy nail art" },
  { srcSet: gallery8, alt: "Almond nails with black and silver swirl design" },
  { srcSet: nail1, alt: "Iridescent purple chrome stiletto nails" },
  { srcSet: nail2, alt: "Green and pink ombre nails with gold 3D accents" },
  { srcSet: nail3, alt: "Nude nails with silver stars and evil eye design" },
  { srcSet: nail4, alt: "Pink French ombre nails with 3D flower detail" },
  { srcSet: nail5, alt: "Pink glitter French tips with rhinestone accents" },
];

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
      // Elastic resistance: dampens further drag the more you pull
      const max = containerWidth.current || 320;
      const sign = dx < 0 ? -1 : 1;
      const abs = Math.abs(dx);
      const eased = (1 - Math.exp(-abs / (max * 0.6))) * max * 0.6;
      setDragX(sign * eased);
    }
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      // Threshold reached — commit slide change on touchend, not mid-drag
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

  // Preload neighbors (and a small look-ahead) so swiping/clicking feels instant.
  useEffect(() => {
    const neighbors = [
      (active - 2 + images.length) % images.length,
      (active - 1 + images.length) % images.length,
      (active + 1) % images.length,
      (active + 2) % images.length,
    ];
    neighbors.forEach((i) => {
      const img = new Image();
      img.srcset = images[i].srcSet;
      img.sizes = "(min-width: 768px) 440px, 300px";
      img.decoding = "async";
      img.onload = () => setLoaded((s) => (s[i] ? s : { ...s, [i]: true }));
    });
  }, [active]);

  return (
    <section className="relative bg-blush px-4 pb-20 pt-20 md:pb-28 md:pt-32">
      {/* Curved top divider - perfectly matched to the theme */}
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
                  className={`group relative shrink-0 overflow-hidden rounded-3xl will-change-transform [transform-style:preserve-3d] ${
                    isActive
                      ? "z-20 h-[460px] w-[300px] opacity-100 blur-0 shadow-float ring-2 ring-white md:h-[600px] md:w-[440px]"
                      : "z-10 hidden h-[380px] w-[240px] opacity-40 blur-[3px] hover:opacity-80 hover:blur-0 md:block md:h-[500px] md:w-[340px]"
                  }`}
                >
                  {!isLoaded && (
                    <Skeleton className="absolute inset-0 h-full w-full rounded-3xl bg-rose-soft/60" />
                  )}
                  <img
                    srcSet={img.srcSet}
                    alt={img.alt}
                    sizes={isActive ? "(min-width: 768px) 440px, 300px" : "(min-width: 768px) 340px, 240px"}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onLoad={() => setLoaded((s) => ({ ...s, [i]: true }))}
                    className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`}
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

        {/* Full Gallery Grid */}
        {showGrid && (
          <div className="mt-32">
            <h3 className="font-serif text-3xl font-semibold text-rose-deep md:text-4xl">Gallery</h3>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Explore our complete collection of bespoke nail designs.
            </p>
            
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-[400px] overflow-hidden rounded-2xl bg-rose-soft/20 shadow-soft transition-smooth hover:shadow-float"
                >
                  <img
                    srcSet={img.srcSet}
                    alt={img.alt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="p-6 text-sm font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}