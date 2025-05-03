"use client";

// ** import component
import { Typography } from "@/components/ui/Typography";

//** import third party
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

// ** import assets
import {
  LogoAramex,
  LogoDHL,
  LogoDSV,
  LogoFlash,
  LogoSPX,
} from "@/assets/icons";

export const Partner = () => {
  return (
    <section className="bg-primary py-10 global-padding-container">
      <div className="mx-auto max-w-7xl ">
        <Typography
          variant="SemiBold_H4"
          className="text-white text-center block "
        >
          Over 100+ trusted partner around the world
        </Typography>

        <div className="mt-10">
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
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <LogoSPX />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <LogoFlash />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <LogoAramex />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <LogoDSV />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center !h-full">
                <LogoDHL />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
