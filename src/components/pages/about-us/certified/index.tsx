"use client";

// ** import core packages
import Image from "next/image";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import assets
import sectionBg from "@/assets/images/pages/about-us/certified-bg.png";
import logo from "@/assets/images/pages/about-us/tsr-logo.png";

const Certified = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 global-padding-container overflow-hidden bg-background">
      {/* Background Image with World Map Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={sectionBg}
          alt="Certification background"
          className="object-contain !object-center opacity-80"
          height={463}
          width={1272}
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
        >
          <div className="flex items-center justify-center">
            <Image src={logo} alt="TSR Logo" height={180} width={366} />
          </div>
          {/* Certification Date */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="SemiBold_H4"
              className="text-secondary mt-6 md:mt-8"
            >
              Certified on June 2025
            </Typography>
          </m.div>

          {/* Main Headline */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12"
          >
            <Typography variant="Bold_H3" className="text-secondary uppercase">
              WE ARE NOW TAPA TSR CERTIFIED!
            </Typography>
          </m.div>

          {/* Descriptive Text */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-2"
          >
            <Typography
              variant="Regular_H5"
              className="text-foreground leading-relaxed"
            >
              Visions Transport Enterprise Sdn Bhd has officially attained TAPA
              TSR Certification — a globally recognised benchmark that
              reinforces our commitment to secure, compliant, and high-quality
              supply chain operations across Malaysia and Singapore.
            </Typography>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default Certified;
