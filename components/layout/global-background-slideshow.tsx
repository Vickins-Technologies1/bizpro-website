"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/backgrounds/analytics-review.webp", position: "50% 45%" },
  { src: "/backgrounds/finance-growth.webp", position: "50% 54%" },
  { src: "/backgrounds/business-intelligence.webp", position: "50% 42%" },
  { src: "/backgrounds/financial-planning.webp", position: "50% 55%" },
  { src: "/backgrounds/connected-business.webp", position: "50% 55%" },
  { src: "/backgrounds/global-commerce.webp", position: "50% 50%" },
  { src: "/backgrounds/performance-analysis.webp", position: "50% 50%" }
] as const;

export function GlobalBackgroundSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setTimeout(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      const preload = new window.Image();
      preload.src = slides[nextSlide].src;
      setActiveSlide(nextSlide);
    }, 8500);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className="global-background" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`global-background__slide${index === activeSlide ? " is-active" : ""}`}
          style={{ backgroundImage: `url("${slide.src}")`, backgroundPosition: slide.position }}
        />
      ))}
      <div className="global-background__shade" />
    </div>
  );
}
