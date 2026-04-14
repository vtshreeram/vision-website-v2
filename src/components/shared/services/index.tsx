"use client";

// ** import core packages
import Image from "next/image";
import Link from "next/link";

// ** import third party packages
import { ArrowRight } from "lucide-react";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { Skeleton } from "@/components/ui/Skeleton";

// ** import data
import { servicesData } from "@/data/services";

export const Services = ({ isViewMore = false, isLoading = false }: { isViewMore?: boolean, isLoading?: boolean }) => {
  const displayedServices = isViewMore ? servicesData.slice(0, 3) : servicesData;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-y-14 md:gap-x-8">
        {Array.from({ length: isViewMore ? 3 : 6 }).map((_, idx) => (
          <div key={idx} className="flex flex-col h-full bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <Skeleton variant="rectangular" className="h-[240px] w-full" />
            <div className="flex flex-col flex-1 p-6">
              <Skeleton variant="text" className="h-6 w-3/4 mb-3" />
              <div className="space-y-2 mb-4">
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-full" />
                <Skeleton variant="text" className="h-4 w-2/3" />
              </div>
              <div className="mt-auto">
                <Skeleton variant="text" className="h-5 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-y-14 md:gap-x-8">
      {displayedServices.map((service, idx) => (
        <Link
          key={idx}
          href={`/services/${service.slug}`}
          className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Image Section */}
          <div className="relative h-[240px] w-full overflow-hidden">
            <Image
              src={service.img}
              alt={service.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
              loading="lazy"
              placeholder="blur"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1 p-6">
            <Typography variant="Bold_H5" className="mb-3 text-foreground">
              {service.label}
            </Typography>
            <Typography
              variant="Regular_H6"
              className="mb-4 text-gray line-clamp-3"
            >
              {service.description}
            </Typography>
            
            <div className="mt-auto flex items-center gap-2 text-primary">
              <Typography variant="Medium_H6">
                Know more
              </Typography>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
