// import core package
import Image from "next/image";
import React from "react";

// import component
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// import image
import img from "@/assets/images/pages/home/hero/hero.webp";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden flex items-center h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Hero image"
          fill
          placeholder="blur"
          className="object-cover object-center w-full h-full"
          priority
        />
     
      </div>

      {/* Content */}
      <div className="relative z-10 w-full global-padding-container ">
        <div className=" max-w-7xl mx-auto flex flex-col justify-center">
          <div className="max-w-2xl mt-24 mb-16">
            <Typography
              variant="Bold_H1"
              className="text-white mb-4 leading-tight"
            >
              Lorem ipsum dolor sit <br /> ametconsectetur. Arcu nec
            </Typography>
            <Typography variant="Regular_H5" className="text-white mb-6">
              Lorem ipsum dolor sit amet consectetur. Mi elit nunc sed odio
              porta odio mi sodales. Id in vitae pharetra nisl justo massa.
            </Typography>
            <div className="mt-14">
              <Button variant="primary">Downloaded</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
