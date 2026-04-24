import { useState, useCallback, useRef, type MouseEvent } from "react";

export function use3dTilt(settings = { max: 15, perspective: 1000, scale: 1.05 }) {
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  });
  const containerRef = useRef<HTMLElement | null>(null);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -settings.max;
      const rotateY = ((x - centerX) / centerX) * settings.max;

      setStyle({
        transform: `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`,
        transition: "transform 0.1s linear", // Snappier while moving
      });
    },
    [settings]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    });
  }, [settings]);

  return { style, onMouseMove, onMouseLeave, containerRef };
}
