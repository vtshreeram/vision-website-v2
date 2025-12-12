"use client";

// ** import core packages
import { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import utils
import { cn } from "@/lib/utils";

// ** import default image
import defaultLogo from "@/assets/images/common/about/Logo.webp";

interface AboutPageProps {
  image?: StaticImageData;
  imageAlt?: string;
  title: ReactElement | string;
  description?: string;
  listItems?: string[];
  isAboutUs?: boolean;
  variant?: "default" | "secondary" | "simple";
  showButtons?: boolean;
}

export const AboutPage = ({
  image,
  imageAlt = "about image",
  title,
  description,
  listItems,
  isAboutUs = true,
  variant = "default",
  showButtons = true,
}: AboutPageProps) => {
  // Use default logo if no image provided
  const displayImage = image || defaultLogo;
  const isSimple = variant === "simple";

  return (
    <section
      id="aboutUs"
      className={cn(
        "global-padding-container",
        variant === "secondary" ? "bg-secondary-background py-10" : "bg-background py-16 md:py-20"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-2 items-center",
          isSimple ? "lg:gap-48" : "lg:gap-24"
        )}
      >
        <div className="flex justify-center">
          <Image
            src={displayImage}
            height={variant === "secondary" ? 373 : isSimple ? 150 : 536}
            width={variant === "secondary" ? 373 : isSimple ? 410 : 626}
            alt={imageAlt}
            className={cn(
              variant === "secondary" ? "object-contain" :
                isSimple ? "object-contain" : "object-cover"
            )}
            placeholder="blur"
          />
        </div>
        <div>
          <Typography variant="Bold_H3" className="text-secondary mt-2 block">
            {title}
          </Typography>
          <div className="mt-6 space-y-6">
            {description && (
              <div>
                <Typography
                  variant="Regular_H6"
                  className="block text-foreground"
                >
                  {description}
                </Typography>
              </div>
            )}
            {listItems && listItems.length > 0 && (
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
            )}
          </div>
          {showButtons && variant !== "secondary" && (
            <div className="mt-6 md:mt-8 flex flex-wrap gap-x-4 md:gap-x-6">
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
        </div>
      </div>
    </section>
  );
};

// Re-export as AboutUs for backward compatibility
export const AboutUs = AboutPage;
