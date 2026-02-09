"use client";

// ** import core packages
import Image from "next/image";
import Link from "next/link";

// ** import third party packages
import { ArrowRight } from "lucide-react";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import data
import { servicesData } from "@/data/services";

export const Services = ({ isViewMore = false }: { isViewMore?: boolean }) => {
  const displayedServices = isViewMore ? servicesData.slice(0, 3) : servicesData;

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:gap-y-14 md:gap-x-8">
      {displayedServices.map((service, idx) => (
        <Link
          key={idx}
          href={`/services/${service.slug}`}
          className="group relative h-[400px] overflow-hidden cursor-pointer block"
        >
          {/* Background Image */}
          <Image
            src={service.img}
            alt={service.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            quality={85}
            loading="lazy"
            placeholder="blur"
          />

          {/* Default Bottom Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-primary px-6 py-4 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0">
            <Typography
              variant="Bold_H6"
              className="text-white text-center text-base"
            >
              {service.label}
            </Typography>
          </div>

          {/* Hover Content */}
          <div className="absolute inset-0 flex translate-y-4 flex-col justify-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-8 bg-primary">
            <Typography variant="Bold_H5" className="mb-3 text-white">
              {service.label}
            </Typography>
            <Typography
              variant="Regular_H6"
              className="mb-4 text-white opacity-90"
            >
              {service.description}
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="Medium_H6" className="text-white">
                Know more
              </Typography>
              <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
