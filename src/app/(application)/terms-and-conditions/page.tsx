import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const TermsAndConditionsPage = () => {
    return (
        <main>
            <Head heading="Terms & Conditions" subHeading="Terms & Conditions" bgImg={headBg} />

            <section className="py-16 md:py-24 global-padding-container">
                <div className="max-w-4xl mx-auto">
                    <Typography variant="Regular_H6" className="text-gray mb-8">
                        Last updated: December 2024
                    </Typography>

                    <div className="space-y-8">
                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                1. Acceptance of Terms
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                By accessing and using Visions Transport Enterprise&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                2. Services Description
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                Visions Transport Enterprise provides cross-border logistics services between Malaysia and Singapore, including but not limited to freight forwarding, warehousing, distribution, and real-time shipment tracking. Our services are subject to availability and may be modified at our discretion.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                3. User Responsibilities
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed mb-4">
                                As a user of our services, you agree to:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li>Provide accurate and complete information for all shipments</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not ship prohibited or restricted items</li>
                                <li>Properly package and label all items</li>
                                <li>Pay all applicable fees and charges in a timely manner</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                4. Prohibited Items
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed mb-4">
                                The following items are strictly prohibited from our logistics services:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li>Illegal substances and contraband</li>
                                <li>Hazardous materials (unless properly licensed)</li>
                                <li>Weapons and explosives</li>
                                <li>Counterfeit goods</li>
                                <li>Perishable items without proper arrangements</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                5. Liability and Insurance
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                While we take every precaution to ensure the safe delivery of your goods, our liability is limited to the declared value of the shipment or the maximum amount specified in your service agreement. We recommend purchasing additional insurance for high-value shipments.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                6. Payment Terms
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                Payment is due upon booking or as agreed in your service contract. We accept various payment methods including bank transfer, credit card, and approved credit terms for qualified business accounts. Late payments may incur additional fees.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                7. Cancellation and Refunds
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                Cancellations made 24 hours before scheduled pickup may be eligible for a full refund. Cancellations made within 24 hours may incur a cancellation fee. Refunds will be processed within 7-14 business days.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                8. Governing Law
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Malaysian courts.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                9. Contact Information
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                                For questions about these Terms and Conditions, please contact us at:<br />
                                Email: operation@visionstransport.com.my<br />
                                Phone: +60 3-5131 7338
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <Banner />
        </main>
    );
};

export default TermsAndConditionsPage;
