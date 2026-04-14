"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Skeleton } from "@/components/ui/Skeleton";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ahmad Razak",
        role: "Logistics Manager",
        company: "Tech Solutions Sdn Bhd",
        content:
            "Visions Transport has transformed our supply chain operations. Their VizFleet technology provides real-time visibility that has reduced our delivery delays by 40%. Highly recommended for any business looking to optimize logistics.",
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Operations Director",
        company: "FastMart Retail",
        content:
            "We've been working with Visions for 5 years now. Their cross-border Malaysia-Singapore service is seamless, and their customer support team is always responsive. They truly understand e-commerce logistics.",
    },
    {
        id: 3,
        name: "Raj Kumar",
        role: "Supply Chain Head",
        company: "Global Manufacturing Co",
        content:
            "The TAPA TSR certification gives us confidence in their security standards. Their bonded trucking services have been instrumental in our import/export operations. Professional team with excellent execution.",
    },
    {
        id: 4,
        name: "Michelle Wong",
        role: "Procurement Manager",
        company: "Asia Pacific Distributors",
        content:
            "What sets Visions apart is their technology-first approach. The real-time tracking and automated notifications have made our job so much easier. Our customers love the transparency.",
    },
];

interface TestimonialsProps {
    isLoading?: boolean;
}

const Testimonials = ({ isLoading = false }: TestimonialsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section className="py-16 md:py-24 bg-white global-padding-container">
            <div className="max-w-7xl mx-auto">
                {/* SubLabel */}
                <div className="mb-8">
                    <SubLabel>Testimonials</SubLabel>
                </div>

                {/* Header with Navigation Arrows */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex-1">
                        <Typography variant="SemiBold_H2" className="text-foreground mb-4">
                            Trusted by <span className="text-primary">Leaders</span>
                        </Typography>
                        <Typography variant="Regular_H5" className="text-gray max-w-2xl">
                            See why top brands rely on Visions for their critical supply chain needs.
                        </Typography>
                    </div>

                    {/* Navigation Arrows - aligned right */}
                    <div className="flex gap-3 ml-8 flex-shrink-0">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors duration-200"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors duration-200"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl">
                    {/* Gradient fade overlay on right */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-2xl" />
                    {isLoading ? (
                        <div className="bg-background rounded-2xl p-8 md:p-12 relative h-[300px] flex flex-col justify-between">
                            <div className="absolute top-6 right-8 text-primary/20">
                                <Quote size={64} />
                            </div>
                            <div className="relative z-10">
                                <Skeleton variant="text" className="w-full h-6 mb-2" />
                                <Skeleton variant="text" className="w-11/12 h-6 mb-2" />
                                <Skeleton variant="text" className="w-4/5 h-6 mb-8" />
                                
                                <div className="flex items-center gap-4">
                                    <Skeleton variant="circular" className="w-14 h-14" />
                                    <div>
                                        <Skeleton variant="text" className="w-32 h-5 mb-1" />
                                        <Skeleton variant="text" className="w-48 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-background rounded-2xl p-8 md:p-12 relative"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8 text-primary/20">
                                    <Quote size={64} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <Typography
                                        variant="Regular_H5"
                                        className="text-gray leading-relaxed mb-8 italic"
                                    >
                                        "{testimonials[currentIndex].content}"
                                    </Typography>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                                            <Typography variant="Bold_H4" className="text-primary">
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="SemiBold_H5" className="text-foreground">
                                                {testimonials[currentIndex].name}
                                            </Typography>
                                            <Typography variant="Regular_H6" className="text-gray">
                                                {testimonials[currentIndex].role},{" "}
                                                {testimonials[currentIndex].company}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-gray/30 hover:bg-gray/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
