"use client";

// ** import core package
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// ** import component
import Header from "@/components/template/header";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import images
import heroImg1 from "@/assets/images/pages/home/hero/hero.webp";
import heroImg2 from "@/assets/images/pages/about-us/head-bg.webp";
import heroImg3 from "@/assets/images/pages/services/head-bg.webp";

import { motion, AnimatePresence } from "framer-motion";

const heroImages: StaticImageData[] = [heroImg1, heroImg2, heroImg3];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen min-h-[600px]">
      {/* Hidden preload container */}
      <div className="hidden" aria-hidden="true">
        {heroImages.map((img, idx) => (
          <Image
            key={`preload-${idx}`}
            src={img}
            alt=""
            priority={idx < 2}
            placeholder="blur"
          />
        ))}
      </div>

      {/* Background images with Fade transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.43, 0.13, 0.23, 0.96],
            scale: { duration: 8 }
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[currentImageIndex]}
            alt="Visions Transport logistics fleet on the road"
            fill
            placeholder="blur"
            className="object-cover object-center w-full h-full"
            priority={currentImageIndex === 0}
            quality={95}
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content wrapper - full height flex column */}
      <div className="relative z-10 w-full h-full flex flex-col global-padding-container">
        {/* Header at the top */}
        <Header />

        {/* Hero content - centered in remaining space */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <Typography
                variant="Bold_H1"
                className="!text-white mb-4 text-shadow"
              >
                Seamless Cross-Border
                <br />
                Logistics for Malaysia & Singapore
              </Typography>
              <Typography
                variant="Regular_H5"
                className="!text-white mb-6 lg:max-w-[85%]"
              >
                Stop guessing where your cargo is. We deliver reliable, AI-tracked freight solutions that keep your supply chain moving—on time, every time.
              </Typography>
              <div className="mt-8 md:mt-14 flex flex-wrap gap-4 md:gap-6">
                <Link href={"/contact-us"}>
                  <Button variant="primary">Get a Quote</Button>
                </Link>
                <Link href={"/services"}>
                  <Button
                    variant="secondary"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
