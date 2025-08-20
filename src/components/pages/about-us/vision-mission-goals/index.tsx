"use client";
// ** import components
import { Typography } from "@/components/ui/Typography";
import SectionHead from "@/components/shared/section-head";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

interface CardData {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface VisionMissionGoalsProps {
  sectionTitle: React.ReactElement | string;
  sectionDescription: React.ReactElement | string;
  cardsData: CardData[];
}

export const VisionMissionGoals = ({
  sectionTitle,
  sectionDescription,
  cardsData,
}: VisionMissionGoalsProps) => {
  return (
    <section className="bg-background global-padding-container py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <SectionHead title={sectionTitle} description={sectionDescription} />
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {cardsData.map((card, idx) => (
            <m.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="h-full"
            > 
              <div
                className={`bg-white px-8 py-11 flex flex-col items-center text-center border border-stroke hover:border-primary transition-all duration-300 h-full`}
              >
                {card.icon}
                <Typography variant="Bold_H4" className="mt-4 text-foreground md:whitespace-nowrap">
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
