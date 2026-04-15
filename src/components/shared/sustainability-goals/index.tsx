"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Leaf, Zap, TrendingDown } from "lucide-react";

interface SustainabilityGoal {
  year: number;
  target: string;
  description: string;
  icon: ReactNode;
  category: "emissions" | "renewable" | "waste";
}

interface SustainabilityGoalsProps {
  title?: ReactNode;
  description?: ReactNode;
  goals?: SustainabilityGoal[];
}

const defaultGoals: SustainabilityGoal[] = [
  {
    year: 2024,
    target: "Baseline Year",
    description: "Current carbon emissions: 2,500 tonnes CO2e annually. All vehicles measured and tracked.",
    icon: <Leaf className="w-6 h-6" />,
    category: "emissions",
  },
  {
    year: 2025,
    target: "15% Reduction",
    description: "Optimized routes and fleet efficiency improvements reduce emissions to 2,125 tonnes.",
    icon: <TrendingDown className="w-6 h-6" />,
    category: "emissions",
  },
  {
    year: 2026,
    target: "30% Renewable Energy",
    description: "All offices transition to 30% renewable energy sources. Solar installations begin.",
    icon: <Zap className="w-6 h-6" />,
    category: "renewable",
  },
  {
    year: 2027,
    target: "25% Fleet Upgrade",
    description: "25% of fleet upgraded to electric or hybrid vehicles. Target: 1,875 tonnes CO2e.",
    icon: <TrendingDown className="w-6 h-6" />,
    category: "emissions",
  },
  {
    year: 2028,
    target: "Zero Waste",
    description: "All operations achieve 95% waste diversion. Comprehensive recycling program.",
    icon: <Leaf className="w-6 h-6" />,
    category: "waste",
  },
  {
    year: 2030,
    target: "Carbon Neutral",
    description: "50% fleet electric. Full renewable energy. Net-zero carbon operations achieved.",
    icon: <Leaf className="w-6 h-6" />,
    category: "emissions",
  },
];

const SustainabilityGoals = ({
  title = <>Our Path to <span className="text-primary">Carbon Neutrality</span></>,
  description = "Clear targets and timeline for reducing environmental impact",
  goals = defaultGoals,
}: SustainabilityGoalsProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Our Commitments</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-3xl">
            {description}
          </Typography>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => {
              const categoryColor = {
                emissions: "from-primary/10",
                renewable: "from-yellow-100",
                waste: "from-green-100",
              };

              return (
                <div
                  key={goal.year}
                  className={`relative bg-gradient-to-br ${categoryColor[goal.category]} to-transparent rounded-lg p-6 border border-stroke/40 hover:border-primary/30 hover:shadow-lg transition-all`}
                >
                  {/* Year Badge */}
                  <div className="inline-block px-4 py-2 bg-primary text-white rounded-full mb-4">
                    <Typography variant="caption" className="font-bold">
                      {goal.year}
                    </Typography>
                  </div>

                  {/* Icon */}
                  <div className="text-primary mb-3">{goal.icon}</div>

                  {/* Target */}
                  <Typography variant="Bold_H5" className="text-secondary mb-2">
                    {goal.target}
                  </Typography>

                  {/* Description */}
                  <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                    {goal.description}
                  </Typography>

                  {/* Category Label */}
                  <div className="mt-4 pt-4 border-t border-stroke/20">
                    <Typography variant="caption" className="text-gray font-semibold capitalize">
                      {goal.category === "emissions" && "🌍 Emissions Reduction"}
                      {goal.category === "renewable" && "⚡ Renewable Energy"}
                      {goal.category === "waste" && "♻️ Zero Waste"}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Environmental Impact Summary */}
        <div className="mt-12 bg-primary/5 rounded-lg p-8">
          <Typography variant="Bold_H5" className="text-secondary mb-6">
            2030 Vision: Expected Impact
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Typography variant="Bold_H3" className="text-primary">
                1,250 tonnes
              </Typography>
              <Typography variant="Regular_H6" className="text-gray mt-2">
                CO2e Reduction (50% decrease from baseline)
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H3" className="text-primary">
                100%
              </Typography>
              <Typography variant="Regular_H6" className="text-gray mt-2">
                Renewable Energy across all operations
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H3" className="text-primary">
                0 kg
              </Typography>
              <Typography variant="Regular_H6" className="text-gray mt-2">
                Landfill waste from operations (95% diversion)
              </Typography>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            Join us in building a sustainable future for logistics
          </Typography>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Learn About Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
