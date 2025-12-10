"use client";

// ** import core packages
import React from "react";
import { ArrowRight } from "lucide-react";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

export interface DocumentCard {
  icon: React.ReactElement;
  title: string;
  description: string;
  downloadLink?: string;
}

interface ServiceCardProps {
  doc: DocumentCard;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ doc, index }) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInDown}
      transition={{ delay: index * 0.1 }}
      className="flex-1 flex"
    >
      <div className="bg-primary p-6 md:p-8 flex flex-col items-start text-start w-full flex-1">
        <div className="mb-4 flex justify-start p-2 bg-white rounded-md">
          {doc.icon}
        </div>
        <Typography variant="Bold_H5" className="text-white mb-3">
          {doc.title}
        </Typography>
        <Typography variant="Regular_H6" className="text-white  flex-grow">
          {doc.description}
        </Typography>

        {doc.downloadLink && (
          <a
            href={doc.downloadLink || "#"}
            className="flex items-start justify-start gap-2 text-white hover:opacity-80 transition-opacity group mt-6"
          >
            <Typography variant="Medium_H6" className="text-white">
              Download
            </Typography>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </m.div>
  );
};
