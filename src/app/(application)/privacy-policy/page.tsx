import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const PrivacyPolicyPage = () => {
    return (
        <main>
            <Head heading="Privacy Policy" subHeading="Privacy Policy" bgImg={headBg} />

            <section className="py-16 md:py-24 global-padding-container">
                <div className="max-w-4xl mx-auto prose-body">
                    <Typography variant="Regular_H6" className="text-gray mb-8">
                        Last updated: December 2024
                    </Typography>

                    <div className="space-y-8">
                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                1. Introduction
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                Visions Transport Enterprise (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our logistics services.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                2. Information We Collect
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray mb-4">
                                We may collect information about you in a variety of ways, including:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li>Personal Data: Name, email address, phone number, and mailing address</li>
                                <li>Business Information: Company name, business registration details</li>
                                <li>Shipment Data: Tracking information, delivery addresses, package details</li>
                                <li>Payment Information: Billing details and transaction history</li>
                                <li>Usage Data: Browser type, IP address, pages visited, time spent on site</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                3. How We Use Your Information
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray mb-4">
                                We use the information we collect to:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li>Process and manage your shipments and logistics requests</li>
                                <li>Provide customer support and respond to inquiries</li>
                                <li>Send transactional emails and service updates</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                4. Information Sharing
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, delivery partners, and IT service providers. These parties are contractually obligated to keep your information confidential.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                5. Data Security
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                6. Your Rights
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray mb-4">
                                You have the right to:
                            </Typography>
                            <ul className="list-disc list-inside space-y-2 text-gray">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                7. Contact Us
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                If you have any questions about this Privacy Policy, please contact us at:<br />
                                Email: operation@visionstransport.com.my<br />
                                Address: No 2A-1 Jalan Komuniing Prima C33/C, Seksyen 33, 40400 Shah Alam, Selangor, Malaysia
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <Banner />
        </main>
    );
};

export default PrivacyPolicyPage;
