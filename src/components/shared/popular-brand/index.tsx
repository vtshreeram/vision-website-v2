"use client";

// ** import core packages
import Image from "next/image";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import assets
import brand1 from "@/assets/images/common/brand/1.png";
import brand2 from "@/assets/images/common/brand/2.png";
import brand3 from "@/assets/images/common/brand/3.png";
import brand4 from "@/assets/images/common/brand/4.png";
import brand5 from "@/assets/images/common/brand/5.png";
import brand6 from "@/assets/images/common/brand/6.png";
import brand7 from "@/assets/images/common/brand/7.png";
import brand8 from "@/assets/images/common/brand/8.png";
import brand9 from "@/assets/images/common/brand/9.png";
import brand10 from "@/assets/images/common/brand/10.png";
import brand11 from "@/assets/images/common/brand/11.png";

const brands = [
  { src: brand1, alt: "Best Express" },
  { src: brand2, alt: "E-Tech" },
  { src: brand3, alt: "Agility" },
  { src: brand4, alt: "FM Global" },
  { src: brand5, alt: "Quantem Logistics" },
  { src: brand6, alt: "Flash Express" },
  { src: brand7, alt: "HAVI" },
  { src: brand8, alt: "FM Global Logistics" },
  { src: brand9, alt: "J&T Express" },
  { src: brand10, alt: "DHL" },
  { src: brand11, alt: "SPX Express" },
];

const PopularBrand = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-white">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          gap: 2rem;
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <Typography variant="SemiBold_H3" className="text-foreground">
            Trusted by Industry Leaders
          </Typography>
        </div>

        {/* Infinite Marquee */}
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of brands */}
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center flex-shrink-0 w-auto overflow-hidden h-[90px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  className="object-contain"
                  width={140}
                  height={60}
                  loading="lazy"
                  quality={80}
                  placeholder="blur"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {brands.map((brand, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex items-center justify-center flex-shrink-0 w-auto overflow-hidden h-[90px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  className="object-contain"
                  width={140}
                  height={60}
                  loading="lazy"
                  quality={80}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularBrand;
