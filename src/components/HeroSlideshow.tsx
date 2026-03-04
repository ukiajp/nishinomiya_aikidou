"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    src: "/images/training-throw.jpg",
    alt: "道場長による投げ技の稽古",
    position: "center 40%",
  },
  {
    src: "/images/hero.jpg",
    alt: "西宮合氣道同好会の稽古風景",
    position: "center 30%",
  },
  {
    src: "/images/practice-1.jpg",
    alt: "稽古の様子",
    position: "center center",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 800);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          style={{
            objectFit: "cover",
            objectPosition: slide.position,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
          priority={i === 0}
          quality={90}
        />
      ))}
    </>
  );
}
