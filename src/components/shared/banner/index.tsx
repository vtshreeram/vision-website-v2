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
      className="relative overflow-hidden global-padding-container py-16 md:py-24"
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
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-primary/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="max-w-xl">
          <Typography
            variant="SemiBold_H3"
            className={`block leading-tight text-white `}
          >
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="mt-4 block text-white">
            {subTitle}
          </Typography>

          <div className="mt-8 flex flex-wrap gap-4">
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
