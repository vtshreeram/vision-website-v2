import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import { Banner } from "@/components/shared";
import Link from "next/link";
import Button from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, FileText, Truck, HelpCircle } from "lucide-react";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const HelpSupportPage = () => {
    const contactMethods = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone Support",
            description: "Speak directly with our logistics experts",
            detail: "+60 3-5131 7338",
            action: "Call Now",
            href: "tel:+60351317338",
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email Support",
            description: "Send us your queries anytime",
            detail: "operation@visionstransport.com.my",
            action: "Send Email",
            href: "mailto:operation@visionstransport.com.my",
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Visit Our HQ",
            description: "Come to our office",
            detail: "Shah Alam, Selangor, Malaysia",
            action: "Get Directions",
            href: "https://maps.google.com",
        },
    ];

    const faqs = [
        {
            question: "How do I track my shipment via VizFleet?",
            answer: "You can track your shipment in real-time using our VizFleet portal. Simply enter your tracking number on our Tracking page or use the link provided in your confirmation email.",
        },
        {
            question: "What are your delivery times between Malaysia and Singapore?",
            answer: "Standard delivery between Malaysia and Singapore typically takes 1-2 business days. Express delivery options are available for same-day or next-day delivery depending on pickup location and time.",
        },
        {
            question: "What items are prohibited from shipping?",
            answer: "Prohibited items include illegal substances, hazardous materials, weapons, counterfeit goods, and perishable items without proper arrangements. Please refer to our Terms & Conditions for a complete list.",
        },
        {
            question: "How do I request a quote for my shipment?",
            answer: "You can request a quote through our Contact Us page, call our customer service line, or email us with your shipment details including origin, destination, weight, and dimensions.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, credit cards (Visa, Mastercard), and offer credit terms for qualified business accounts. Payment terms can be discussed during your onboarding process.",
        },
        {
            question: "Do you offer insurance for shipments?",
            answer: "Yes, we offer cargo insurance options to protect your shipments. Basic coverage is included in our standard service, with additional coverage available for high-value items.",
        },
    ];

    const quickLinks = [
        { icon: <Truck className="h-5 w-5" />, title: "Track Shipment", href: "https://track.visionstransport.com.my/" },
        { icon: <FileText className="h-5 w-5" />, title: "Request Quote", href: "/contact-us" },
        { icon: <HelpCircle className="h-5 w-5" />, title: "FAQs", href: "#faqs" },
        { icon: <MessageCircle className="h-5 w-5" />, title: "Contact Us", href: "/contact-us" },
    ];

    return (
        <main>
            <Head heading="Support Center" subHeading="We're Here to Help" bgImg={headBg} />

            {/* Quick Links Section */}
            <section className="py-12 bg-secondary-background global-padding-container">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-primary">{link.icon}</div>
                                <Typography variant="Bold_H6" className="text-foreground">
                                    {link.title}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Methods Section */}
            <section className="py-16 md:py-24 global-padding-container">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <Typography variant="Bold_H2" className="text-foreground mb-4">
                            Get in <span className="text-primary">Touch</span>
                        </Typography>
                        <Typography variant="Regular_H5" className="text-gray max-w-2xl mx-auto">
                            Our support team is ready to assist you with any questions about your shipments or our VizFleet technology.
                        </Typography>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm border border-stroke text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-background text-primary mb-4">
                                    {method.icon}
                                </div>
                                <Typography variant="Bold_H4" className="text-foreground mb-2">
                                    {method.title}
                                </Typography>
                                <Typography variant="Regular_H6" className="text-gray mb-2">
                                    {method.description}
                                </Typography>
                                <Typography variant="Bold_H6" className="text-primary mb-4">
                                    {method.detail}
                                </Typography>
                                <Link href={method.href}>
                                    <Button variant="secondary" className="w-full">
                                        {method.action}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Hours */}
            <section className="py-12 bg-secondary global-padding-container">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
                        <div className="flex items-center gap-3">
                            <Clock className="h-8 w-8" />
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
                                Saturday: 9:00 AM - 1:00 PM | Sunday: Closed
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="py-16 md:py-24 global-padding-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Typography variant="Bold_H2" className="text-foreground mb-4">
                            Frequently Asked <span className="text-primary">Questions</span>
                        </Typography>
                        <Typography variant="Regular_H5" className="text-gray">
                            Find answers to common questions about our services.
                        </Typography>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-sm border border-stroke"
                            >
                                <Typography variant="Bold_H5" className="text-foreground mb-3">
                                    {faq.question}
                                </Typography>
                                <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                    {faq.answer}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Need Help CTA */}
            <section className="py-16 bg-secondary-background global-padding-container">
                <div className="max-w-4xl mx-auto text-center">
                    <Typography variant="Bold_H3" className="text-foreground mb-4">
                        Still Need Help?
                    </Typography>
                    <Typography variant="Regular_H5" className="text-gray mb-8">
                        Our customer support team is ready to assist you with any questions.
                    </Typography>
                    <Link href="/contact-us">
                        <Button variant="primary">Contact Our Team</Button>
                    </Link>
                </div>
            </section>

            <Banner />
        </main>
    );
};

export default HelpSupportPage;
