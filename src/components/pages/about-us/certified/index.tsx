"use client";

// ** import core packages
import Image from "next/image";
import { motion } from "framer-motion";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import assets
import sectionBg from "@/assets/images/pages/about-us/certified-bg.png";
import logo from "@/assets/images/pages/about-us/tsr-logo.png";

const Certified = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 global-padding-container overflow-hidden bg-background">
      {/* Background Image with World Map Overlay - Animated */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src={sectionBg}
            alt="Certification background"
            className="object-contain !object-center"
            height={463}
            width={1272}
            quality={90}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo with floating animation */}
          <motion.div
            className="flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image src={logo} alt="TSR Logo" height={180} width={366} />
          </motion.div>

          {/* Certification Date */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Typography
              variant="SemiBold_H4"
              className="text-secondary mt-6 md:mt-8"
            >
              Certified on June 2025
            </Typography>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Typography variant="Bold_H3" className="text-secondary uppercase">
              WE ARE NOW TAPA TSR CERTIFIED!
            </Typography>
          </motion.div>

          {/* Descriptive Text */}
          <motion.div
            className="max-w-4xl mx-auto mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certified;
