"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

interface ContactChannel {
  icon: ReactNode;
  title: string;
  description: string;
  detail: string | ReactNode;
  actionLabel: string;
  actionHref: string;
}

interface ContactChannelsProps {
  channels?: ContactChannel[];
  showBusinessHours?: boolean;
}

const defaultChannels: ContactChannel[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone Support",
    description: "Speak directly with our logistics experts",
    detail: "+60 3-5131 7338",
    actionLabel: "Call Now",
    actionHref: "tel:+60351317338",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Support",
    description: "Send us your detailed inquiry",
    detail: "operation@visionstransport.com.my",
    actionLabel: "Send Email",
    actionHref: "mailto:operation@visionstransport.com.my",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Our HQ",
    description: "Meet us in person at our headquarters",
    detail: "Shah Alam, Selangor, Malaysia",
    actionLabel: "Get Directions",
    actionHref: "https://maps.google.com",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    description: "Real-time support during business hours",
    detail: "Average response: 2-5 minutes",
    actionLabel: "Start Chat",
    actionHref: "#",
  },
];

const ContactChannels = ({
  channels = defaultChannels,
  showBusinessHours = true,
}: ContactChannelsProps) => {
  return (
    <section className="py-12 md:py-16 global-padding-container bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <SubLabel>Get in Touch</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            Reach Us Multiple Ways
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-3">
            Choose the contact method that works best for you
          </Typography>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-stroke/40 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {channel.icon}
              </div>

              {/* Title */}
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                {channel.title}
              </Typography>

              {/* Description */}
              <Typography variant="Regular_H6" className="text-gray mb-4">
                {channel.description}
              </Typography>

              {/* Detail */}
              <Typography variant="Medium_H6" className="text-primary font-semibold mb-4 break-all">
                {channel.detail}
              </Typography>

              {/* Action Button */}
              <a
                href={channel.actionHref}
                target={channel.actionHref.startsWith("http") && !channel.actionHref.includes("mailto:") ? "_blank" : undefined}
                rel={channel.actionHref.startsWith("http") && !channel.actionHref.includes("mailto:") ? "noopener noreferrer" : undefined}
                className="inline-block w-full text-center px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
              >
                {channel.actionLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        {showBusinessHours && (
          <div className="bg-secondary rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 flex-shrink-0" />
                <div>
                  <Typography variant="Bold_H5" className="text-white">
                    Business Hours
                  </Typography>
                  <Typography variant="Regular_H6" className="text-white/80">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </Typography>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div>
                <Typography variant="Regular_H6" className="text-white/80">
                  <span className="font-semibold">Saturday:</span> 9:00 AM - 1:00 PM <br />
                  <span className="font-semibold">Sunday:</span> Closed
                </Typography>
              </div>
            </div>
          </div>
        )}

        {/* Response Time Info */}
        <div className="mt-8 text-center">
          <Typography variant="Regular_H6" className="text-gray">
            ⏱️ We typically respond to inquiries within <span className="font-semibold">2-4 business hours</span>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ContactChannels;
