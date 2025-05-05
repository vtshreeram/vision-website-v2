"use client";

// ** import core package
import Image, { StaticImageData } from "next/image";
import { useState, useCallback } from "react";

// ** import third party packages
import { motion as m } from "framer-motion";
import ImageViewer from "react-simple-image-viewer";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import utils
import { cn } from "@/lib/utils";

// ** import assets
import img1 from "@/assets/images/pages/gallery/img-1.webp";
import img2 from "@/assets/images/pages/gallery/img-2.webp";
import img3 from "@/assets/images/pages/gallery/img-3.webp";
import img4 from "@/assets/images/pages/gallery/img-4.webp";
import img5 from "@/assets/images/pages/gallery/img-5.webp";
import img6 from "@/assets/images/pages/gallery/img-6.webp";
import img7 from "@/assets/images/pages/gallery/img-7.webp";
import img8 from "@/assets/images/pages/gallery/img-8.webp";
import img9 from "@/assets/images/pages/gallery/img-9.webp";
import img10 from "@/assets/images/pages/gallery/img-10.webp";

interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
  colSpan?: boolean;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: img1, alt: "Red truck on highway" },
  { id: 2, src: img2, alt: "Red truck front view on road" },
  { id: 3, src: img3, alt: "Delivery person with package" },
  { id: 4, src: img4, alt: "Visions branded truck", colSpan: true },
  { id: 5, src: img5, alt: "Red truck in mountains" },
  { id: 6, src: img6, alt: "Warehouse worker with boxes" },
  { id: 7, src: img7, alt: "Warehouse exterior" },
  { id: 8, src: img8, alt: "Warehouse loading docks" },
  { id: 9, src: img9, alt: "Worker scanning packages" },
  { id: 10, src: img10, alt: "Visions truck in parking lot", colSpan: true },
];

const Gallery = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const imageUrls = galleryImages.map((image) => image.src.src);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section className="py-16 md:py-20 global-padding-container">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 mb-4">
          {galleryImages.map((image, index) => (
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              key={image.id}
              className={cn(
                "overflow-hidden  shadow-lg   cursor-pointer",
                image.colSpan && "lg:col-span-2"
              )}
              onClick={() => openImageViewer(index)}
            >
              <div className="relative h-40 lg:h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </m.div>
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <div className="relative z-[99999]">
          <ImageViewer
            src={imageUrls}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={true}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
