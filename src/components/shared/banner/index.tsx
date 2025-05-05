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
}

export const Banner: FC<BannerProps> = ({
  title = "Ready to Transform Your Fleet Management?",
  subTitle = "Take control of your logistics with Vizfleet’s cutting-edge technology. Simplify operations, boost efficiency, and get real-time insights on deliveries and driver performance.",
}) => {
  return (
    <section
      id="contactUs"
      className="relative overflow-hidden  global-padding-container py-16 md:py-24 lg:!py-32"
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
        <div className="max-w-lg">
          <Typography
            variant="SemiBold_H3"
            className={`block leading-tight text-white `}
          >
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="mt-4 block text-white">
            {subTitle}
          </Typography>

          <div className="mt-8 ">
            <Link href={"/contact-us"}>
              <Button variant="primary" className="bg-white text-primary">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
