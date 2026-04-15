"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

interface LeadershipTeamProps {
  title?: ReactNode;
  description?: ReactNode;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mohammed Rahman",
    role: "Founder & CEO",
    bio: "20+ years in logistics and supply chain management. Leading Vision Transport's expansion across Southeast Asia with a vision for technology-driven logistics.",
    expertise: ["Supply Chain Strategy", "Business Development", "Regional Expansion"],
    social: {
      linkedin: "#",
      email: "mohammed@visionstransport.com.my",
    },
  },
  {
    id: "2",
    name: "Sarah Lee",
    role: "Chief Operations Officer",
    bio: "Operations excellence expert with 15+ years managing large-scale logistics networks. Drives efficiency and customer satisfaction across all operations.",
    expertise: ["Fleet Management", "Process Optimization", "Quality Assurance"],
    social: {
      linkedin: "#",
      email: "sarah@visionstransport.com.my",
    },
  },
  {
    id: "3",
    name: "Arjun Patel",
    role: "Chief Technology Officer",
    bio: "Tech visionary behind VizFleet platform. Built our proprietary tracking and optimization systems that power modern logistics.",
    expertise: ["AI & Route Optimization", "Real-time Tracking", "System Architecture"],
    social: {
      linkedin: "#",
      email: "arjun@visionstransport.com.my",
    },
  },
  {
    id: "4",
    name: "Lisa Wong",
    role: "Head of Customer Success",
    bio: "Dedicated to ensuring every customer receives exceptional service. Built our customer-first culture and support excellence program.",
    expertise: ["Customer Experience", "Team Leadership", "Process Innovation"],
    social: {
      linkedin: "#",
      email: "lisa@visionstransport.com.my",
    },
  },
];

const LeadershipTeam = ({
  title = <>Meet Our <span className="text-primary">Leadership Team</span></>,
  description = "Experienced professionals driving Vision Transport's mission to transform Southeast Asian logistics.",
  members = defaultMembers,
}: LeadershipTeamProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Our Leaders</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-3xl">
            {description}
          </Typography>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-lg border border-stroke/40 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden relative">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                        <Typography variant="Bold_H3" className="text-primary">
                          {member.name.charAt(0)}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Role */}
                <Typography variant="Bold_H5" className="text-secondary">
                  {member.name}
                </Typography>
                <Typography variant="Medium_H6" className="text-primary mt-1 font-semibold">
                  {member.role}
                </Typography>

                {/* Bio */}
                <Typography variant="Regular_H6" className="text-gray mt-3 leading-relaxed">
                  {member.bio}
                </Typography>

                {/* Expertise Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                {member.social && (
                  <div className="mt-4 flex gap-3 pt-4 border-t border-stroke/20">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray hover:text-primary transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray hover:text-primary transition-colors"
                        title="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            Want to join our leadership journey? We're always looking for talented professionals.
          </Typography>
          <Link
            href="/careers"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
