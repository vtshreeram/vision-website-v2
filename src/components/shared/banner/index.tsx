"use client";

// ** import core packages
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import bg1 from "@/assets/images/common/banner/banner.webp";
import bg2 from "@/assets/images/pages/home/hero/hero.webp";
import bg3 from "@/assets/images/pages/services/head-bg.webp";

const bannerImages = [bg1, bg2, bg3];

interface BannerProps {
  title?: string;
  subTitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Banner: FC<BannerProps> = ({
  title = "Ready to Streamline Your Logistics?",
  subTitle = "Join 3,500+ companies moving faster with Visions. Smart tech, proven experts, and zero headaches.",
  primaryButtonText = "Get a Quote",
  primaryButtonLink = "/contact-us",
  secondaryButtonText = "Talk to an Expert",
  secondaryButtonLink = "/contact-us",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contactUs"
      className="relative overflow-hidden min-h-[70vh] md:min-h-screen flex flex-col justify-between global-padding-container py-16 md:py-24"
    >
      {/* Background images with fade transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="absolute inset-0"
        >
          <Image
            src={bannerImages[currentImageIndex]}
            alt="Background image"
            className="h-full w-full object-cover object-center"
            placeholder="blur"
            priority={currentImageIndex === 0}
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl w-full h-full flex flex-col justify-between">
        {/* Main heading - large italic style */}
        <div className="mb-auto pt-8 md:pt-0">
          <Typography
            variant="Bold_H1"
            className="!text-white leading-tight mb-4"
          >
            Ready to Move<br/>
            Your Cargo<br/>
            <em className="italic">Effortlessly</em>
          </Typography>
        </div>

        {/* Bottom CTA section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Left: Description */}
          <div>
            <Typography variant="Regular_H5" className="!text-white/80">
              {subTitle}
            </Typography>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href={primaryButtonLink}>
              <Button
                variant="primary"
                className="bg-white text-primary hover:bg-white/90"
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link href={secondaryButtonLink}>
              <Button
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
