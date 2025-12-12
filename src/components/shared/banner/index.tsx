"use client";

// ** import core packages
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import bg from "@/assets/images/common/banner/banner.webp";

interface BannerProps {
  title?: string;
  subTitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const Banner: FC<BannerProps> = ({
  title = "Ready to Transform Your Logistics Operations?",
  subTitle = "Trusted by 3,500+ companies, Visions Transport delivers smart, sustainable logistics powered by VIZFLEET technology and 17+ years of proven expertise.",
  primaryButtonText = "Contact us",
  primaryButtonLink = "/contact-us",
  secondaryButtonText = "About us",
  secondaryButtonLink = "/about-us",
}) => {
  return (
    <section
      id="contactUs"
      className="relative overflow-hidden global-padding-container py-16 md:py-24 lg:!py-28"
    >
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background image"
          className="h-full w-full object-cover object-center"
          placeholder="blur"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
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
