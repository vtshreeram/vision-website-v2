"use client";

// ** import core packages
import React from "react";
import Image, { StaticImageData } from "next/image";

// ** import third party packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


// ** import components
import { Typography } from "@/components/ui/Typography";

export interface Initiative {
  title: string;
  description: string;
}

export interface SliderImage {
  image: StaticImageData;
  alt: string;
}

interface SustainableOperationsProps {
  title: React.ReactNode;
  description: string;
  initiatives: Initiative[];
  sliderImages: SliderImage[];
}

const SustainableOperations: React.FC<SustainableOperationsProps> = ({
  title,
  description,
  initiatives,
  sliderImages,
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
            className="text-foreground max-w-3xl mx-auto"
          >
            {description}
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Numbered List */}
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="flex gap-4">
                  {/* Red Square Number */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <Typography variant="Bold_H5" className="text-white">
                        {index + 1}
                      </Typography>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Typography
                      variant="Bold_H5"
                      className="text-foreground mb-2"
                    >
                      {initiative.title}
                    </Typography>
                    <Typography
                      variant="Regular_H6"
                      className="text-foreground"
                    >
                      {initiative.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Swiper Slider */}
          <div className="relative lg:col-span-9 h-full flex flex-col">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="sustainable-swiper h-full w-full [&_.swiper-wrapper]:h-full [&_.swiper-slide]:h-full"
            >
              {sliderImages.map((sliderImage, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={sliderImage.image}
                      alt={sliderImage.alt}
                      fill
                      className="object-cover h-full w-full"
                      placeholder="blur"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableOperations;
