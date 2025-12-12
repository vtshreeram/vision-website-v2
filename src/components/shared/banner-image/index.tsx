"use client";

// ** import core packages
import React from "react";
import Image from "next/image";

// ** import assets
import galleryImage from "@/assets/images/pages/sustainability/gallary.webp";

const BannerImage = () => {
  return (
    <div
      className="max-h-[500px] overflow-hidden"
    >
      <Image
        src={galleryImage}
        alt="gallery"
        width={1512}
        height={500}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default BannerImage;
