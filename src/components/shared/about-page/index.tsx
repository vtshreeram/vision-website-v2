"use client";

// ** import core packages
import { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import utils
import { cn } from "@/lib/utils";

interface AboutPageProps {
  image: StaticImageData;
  imageAlt?: string;
  title: ReactElement | string;
  description: string;
  listItems: string[];
  isAboutUs?: boolean;
  variant?: "default" | "secondary";
}

export const AboutPage = ({
  image,
  imageAlt = "about image",
  title,
  description,
  listItems,
  isAboutUs = true,
  variant = "default",
}: AboutPageProps) => {
  return (
    <section
      id="aboutUs"
      className={cn(
        "  global-padding-container",
        variant === "secondary" ? "bg-secondary-background py-10" : "bg-background py-16 md:py-20"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl  grid grid-cols-1 gap-10 lg:gap-24 lg:grid-cols-2 items-center"
        )}
      >
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="flex justify-center "
        >
          <Image
            src={image}
            height={ variant === "secondary" ? 373 : 536}
            width={ variant === "secondary" ? 373 : 626}
            alt={imageAlt}
            className={variant === "secondary" ? "object-contain" : "object-cover"}
            placeholder="blur"
          />
        </m.div>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
        >
          <Typography variant="Bold_H3" className="text-secondary mt-2 block ">
            {title}
          </Typography>
          <div className="mt-6 space-y-6">
            <div>
              <Typography
                variant="Regular_H6"
                className="block text-foreground"
              >
                {description}
              </Typography>
            </div>
            <div>
              <ul className="space-y-1 mt-6 list-disc pl-5">
                {listItems.map((item, index) => (
                  <li key={index}>
                    <Typography
                      variant="Regular_H6"
                      className="text-foreground"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {variant === "default" && (
            <div className="mt-6 md:mt-8 flex flex-wrap gap-x-4 md:gap-x-6 ">
              <Link href={"/contact-us"}>
                <Button variant="primary">Contact us</Button>
              </Link>
              {isAboutUs && (
                <Link href={"/about-us"}>
                  <Button variant="secondary">About us</Button>
                </Link>
              )}
            </div>
          )}
        </m.div>
      </div>
    </section>
  );
};
