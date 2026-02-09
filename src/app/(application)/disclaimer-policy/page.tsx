import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const DisclaimerPolicyPage = () => {
    return (
        <main>
            <Head heading="Disclaimer Policy" subHeading="Legal Notice" bgImg={headBg} />

            <section className="py-16 md:py-24 global-padding-container">
                <div className="max-w-4xl mx-auto prose-body">
                    <Typography variant="Regular_H6" className="text-gray mb-8">
                        Last updated: February 2026
                    </Typography>

                    <div className="space-y-8">
                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                1. General Disclaimer
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                The information provided by Visions Transport Enterprise ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                2. External Links Disclaimer
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                3. Professional Disclaimer
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                The Site cannot and does not contain professional logistics advice. The logistics information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional logistics advice. The use or reliance of any information contained on the Site is solely at your own risk.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                4. Limitation of Liability
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                In no event shall we be liable to you or any third party for any special, punitive, incidental, indirect or consequential damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of use, data or profits, whether or not we have been advised of the possibility of such damages, and on any theory of liability, arising out of or in connection with the use of this website or of any web site referenced or linked to from this website.
                            </Typography>
                        </div>

                        <div>
                            <Typography variant="Bold_H3" className="text-foreground mb-4">
                                5. Contact Us
                            </Typography>
                            <Typography variant="Regular_H6" className="text-gray">
                                If you have any questions about this Disclaimer Policy, please contact us at:<br />
                                Email: operation@visionstransport.com.my<br />
                                Phone: +60 3-5131 3898
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <Banner />
        </main>
    );
};

export default DisclaimerPolicyPage;
