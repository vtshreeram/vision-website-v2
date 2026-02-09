"use client";

// ** import core packages
import React from "react";
import Image from "next/image";
// import type { Swiper as SwiperType } from "swiper";

// ** import third party packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ** import icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import images
import post1 from "@/assets/images/pages/home/linkedin-post/post-1.png";
import post2 from "@/assets/images/pages/home/linkedin-post/post-2.png";
import post3 from "@/assets/images/pages/home/linkedin-post/post-3.png";
import post4 from "@/assets/images/pages/home/linkedin-post/post-4.png";

const posts = [
  { image: post1, alt: "Smart Tips to Reduce Logistics Costs" },
  { image: post2, alt: "Borders Made Easy Cargo Made Secure" },
  { image: post3, alt: "Client Feedback" },
  { image: post4, alt: "Real-time GPS tracking" },
  { image: post1, alt: "Smart Tips to Reduce Logistics Costs" },
  { image: post2, alt: "Borders Made Easy Cargo Made Secure" },
  { image: post3, alt: "Client Feedback" },
  { image: post4, alt: "Real-time GPS tracking" },
];

const LinkedinPost = () => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Typography variant="SemiBold_H2" className="text-white mb-2">
            Industry Insights & News
          </Typography>
          <Typography variant="Regular_H5" className="text-white">
            Stay updated with the latest logistics trends and company announcements.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="relative linkedin-swiper-container px-12 md:px-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".linkedin-swiper-button-next",
              prevEl: ".linkedin-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".linkedin-swiper-pagination",
              bulletClass: "linkedin-swiper-pagination-bullet",
              bulletActiveClass: "linkedin-swiper-pagination-bullet-active",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            className="linkedin-swiper"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="linkedin-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent cursor-pointer border-white border-2 hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:h-8 md:w-8 text-white" />
          </button>
          <button
            className="linkedin-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent cursor-pointer border-white border-2 hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:h-8 md:w-8 text-white" />
          </button>

          {/* Custom Pagination */}
          <div className="linkedin-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default LinkedinPost;
