"use client";
// ** import components
import { Typography } from "@/components/ui/Typography";
import SectionHead from "@/components/shared/section-head";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import icons
import { IcoGoals, IcoMission, IcoVision } from "@/assets/icons";

const cards = [
  {
    icon: <IcoVision />,
    title: "Our Vision",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit fames nibh gravida ultrices urna sed condimentum purus diam.",
    border: false,
  },
  {
    icon: <IcoMission />,
    title: "Our Mission",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit fames nibh gravida ultrices urna sed condimentum purus diam.",
    border: true,
  },
  {
    icon: <IcoGoals />,
    title: "Our Goal",
    desc: "Lorem ipsum dolor sit amet consectetur. Sit fames nibh gravida ultrices urna sed condimentum purus diam.",
    border: false,
  },
];

export const VisionMissionGoals = () => {
  return (
    <section className="bg-background global-padding-container py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          title={
            <>
              Lorem ipsum <span className="text-primary">dolor sit</span>
            </>
          }
          description="Discover the Essence of Excellence with CredenceTec"
        />
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {cards.map((card, idx) => (
            <m.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
            >
              <div
                className={`bg-white px-8 py-16 flex flex-col items-center text-center border border-stroke hover:border-primary transition-all duration-300`}
              >
                {card.icon}
                <Typography variant="Bold_H4" className="mt-4 text-foreground">
                  {card.title}
                </Typography>
                <Typography variant="Regular_H6" className="text-gray mt-4">
                  {card.desc}
                </Typography>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionGoals;
