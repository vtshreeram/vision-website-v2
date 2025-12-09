"use client";

// ** import core packages
import React from "react";

// ** import third party packages
import { motion } from "framer-motion";

// ** import assets
import galleryImage from "@/assets/images/pages/sustainability/gallary.webp";

// ** import components
import Image from "next/image";

// ** import libs
import { scaleIn, viewportOptions } from "@/lib/animations";

const BannerImage = () => {
  return (
    <motion.div
      className="max-h-[500px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={scaleIn}
    >
      <Image
        src={galleryImage}
        alt="gallery"
        width={1512}
        height={500}
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  );
};

export default BannerImage;
