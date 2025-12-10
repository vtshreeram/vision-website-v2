"use client";

// ** import component
import { Typography } from "@/components/ui/Typography";

//** import third party
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// ** import assets
import {
  IcoSustainability1,
  IcoSustainability2,
  IcoSustainability3,
  IcoSustainability4,
} from "@/assets/icons";

export const Partner = () => {
  const logos = [
    IcoSustainability1,
    IcoSustainability2,
    IcoSustainability3,
    IcoSustainability4,
  ];
  return (
    <section className="bg-primary py-10 md:py-16 lg:py-20 global-padding-container">
      <div className="mx-auto max-w-7xl ">
        <Typography
          variant="SemiBold_H3"
          className="text-white text-center block "
        >
          Standards That Shape Our Sustainability
        </Typography>
        <Typography
          variant="Regular_H5"
          className="text-white text-center block max-w-5xl mx-auto mt-2"
        >
          Our sustainability initiatives are backed by internationally
          recognised certifications and partnerships that ensure responsible,
          transparent, and compliant operations.
        </Typography>

        <div className="mt-10 lg:mt-16 lg:max-w-3xl lg:mx-auto">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {logos.map((Logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center !h-full">
                  <Logo />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
