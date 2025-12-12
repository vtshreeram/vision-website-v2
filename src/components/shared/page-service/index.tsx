"use client";

// ** import core packages
import React from "react";
import Image, { StaticImageData } from "next/image";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { ServiceCard, DocumentCard } from "./service-card";
import { cn } from "@/lib/utils";

interface PageServiceProps {
  title: React.ReactNode;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  documents: DocumentCard[];
  subtitleClassName?: string;
}

const PageService: React.FC<PageServiceProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
  documents,
  subtitleClassName,
}) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Typography variant="Bold_H2" className="text-foreground mb-2">
            {title}
          </Typography>
          <Typography
            variant="Regular_H5"
            className={cn("text-foreground max-w-3xl mx-auto", subtitleClassName)}
          >
            {subtitle}
          </Typography>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch ">
          {/* Left Cards */}
          <div className="lg:col-span-1 flex flex-col space-y-6 md:space-y-8">
            {documents.slice(0, 2).map((doc, index) => (
              <ServiceCard key={index} doc={doc} index={index} />
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-1 order-first lg:order-none hidden lg:flex items-center justify-center ">
            <div
              className="w-full h-full flex items-center justify-center overflow-hidden max-h-[599px] "
            >
              <Image
                src={image}
                alt={imageAlt}
                width={410}
                height={599}
                className="object-cover w-full h-full "
                placeholder="blur"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-1 flex flex-col space-y-6 md:space-y-8">
            {documents.slice(2, 4).map((doc, index) => (
              <ServiceCard key={index + 2} doc={doc} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageService;
